import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import sharp from "sharp";
import { stories } from "../src/data/stories.js";

const credits = JSON.parse(
  await readFile("public/images/credits.json", "utf8"),
);
const assets = new Set(["/images/motorbike/daily-life.webp"]);
assert.equal(stories.length, 5);
assert.equal(new Set(stories.map((s) => s.slug)).size, 5);
for (const story of stories) {
  for (const field of [
    "id",
    "slug",
    "title",
    "subtitle",
    "introduction",
    "historicalBackground",
    "timeline",
    "culturalMeaning",
    "designInspiration",
    "closingMessage",
    "accentColor",
  ])
    assert.ok(story[field]?.length, `${story.slug}: ${field}`);
  for (const field of [
    "heroImage",
    "historyImage",
    "lifestyleImage",
    "productImage",
  ])
    assets.add(story[field]);
}
for (const asset of assets) {
  await access(`public${asset}`);
  if (asset.endsWith(".webp")) {
    const metadata = await sharp(`public${asset}`).metadata();
    assert.ok(
      metadata.width >= 800 && metadata.height > 200,
      `Image too small: ${asset}`,
    );
    await access(`public${asset.replace(".webp", "-small.webp")}`);
    const credit = credits.find((c) => c.image === asset);
    assert.ok(
      credit?.author && credit?.license && credit?.source,
      `Missing attribution: ${asset}`,
    );
  }
}
console.log(
  `PASS: ${stories.length} stories, ${assets.size} local assets, responsive variants and photo attribution.`,
);
