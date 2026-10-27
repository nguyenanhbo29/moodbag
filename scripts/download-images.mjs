import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Commons metadata is retained with each asset. Run only to deliberately refresh assets.
const assets = [
  ["ben-thanh/market", "Ben Thanh Market, 2023 (01).jpg"],
  ["ben-thanh/interior", "Ben Thanh Market, 2023 (04).jpg"],
  ["ben-thanh/archive", "Le grand marché, Saïgon (PV0017193).jpg"],
  [
    "notre-dame/cathedral",
    "Basílica de Nuestra Señora, Ciudad Ho Chi Minh, Vietnam, 2013-08-14, DD 09.JPG",
  ],
  ["notre-dame/archive", "Saïgon -- La Cathédrale - Sortie de la Messe.jpg"],
  ["notre-dame/evening", "Notre Dame Ho Chi Minh (61641967).jpeg"],
  [
    "bitexco/tower",
    "Bitexco Financial Tower, Ciudad Ho Chi Minh, Vietnam, 2013-08-14, DD 03.JPG",
  ],
  ["bitexco/skyline", "Ho Chi Minh City Skyline at Night.jpg"],
  [
    "bitexco/city-view",
    "Vista de Ciudad Ho Chi Minh desde Bitexco Financial Tower, Vietnam, 2013-08-14, DD 13.JPG",
  ],
  [
    "motorbike/street",
    "Ho Chi Minh City motorbikers (Unsplash LhENdA-0yCM).jpg",
  ],
  [
    "motorbike/daily-life",
    "Ho Chi Minh City, Vietnam, Life on the streets.jpg",
  ],
  [
    "motorbike/traffic",
    "Lascar Ho Chi Minh City - The capital of motorbikes (4607953274).jpg",
  ],
  ["lotus/leaf", "Nelumbo (Lutus) Leaf.jpg"],
  ["lotus/light", "Sunlight through Nelumbo nucifera leaf (Sacred lotus).jpg"],
];
const strip = (s) =>
  (s || "")
    .replace(/<[^>]*>/g, "")
    .replaceAll("&amp;", "&")
    .trim();
const credits = [];
const cached = JSON.parse(
  await readFile("public/images/credits.json", "utf8").catch(() => "[]"),
);
async function request(url) {
  if (url.startsWith("https://upload.wikimedia.org/")) url = url.split("?")[0];
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "MoodBagCulturalStories/1.0 (educational local website; Wikimedia attribution retained)",
      },
    });
    if (response.ok) return response;
    if (response.status !== 429 && response.status !== 503)
      throw new Error(`${response.status}: ${url}`);
    await new Promise((resolve) => setTimeout(resolve, 2500 * (attempt + 1)));
  }
  throw new Error(`Rate limited: ${url}`);
}
for (const [name, title] of assets) {
  const prior = cached.find((c) => c.image === `/images/${name}.webp`);
  if (prior) {
    credits.push(prior);
    continue;
  }
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    titles: `File:${title}`,
    prop: "imageinfo",
    iiprop: "url|extmetadata",
  });
  const api = await request(
    `https://commons.wikimedia.org/w/api.php?${params}`,
  );
  if (!api.ok) throw new Error(`Metadata ${title}: ${api.status}`);
  const data = await api.json();
  const info = Object.values(data.query.pages)[0].imageinfo?.[0];
  if (!info) throw new Error(`Missing file ${title}`);
  // Wikimedia's thumbnail CDN is more reliable than original-file downloads.
  const originalPath = new URL(info.url).pathname.replace(
    "/wikipedia/commons/",
    "",
  );
  const filename = originalPath.split("/").at(-1);
  let response;
  for (const size of [1920, 1280, 960]) {
    try {
      response = await request(
        `https://thumb.wikimedia.org/wikipedia/commons/thumb/${originalPath}/${size}px-${filename}`,
      );
      break;
    } catch {
      /* Try a smaller cached derivative. */
    }
  }
  if (!response) response = await request(info.url);
  if (
    !response.ok ||
    !response.headers.get("content-type")?.startsWith("image/")
  )
    throw new Error(`Image ${title}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const destination = path.join("public/images", name);
  await mkdir(path.dirname(destination), { recursive: true });
  await sharp(buffer)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 83 })
    .toFile(`${destination}.webp`);
  await sharp(buffer)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${destination}-small.webp`);
  const m = info.extmetadata;
  credits.push({
    image: `/images/${name}.webp`,
    title,
    author: strip(m.Artist?.value),
    license: strip(m.LicenseShortName?.value),
    licenseUrl:
      m.LicenseUrl?.value ||
      "https://commons.wikimedia.org/wiki/Commons:Public_domain",
    source: info.descriptionurl,
    original: info.url,
    description: strip(m.ImageDescription?.value),
    changes:
      "Resized and converted to WebP; cropped and color treated in the page layout.",
  });
  await writeFile(
    "public/images/credits.json",
    JSON.stringify(credits, null, 2),
  );
  console.log(`Downloaded ${name}: ${credits.at(-1).license}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
await writeFile("public/images/credits.json", JSON.stringify(credits, null, 2));
await writeFile(
  "public/images/ATTRIBUTION.md",
  "# Image attribution\n\nAll photographs are sourced from Wikimedia Commons. Local WebP derivatives retain the original license. Layout crops and CSS color treatments are applied.\n\n" +
    credits
      .map(
        (c) =>
          `## ${c.image}\n- ${c.title}\n- Author: ${c.author}\n- License: [${c.license}](${c.licenseUrl})\n- Source: ${c.source}\n- Changes: ${c.changes}\n`,
      )
      .join("\n"),
);
