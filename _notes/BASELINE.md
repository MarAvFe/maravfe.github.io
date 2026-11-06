# marcelloavila.com — baseline

Status: v1 shipped 2026-11-06. Old folders removed, except `beep/simaplaDigital/`, which stays online and unlinked.

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
- Hero line: drafted from the voice rules in section 8.

## 4. Visual concept: "Night ride"

An 8-bit rider on a dusk road through a forest. The road is the timeline: years are kilometre posts, projects are the stops along it.

Why it fits: motorcycles and road navigation are part of the identity, the timeline is a real sequence (so markers earn their place), and the three loved aesthetics meet in one scene instead of being collaged.

- **8-bit, strictly:** NES palette only, tiles on an 8 px grid, sprites limited to 3 colours + transparent, no smooth gradients.
- **Synthwave:** the sunset is drawn as dithered bands of NES colours, plus a perspective grid road.
- **Forest:** parallax layers of pine silhouettes along the road.
- **Optional, Artvee idea:** take one public-domain landscape painting (forest at sunset) and dither it down to the NES palette as the hero backdrop. Classical painting meets 8-bit. Needs one image downloaded on desktop (artvee.com is blocked here), and the rights for that specific piece checked.

### Tokens (NES palette values)

Superseded in v1: the palette now comes from the dithered Klever backdrop. Source of truth is `assets/night.css`.

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

Three featured projects sit above the road (see section 10.8). The rest are rows along a vertical road, not a grid of identical cards. Text is left aligned. Expanding a row shows the screenshot, description and links.

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
- **Not found:** a "personal-voice" skill (none in the catalog), so voice is derived from the blog instead (section 8). YouTube and artvee.com are reachable from the local machine; `yt-dlp` / agent-reach are not installed yet.

## 8. Voice

Derived from the blog repo, **from the pre-Astro originals** (commit before "Rebuild Personal Blog: Jekyll → Astro"). The rebuild shortened or rewrote several posts and they no longer read like Marcello (see the note at the end).

Rules:
- **Open with a personal admission or a concrete scene.** "Siempre me ha molestado lavar platos." / "It's a string of characters. How can you ever lose it?"
- **Rules first, reasons after.** A short numbered list ("Guía breve"), then "Los porqués".
- **Concrete, slightly absurd details as humour.** "page 47 of the yellow book on your shelf", an imagined hacker talking to himself.
- **Names his own frameworks.** "Enabler Level, a stage 2.5", "know your topic risk boundaries".
- **Honest about unfinished ideas.** "Esto es una idea en desarrollo y suena bonito en papel, espero que se me pegue."
- **Ends with a question to the reader or a commitment.** "¿Está usted organizado?"
- **Costa Rican Spanish:** *usted* in guides, colloquial when personal ("sacaron pecho", "les late"). Flags loanwords honestly: "trigger (ninguna traducción al español me convence)".
- **Avoid:** generic motivational closers ("force multiplier", "the returns are incomparable"), symmetric "La Ley / La Realidad / Mi Perspectiva" scaffolding. Those come from the rewrite, not from Marcello.

Language rule, his own words (2023): *"Normalmente escribo en inglés … pero como este tema aplica solo para Costa Rica, lo haré en español."* Applied to the home page: English shell, and each project described in the language of its audience (Costa Rican projects in Spanish). No toggle.

Note: the Astro rebuild (May 2026) cut or rewrote at least four posts. `como-ando-en-bicicleta` went from about 2,490 words to 350 and lost the whole riding guide, `the-enabler-level` now argues a different idea than the original, and `privilegio-lavar-mis-platos` and `rodar-es-facil-organizarse-tambien` lost their endings. The originals are recoverable from git.

## 9. Open decisions

1. Which projects make the road, with their status and theme (draft list below). The blog's 2026 "seguridad digital" series (accounts, protests, social engineering, hacked) fills the security theme.
2. Artvee backdrop: yes or no.
3. Confirm the language rule above.

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
| seguridad digital series (blog) | security | 2026 |

## 10. Rebrand research (YouTube, 2026-11-03)

Sources: Caleb Ralston, *How to Rebrand Yourself Online (Full Course)* (F0-yC1gVElA); Leila Hormozi, *How to Rebrand Yourself* (IcA7xvkAcpk); TED, *5 Steps to Building a Personal Brand* (ozMCb0wOnMU); Adama Lorna, *Personal brand with multiple passions* (YgBUOXwV3Qc); UnordinaryMind, *The M-Shaped Future* (knVaCNiH-8I); Vanessa Lau, *Build a personal brand, not a social media account* (71oNb0HPf5E); Kenny Gunderman, *Developer Portfolio Do's and Don'ts* (nlSgxeT2_dc).

What applies here:

1. **This is positioning, not a rebrand.** Ralston: a rebrand means replacing associations an audience already holds. "No one knows what I stand for" is a positioning problem. There is no audience holding the old "Seguridad Digital consulting" association, and no revenue depends on it, so the switch costs nothing. Just replace the page.
2. **A brand is a lagging indicator of behaviour** (Hormozi, 12–18 months), and "if it needs willpower to maintain, it's a costume." The tracker works because it shows what Marcello already does, not what he plans to be. Infovia's 9 users and then silence is normal at this stage: "real brands go unnoticed until they're undeniable."
3. **Interest stacking** (Ralston, Lau). Don't make separate content per hobby. Weave the hobbies into the core work: explain a security idea through a motorcycle analogy, and let dance and fatherhood show up on the page. Lau: shared interests are what let an audience follow you through a pivot.
4. **Model: "focused", not "exploratory"** (Lorna). Exploratory (many threads, no story) splits energy and never compounds; that was the 2022 attempt. Focused = 1–2 core themes, with the rest woven in. Her formula, filled in for Marcello:
   - Skill: software engineering, practical security.
   - Passion: family and low screen time, the road.
   - Energy: calm, direct, honest about unfinished things.
   - Values: *respeto y presencia* (his own words), practical safety over perfection, community organisation.
5. **Seasons, not a single niche** (M-shaped). Deepen one pillar for 6–18 months, then "graduate" on purpose. The README-and-close habit is already this, and the tracker is the external memory that makes it work.
6. **Common enemy = a concept, never a person** (Ralston). Candidate: *perfect security advice nobody follows*. That is the 80/20 position stated as a contrarian take.
7. **Legends and lore = failures with a takeaway.** Infovia (500-person group, 9 users, one day) is a story worth telling on the blog, not something to hide.
8. **Portfolio rule** (Gunderman): 2–3 thorough projects beat 20 small ones. Reconciling this with the tracker: **3 featured projects at the top, the full road log below.** One-day experiments stay in the log, not the feature row.
9. **Platforms:** a solo creator gets one primary platform and one secondary (Ralston; TED agrees). Here: the site and blog are the primary; WhatsApp sharing is the secondary.

Draft brand statement (to be rewritten by Marcello in his own words):
> I'm Marcello, a dad in Costa Rica who builds small, finished tools. Most of them are about staying reasonably safe without being perfect: online, on the road, and at home. The rest are about dancing.
