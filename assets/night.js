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

// Rider seen from behind: helmet, jacket, tail light, tyre.
const RIDER = [
  "......kkkk......",
  ".....kyyyyk.....",
  ".....kyyyyk.....",
  "......kkkk......",
  "....kooooook....",
  "...kooooooook...",
  "..kkoooooookk...",
  ".kk.koooook.kk..",
  "....kkkkkkkk....",
  ".....kmmmmk.....",
  "......gggg......",
  "......gggg......",
  "......gggg......",
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
// Vanishing point sits under the painted sun; the road comes out of the forest floor.
function road(canvas) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, VX = 131, HY = 98, HALF = 92;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let phase = 0, frame = 0, last = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let y = HY; y < H; y++) {
      const t = (y - HY) / (H - HY); // 0 at horizon, 1 at the bottom edge
      const half = Math.round(t * HALF);
      ctx.fillStyle = NES.k;
      ctx.fillRect(VX - half, y, half * 2 + 1, 1);
      ctx.fillStyle = NES.o;
      ctx.fillRect(VX - half, y, 1, 1);
      ctx.fillRect(VX + half, y, 1, 1);
      ctx.fillStyle = NES.m;
      for (const lane of [-2 / 3, -1 / 3, 0, 1 / 3, 2 / 3]) ctx.fillRect(Math.round(VX + lane * half), y, 1, 1);
    }
    // Cross lines: evenly spaced in depth, so they bunch up near the horizon.
    ctx.fillStyle = NES.m;
    for (let n = 0; n < 7; n++) { // fewer far lines, or the horizon smears into a block
      const z = n + 1 - phase;
      const y = Math.round(HY + (H - HY) / z);
      if (y <= HY || y >= H) continue;
      const half = Math.round(((y - HY) / (H - HY)) * HALF);
      ctx.fillRect(VX - half, y, half * 2 + 1, 1);
    }
    drawMap(ctx, RIDER, VX - 8, H - 34 - (frame % 8 < 4 ? 0 : 1), NES); // clear of the dialog box
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
