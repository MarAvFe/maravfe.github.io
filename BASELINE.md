# marcelloavila.com — baseline

Status: draft, nothing built yet. Old folders (`beep/`, `tango/`, `red/`, `imagenes-matilde/`) stay untouched until decided on desktop.

## 1. Purpose

A public index of everything Marcello builds. Not a funnel, not a consulting pitch.

- A visitor knows who this is in 10 seconds.
- Any project is 2 clicks from the home page, with screenshot, README and one-line description.
- Marcello can drop the link into any future conversation ("I built something like that, here").

Done for a project = screenshot + README + description. No traction metrics on the page.

## 2. Home vs blog

| | marcelloavila.com | blog.marcelloavila.com |
|---|---|---|
| Job | What I made | What I think and teach |
| Changes | When a project ships | When a post is written |
| Content | Identity line, project log, links | Practical security rules of thumb (80/20), project write-ups, low-screen parenting, road safety |
| Tone | Terse, visual | Plain, conversational |

## 3. Identity

- Dad who limits screens. Builder of small, finished things. Practical safety for normal people.
- Themes (filters on the page): security, family and low screen, road and speed, dance and sport, community (Costa Rica), play.
- Common thread: 80/20 safety and wellbeing, delivered rather than perfect.
- Hero line: drafted after voice samples (see section 8).

## 4. Visual concept: "Night ride"

An 8-bit rider on a dusk road through a forest. The road is the timeline: years are kilometre posts, projects are the stops along it.

Why it fits: motorcycles and road navigation are part of the identity, the timeline is a real sequence (so markers earn their place), and the three loved aesthetics meet in one scene instead of being collaged.

- **8-bit, strictly:** NES palette only, tiles on an 8 px grid, sprites limited to 3 colours + transparent, no smooth gradients.
- **Synthwave:** the sunset is drawn as dithered bands of NES colours, plus a perspective grid road.
- **Forest:** parallax layers of pine silhouettes along the road.
- **Optional, Artvee idea:** take one public-domain landscape painting (forest at sunset) and dither it down to the NES palette as the hero backdrop. Classical painting meets 8-bit. Needs one image downloaded on desktop (artvee.com is blocked here), and the rights for that specific piece checked.

### Tokens (NES palette values)

| Name | Hex | Use |
|---|---|---|
| Midnight | `#0000BC` | sky top, page background in dark bands |
| Magenta | `#E40058` | sunset band, links |
| Ember | `#F87858` | sunset band, hover |
| Sun | `#F8B800` | sun, the single highlight |
| Pine | `#005800` | forest, page background lower half |
| Leaf | `#00A800` | status "shipped" |
| Paper | `#FCFCFC` | text on dark |

### Type

- **Display:** the name drawn as custom pixel lettering on the canvas, not a webfont. Fallback webfont: *Silkscreen* (deliberately not *Press Start 2P*, the default every retro page reaches for).
- **Body:** *Atkinson Hyperlegible*, a typeface designed for legibility. That fits "safety for normal people", and pixel fonts are unreadable in paragraphs.

### Layout

```
+----------------------------------------------+
|  [canvas] dusk sky, sun, pines, grid road     |
|           rider idles at the bottom          |
|  MARCELLO ÁVILA (pixel lettering)            |
|  identity line                               |
+----------------------------------------------+
|  routes: all | security | family | road | …  |
+----------------------------------------------+
|  KM 2026 ─┬─ infovia        road    shipped  |
|           ├─ ensenalsa      dance   building |
|           └─ …                               |
|  KM 2025 ─┬─ tap-n-watch    family  shipped  |
|  …                                           |
|  KM 2014  archive: university work (1 link)  |
+----------------------------------------------+
|  blog · github · linkedin                    |
+----------------------------------------------+
```

Projects are rows along a vertical road, not a grid of identical cards. Text is left aligned. Expanding a row shows the screenshot, description and links.

### Principles (anti-slop review)

Checked against frontend-design's list of defaults that make a page look generated:
- One bold element: the hero scene. Everything below it is quiet.
- Not the "near-black background + one acid accent" look: the palette is a real sunset in NES colours.
- Not the SaaS card kit: rows on a road, no soft shadows, no uniform rounded cards.
- No ALL-CAPS eyebrow labels, no `→` appended to links, no `A · B · C` meta strings in the UI. (The footer sketch above is a wireframe, not copy.)
- Motion: one moment only. The road scrolls and the rider idles in the hero. Everything is static when the visitor prefers reduced motion.
- Quality floor: works on mobile, visible keyboard focus, AA contrast on all text.

## 5. Data

- `projects.json` is the only file edited to add a project: `name, repo, demo, theme, status (idea|building|shipped|paused), year, line, screenshot`.
- No screenshot yet: show a pixel placeholder sprite for that project's theme.
- Static HTML, CSS and JS with a `<canvas>`, no build step. Served by GitHub Pages.

## 6. Out of scope (v1)

Analytics, contact form, consulting and course offers, a CMS, Instagram embeds, and university coursework on the main road.

## 7. Skills and tools used

- **Used:** Anthropic `frontend-design` (anti-slop process, tokens, self-critique) and `canvas-design` (a single design philosophy behind the scene).
- **Suggested, enable if wanted:** `frontend-design` plugin, `audit-suite`, a blog content-strategy plugin, a YouTube transcriber.
- **Not found / blocked:** a "personal-voice" skill (none exists in the catalog). `agent-reach` exists (Panniantong/Agent-Reach), but YouTube is blocked by this environment's network policy, as is artvee.com.

## 8. Open decisions

1. Language: English, Spanish, or a toggle.
2. Voice: 3–5 real samples of Marcello's writing (WhatsApp messages, old posts, READMEs) to derive voice rules from.
3. Which projects make the road, with their status and theme (draft list from the repos follows).
4. Artvee backdrop: yes or no.

### Draft project list

| Project | Theme | Year |
|---|---|---|
| infovia | road | 2026 |
| garmin-car-drive | road | 2026 |
| garmin-bedtime-face | family | 2026 |
| ensenalsa | dance | 2026 |
| curious-for-speed | play / road | 2026 |
| rail-shooter | play | 2026 |
| processing-sketches | play | 2026 |
| slimstream | tools | 2026 |
| busca-maes-bot | community | 2026 |
| tejido-social-cr | community | 2026 |
| palestina-costa-rica | community | 2025 |
| tap-n-watch | family | 2025 |
| como-reciclo | community | 2024 |
| dotfiles | tools | 2023 |
| gitlab-to-gitea | tools | 2018 |
| security: none yet | security | — |
