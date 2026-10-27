import { mkdir, writeFile } from "node:fs/promises";

const motifs = [
  `<path d="M-155 50V8h110v-72h90V8h110v42M-45 8h90M-155 25h110M45 25h110M-23 50V11h46v39M-137 50V33h20v17m18 0V33h20v17m158 0V33h20v17m18 0V33h20v17M-55-64L0-98l55 34M-34-64v-8h68v8M-13-80v-13h26v13"/><circle cy="-33" r="20"/><path d="M0-48v16l12 7M-165 50h330M-170 55h340M-140 8l18-20h77M45-12h77l18 20"/>`,
  `<path d="M-115 65V-70h45v135m140 0V-70h45V65M-125-70l32-62 33 62m120 0 32-62 33 62M-92-132v-16m-8 7h16m76 9v-16m-8 7h16M-70 65V-8L0-60 70-8v73M-13 65V20Q0-3 13 20v45M-105 10h25V-25q-12-20-25 0v35m185 0h25V-25q-12-20-25 0v35M-52 65V28q11-18 22 0v37m60 0V28q11-18 22 0v37M-130 65h260"/><circle cy="-20" r="15"/>`,
  `<path d="M-45 85q-15-140 28-235Q25-119 35-25L50 85ZM-45 85h100M-17-150q4 110-10 235M5-127q16 110 10 212M35-25l65-8-2 12-61 16M-30-110l43 7m-50 22 56 6m-59 21 64 7m-67 23 70 5m-70 23 72 5m-72 22 77 5m-78 22 82 6m-84 22 87 6"/>`,
  `<circle cx="-89" cy="40" r="42"/><circle cx="93" cy="40" r="42"/><path d="M-89 40l52-63h69l61 63M-89 40h98l23-63M-37-23l17-30H9m14-8h26l19 21h37M-3-62h-58m-5 0h-19M45-60l-2-26 20-7M-102-6q-39 5-41 41m192-10h53M9 40q-12-70 44-77M-20-53L-36-78M-48-80h23"/>`,
  `<path d="M0 65C-150 39-154-66-53-93-18-111 35-117 98-63 169 6 93 68 0 65Z M0 65L-8-40M-8-40l-90-14m90 14-62-50m62 50 7-64m-7 64 56-55m-56 55 97-22m-97 22 114 16m-114-16 83 63m-83-63-85 53m85-53-113 12M0 65q7 34 31 46"/>`,
];
await mkdir("public/images/moodbag", { recursive: true });
for (let i = 0; i < 5; i++) {
  const ink = i === 2 || i === 4 ? "#56624b" : "#8b4937";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="900" viewBox="0 0 800 900" role="img" aria-label="MoodBag canvas tote design concept, temporary illustration">
  <defs>
  <linearGradient id="paper" x2="1" y2="1"><stop stop-color="#e8ddca"/><stop offset="1" stop-color="#d5c5ac"/></linearGradient>
  <linearGradient id="canvas" x1="0" y1="0" x2="1" y2=".2"><stop stop-color="#c8bda4"/><stop offset=".08" stop-color="#eee5cf"/><stop offset=".5" stop-color="#f5edda"/><stop offset=".87" stop-color="#e6dcc4"/><stop offset="1" stop-color="#bcb097"/></linearGradient>
  <linearGradient id="strap"><stop stop-color="#b3a68b"/><stop offset=".5" stop-color="#e9dfc6"/><stop offset="1" stop-color="#c9bda4"/></linearGradient>
  <filter id="shadow" x="-.5" y="-.5" width="2" height="2"><feGaussianBlur stdDeviation="22"/></filter>
  <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".07"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter>
  <clipPath id="body"><path d="M184 333Q400 351 617 333l20 354q-2 34-31 42-206 29-410 0-27-5-31-37Z"/></clipPath>
  </defs>
  <path fill="url(#paper)" d="M0 0h800v900H0z"/>
  <path d="M670 0H800V900H680Q727 480 670 0" fill="#f7f1e7" opacity=".2"/>
  <ellipse cx="416" cy="759" rx="228" ry="29" fill="#493126" opacity=".2" filter="url(#shadow)"/>
  <g transform="rotate(-7 400 450)">
  <path d="M274 383V243q0-116 123-116t123 116v140" fill="none" stroke="#493126" stroke-width="35" opacity=".07" transform="translate(8 8)"/>
  <path d="M277 375V246q0-116 120-116t120 116v129" fill="none" stroke="url(#strap)" stroke-width="32"/>
  <path d="M271 365V246q0-122 126-122t126 122v119" fill="none" stroke="#a4977d" stroke-width="1" stroke-dasharray="3 4"/>
  <path d="M184 333Q400 351 617 333l20 354q-2 34-31 42-206 29-410 0-27-5-31-37Z" fill="url(#canvas)"/>
  <g clip-path="url(#body)" filter="url(#grain)"><path fill="url(#canvas)" d="M165 333h475v420H165z"/><path d="M186 350q217 23 432-2m-424 1-17 344q5 25 28 26 192 25 389 0 25-4 30-25L606 349" fill="none" stroke="#b5a88c" stroke-width="1.2" stroke-dasharray="4 4"/><path d="M195 360q20 180-2 324m398-323q-16 191 18 326" stroke="#b9aa8b" stroke-width="8" opacity=".1" fill="none"/></g>
  <path d="M277 337v56m240-56v56" stroke="#d4c7ab" stroke-width="32"/>
  <path d="M266 343v40h22v-40m218 0v40h22v-40" stroke="#ac9f84" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
  <g transform="translate(400 519) scale(.74)" fill="none" stroke="${ink}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${motifs[i]}</g>
  <text x="400" y="616" text-anchor="middle" font-family="Georgia,serif" font-size="31" fill="${ink}" letter-spacing="6">SÀI GÒN</text>
  <text x="400" y="649" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="24" fill="${ink}">là thương.</text>
  <text x="400" y="694" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="${ink}" letter-spacing="3">MOODBAG — SMALL BAG, BIG STORIES.</text>
  <path d="M611 376h25v55h-25" fill="${ink}"/><text transform="translate(624 383) rotate(90)" font-family="Arial" font-size="6" letter-spacing="1" fill="#f7f1e7">MOODBAG</text>
  </g>
  <text x="46" y="851" font-family="Arial,sans-serif" font-size="9" letter-spacing="2" fill="#6e5c4c">SAIGON STORIES / CONCEPT 0${i + 1}</text>
  <path d="M692 811v27m-13-13h27" fill="none" stroke="#8b4937" stroke-width="1"/>
  </svg>`;
  await writeFile(`public/images/moodbag/tote-0${i + 1}.svg`, svg);
}
console.log("Created 5 clearly marked tote concept illustrations.");
