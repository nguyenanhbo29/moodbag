import { mkdir, writeFile } from "node:fs/promises";
const queries = [
  "Ben Thanh Market",
  "Saigon Notre Dame Cathedral facade",
  "Bitexco Financial Tower",
  "Ho Chi Minh City motorbikes street",
  "Nelumbo nucifera leaf",
  "Saigon market 1920",
  "Saigon cathedral postcard",
];
await mkdir(".cache", { recursive: true });
for (const query of queries) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "7",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "1920",
  });
  const response = await fetch(
    `https://commons.wikimedia.org/w/api.php?${params}`,
  );
  if (!response.ok) throw new Error(`${query}: ${response.status}`);
  const data = await response.json();
  const files = Object.values(data.query?.pages || {}).map((p) => ({
    title: p.title,
    ...p.imageinfo?.[0],
  }));
  await writeFile(
    `.cache/${query.replaceAll(" ", "-")}.json`,
    JSON.stringify(files, null, 2),
  );
  console.log(
    query,
    files.map((f) => ({
      title: f.title,
      license: f.extmetadata?.LicenseShortName?.value,
      description: f.extmetadata?.ImageDescription?.value
        ?.replace(/<[^>]*>/g, "")
        .slice(0, 150),
    })),
  );
}
