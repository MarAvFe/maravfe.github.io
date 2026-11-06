// Night ride: canvas road over the painting, plus the project log from projects.json.
"use strict";

const NES = { k: "#000000", y: "#F8B800", o: "#E45C10", m: "#E40058", g: "#787878", p: "#F0D0B0", l: "#00A800" };

// 8x8 theme sprites, "X" = theme colour.
const SPRITES = {
  security: ["..XXXX..", ".X....X.", ".X....X.", "XXXXXXXX", "XXX..XXX", "XXX..XXX", "XXXXXXXX", "XXXXXXXX"],
  family: [".XX..XX.", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX", ".XXXXXX.", "..XXXX..", "...XX...", "........"],
  road: ["..XXXX..", ".X....X.", "X..XX..X", "X.XXXX.X", "X.XXXX.X", "X..XX..X", ".X....X.", "..XXXX.."],
  dance: ["..XXXXXX", "..X....X", "..X....X", "..X....X", "XXX..XXX", "XXX.XXXX", ".X...XX.", "........"],
  community: ["...XX...", "..XXXX..", ".XXXXXX.", "XXXXXXXX", ".X....X.", ".X.XX.X.", ".X.XX.X.", ".XXXXXX."],
  play: ["...XX...", "...XX...", "XXXXXXXX", ".XXXXXX.", "..XXXX..", ".XXXXXX.", ".XX..XX.", "X......X"],
  tools: [".X.X....", ".XXX....", "..XXX...", "...XXX..", "....XXX.", ".....XXX", "......XX", "........"],
};
const THEME_COLOUR = { security: NES.y, family: NES.m, road: NES.o, dance: NES.m, community: NES.l, play: NES.y, tools: NES.p };

// Rider on a naked bike, side view, facing right: blue tank, bare engine, stub tail,
// gold forks, short low exhaust. Magenta helmet with a cyan visor, white jacket with a
// dark arm stripe.
// A and B are the two spoke positions.
const BIKE_COLOURS = { k: NES.k, y: NES.y, m: NES.m, p: NES.p, g: NES.g, s: "#BCBCBC", w: "#FCFCFC", r: "#F83800", d: "#404040", b: "#0058F8", c: "#3CBCFC" };
const BIKE = [
  "................mmmmm...............",
  "...............mmmmmmm..............",
  "...............mmmcccc..............",
  "...............mmmmmmm..............",
  "................mmmmm...............",
  "................wwwwww..............",
  "...............swwwwwwwwwww.........",
  "..rr...........swwwwwwdddddw........",
  "..rbbb.........swwwww.bbbb.wppss....",
  "....bbbb.......swwww.bbbbbb.yy......",
  "......bbbbbddddswwdddbccbbbbyywww...",
  "....gggggdddddddddddddbbbbbbbgyywww.",
  "...ggcckgcgg...gggdddbbbbbbgckyygw..",
  "..ggckkAkkcgg.ggsdsddsdsdsggkAkyygg.",
  "..gckBkAkBkcggg.dsdddsdsdsdBkAkyycg.",
  ".ggckkBsBkkggg..sdsddsdsdsdkBsBkyygg",
  ".ggkAAsssggkgg..dsddgdsdsdAAsssAAkgg",
  ".ggckkBsBkkcgg..ksggggsdkckkBsBkkcgg",
  "..gckBkAkBkcssssssskkkk.gckBkAkBkcg.",
  "..ggckkAkkcgwsssss......ggckkAkkcgg.",
  "...ggcckccgg.............ggcckccgg..",
  "....ggggggg...............ggggggg...",
  "......ggg...................ggg.....",
];

function drawMap(ctx, map, x, y, colours) {
  map.forEach((row, j) => [...row].forEach((c, i) => {
    if (colours[c]) { ctx.fillStyle = colours[c]; ctx.fillRect(x + i, y + j, 1, 1); }
  }));
}

function spriteURL(theme) {
  const c = document.createElement("canvas");
  c.width = c.height = 8;
  drawMap(c.getContext("2d"), SPRITES[theme] || SPRITES.play, 0, 0, { X: THEME_COLOUR[theme] || NES.p });
  return c.toDataURL();
}

// --- Road -------------------------------------------------------------------
// A street running left to right. The ground slides left under the bike, and the
// cross lines fan out from a vanishing point under the painted sun.
function road(canvas) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, VX = 131, HY = 106, GRID_TOP = 115, NEAR_LINE = 132, LANE_Y = 119, SPACING = 70;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const depth = y => (y - HY) / (H - HY); // 0 at the far kerb, 1 at the bottom edge
  let phase = 0, frame = 0, last = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = NES.k;
    ctx.fillRect(0, HY, W, H - HY);
    ctx.fillStyle = NES.o;
    ctx.fillRect(0, HY, W, 1);
    ctx.fillStyle = NES.m;
    ctx.fillRect(0, GRID_TOP, W, 1);
    ctx.fillRect(0, NEAR_LINE, W, 1);
    // Cross lines stop at GRID_TOP: any closer to the horizon they smear into a block.
    for (let n = -12; n <= 12; n++) {
      for (let y = GRID_TOP; y < H; y++) {
        const a = Math.round(VX + (n - phase) * SPACING * depth(y));
        const b = Math.round(VX + (n - phase) * SPACING * depth(y + 1));
        ctx.fillRect(Math.min(a, b), y, Math.abs(b - a) + 1, 1); // joined, so shallow lines don't break into dots
      }
    }
    // Dashed lane line, moving at the speed of the ground at its depth.
    const dash = SPACING * depth(LANE_Y);
    ctx.fillStyle = NES.y;
    for (let n = -6; n <= 6; n++) ctx.fillRect(Math.round(VX + (n - phase) * dash), LANE_Y, Math.round(dash / 2), 1);
    const spin = frame % 4 < 2;
    drawMap(ctx, BIKE, VX - 18, H - 40 - (frame % 8 < 4 ? 0 : 1), // clear of the dialog box
      { ...BIKE_COLOURS, A: spin ? "#404040" : NES.k, B: spin ? NES.k : "#404040" });
  }

  function tick(t) {
    if (t - last > 83) { // ~12 fps, like the hardware it imitates
      last = t; frame++;
      phase = (phase + 0.12) % 1;
      draw();
    }
    requestAnimationFrame(tick);
  }
  draw();
  if (!still) requestAnimationFrame(tick);
}

// --- Projects ---------------------------------------------------------------
function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, v);
  e.append(...kids.filter(k => k != null));
  return e;
}

function links(p) {
  const out = el("p", { class: "links" });
  if (p.link) out.append(el("a", { href: p.link }, p.repo ? "Open it" : "Read it"));
  if (p.repo) out.append(el("a", { href: p.repo }, "Code"));
  return out;
}

function stop(p, themes) {
  return el("li", { class: "stop", "data-theme": p.theme, lang: p.lang },
    el("h3", {}, p.name),
    el("span", { class: `status ${p.status}`, lang: "en" }, p.status),
    el("p", {}, p.line),
    el("p", { class: "theme", lang: "en" }, themes[p.theme]),
    links(p));
}

function render({ themes, projects }) {
  const featured = document.getElementById("featured");
  for (const p of projects.filter(p => p.featured)) {
    featured.append(el("li", { lang: p.lang },
      el("img", { class: "sprite", src: spriteURL(p.theme), alt: "", width: 8, height: 8 }),
      el("h3", {}, p.name),
      el("p", {}, p.line),
      links(p)));
  }

  const log = document.getElementById("log");
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  let year;
  for (const p of sorted) {
    if (p.year !== year) { year = p.year; log.append(el("li", { class: "post" }, `km ${year}`)); }
    log.append(stop(p, themes));
  }

  const filters = document.getElementById("filters");
  const used = ["all", ...Object.keys(themes).filter(t => projects.some(p => p.theme === t))];
  for (const t of used) {
    const b = el("button", { type: "button", "aria-pressed": String(t === "all"), "data-theme": t }, t === "all" ? "All" : themes[t]);
    b.addEventListener("click", () => {
      filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      log.querySelectorAll(".stop").forEach(s => { s.hidden = t !== "all" && s.dataset.theme !== t; });
      // Hide a kilometre post when every stop after it (until the next post) is hidden.
      log.querySelectorAll(".post").forEach(post => {
        let n = post.nextElementSibling, any = false;
        while (n && !n.classList.contains("post")) { any ||= !n.hidden; n = n.nextElementSibling; }
        post.hidden = !any;
      });
    });
    filters.append(b);
  }
}

road(document.getElementById("road"));
fetch("projects.json")
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(render)
  .catch(() => {
    document.getElementById("log").append(el("li", {}, "The project list didn't load. ",
      el("a", { href: "https://github.com/MarAvFe" }, "Everything is on GitHub.")));
  });
