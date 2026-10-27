import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { stories } from "../src/data/stories.js";

const baseURL = process.env.PREVIEW_URL || "http://127.0.0.1:5173";
const executablePath =
  process.env.BROWSER_PATH ||
  [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  ].find(existsSync);
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
});
const context = await browser.newContext({
  reducedMotion: "reduce",
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
const failures = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("response", (response) => {
  if (response.url().startsWith(baseURL) && response.status() >= 400)
    failures.push(`${response.status()} ${response.url()}`);
});
await mkdir("test-results", { recursive: true });
const checks = [];
async function inspect(path, width, screenshotName) {
  await page.setViewportSize({ width, height: 1000 });
  await page.goto(`${baseURL}${path}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.locator("h1").waitFor();
  // Scroll through the page to exercise lazy loading and all scroll-reveal sections.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 750) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 35));
    }
    window.scrollTo(0, 0);
  });
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((image) => image.decode().catch(() => {})),
    );
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
  });
  await page.waitForTimeout(500);
  const info = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    brokenImages: [...document.images]
      .filter((i) => !i.complete || i.naturalWidth === 0)
      .map((i) => i.getAttribute("src")),
    missingAlt: [...document.images].filter((i) => !i.hasAttribute("alt"))
      .length,
    headingCount: document.querySelectorAll("h1").length,
    brokenAnchors: [...document.querySelectorAll('a[href^="#"]')]
      .map((a) => a.getAttribute("href"))
      .filter((h) => !document.getElementById(h.slice(1))),
  }));
  assert.ok(
    info.scrollWidth <= width,
    `${path} overflow at ${width}: ${info.scrollWidth}`,
  );
  assert.deepEqual(info.brokenImages, [], `${path}: broken images`);
  assert.equal(info.missingAlt, 0);
  assert.equal(info.headingCount, 1);
  assert.deepEqual(info.brokenAnchors, []);
  if (screenshotName)
    await page.screenshot({
      path: `test-results/${screenshotName}.png`,
      fullPage: true,
    });
  checks.push({ path, width, result: "pass" });
}
try {
  for (const width of [360, 375, 390, 430, 768, 1024, 1440])
    await inspect(
      "/",
      width,
      [390, 1440].includes(width) ? `home-${width}` : null,
    );
  for (const story of stories) {
    for (const width of [360, 375, 390, 430, 768, 1024, 1440]) {
      await inspect(
        `/stories/${story.slug}`,
        width,
        [390, 1440].includes(width) ? `${story.slug}-${width}` : null,
      );
      await page.reload({ waitUntil: "networkidle" });
      assert.ok(
        (await page.locator("h1").innerText()).includes(story.heroLines[0]),
      );
      assert.equal(await page.locator(".related-grid .story-card").count(), 4);
      assert.equal(
        await page
          .locator(`.related-grid a[href="/stories/${story.slug}"]`)
          .count(),
        0,
      );
    }
  }
  await inspect("/404", 390, "404-390");
  await inspect("/stories/unknown-story", 1440);
  await page.goto(baseURL);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Mở menu" }).click();
  await page
    .getByRole("navigation", { name: "Điều hướng trên điện thoại" })
    .getByRole("link", { name: "02 Nhà thờ Đức Bà" })
    .click();
  await page.waitForURL("**/stories/nha-tho-duc-ba");
  assert.equal(
    await page
      .getByRole("button", { name: "Mở menu" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Mở menu" }).click();
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Mở menu" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page
    .getByRole("button", { name: "Nguồn ảnh & ghi chú thiết kế" })
    .click();
  await page.getByRole("dialog").waitFor({ state: "visible" });
  assert.ok((await page.locator(".credit-list article").count()) >= 14);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").isVisible(), false);
  await page.goto(`${baseURL}/stories/cho-ben-thanh`);
  await page.getByRole("link", { name: "Khám phá thiết kế MoodBag" }).click();
  await page.waitForTimeout(200);
  assert.equal(await page.evaluate(() => location.hash), "#product-concept");
  const accessibility = [];
  for (const route of [
    "/",
    ...stories.map((s) => `/stories/${s.slug}`),
    "/404",
  ]) {
    await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    accessibility.push({
      route,
      violations: result.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
  }
  await writeFile(
    "test-results/accessibility.json",
    JSON.stringify(accessibility, null, 2),
  );
  assert.deepEqual(
    accessibility.filter((a) => a.violations.length),
    [],
    "Accessibility violations",
  );
  assert.deepEqual(errors, [], "Browser console errors");
  assert.deepEqual(failures, [], "Failed local requests");
  await writeFile(
    "test-results/report.json",
    JSON.stringify(
      {
        checks,
        errors,
        failures,
        interactions:
          "menu, route navigation, reload, Escape, image credits dialog, design CTA: pass",
      },
      null,
      2,
    ),
  );
  console.log(
    `PASS: ${checks.length} route/viewport checks; all images, mobile navigation, route refresh, 404, credits dialog and design CTA. No console errors.`,
  );
} finally {
  await browser.close();
}
