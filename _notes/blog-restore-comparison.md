# Blog: what the Astro rebuild changed

The rebuild commit is `caf9f01` in `~/blog` ("Rebuild Personal Blog: Jekyll → Astro", 2026-05-06). The originals are in its parent, `caf9f01^`, under `_posts/`. No post was edited after the rebuild.

**Restoring is cheap.** None of the originals use Liquid tags or images. Keep the current Astro front matter (title, pubDate, tags, description) and paste the original body under it, which is about 5 minutes per post. The originals still contain your typos ("comoparte", "whey", "it's" where "its" is meant). Restore them as they are, or fix only the typos. Don't rewrite anything else.

## The four you asked about

### 1. Cómo ando en bicicleta en mi país (2023-12-14): 2,488 → 349 words

- **Original:** La Ley, La Realidad, then **Guía Breve** with 8 rules, and **Los Porqués** explaining each one (no headphones, ride 30–50 cm from the edge, hand signals, don't jump the queue at lights with a first/second/third-position risk breakdown, avoid fights, predict other drivers, master your bike). After that come Equipo, Compañía, Tips (accelerate like a skateboard, pick the right gear ahead of time, passing on the right), Conclusión and Disclaimer.
- **Live:** La Ley, a generic "La Realidad", and a new **Mi Perspectiva** with lines you never wrote ("andar en bicicleta es un acto político… de resistencia contra la cultura del automóvil").
- **What was lost:** the whole practical guide, which was the 80/20 road-safety content your brand is about. This is also the post that best fits the road theme on the home page.
- **Recommendation:** restore. This one matters most.

### 2. The Enabler Level (2023-12-22): 999 → 508 words

- **Original:** the Enabler Level is a **stage 2.5**: knowing a topic's *risk boundaries* lets you experiment without fear. It includes your 11-step problem-solving method, a Risk Management section, two worked examples (*Your Toddler's Car Broke* and *I Am a People Pleaser*), and Related Techniques.
- **Live:** redefines it as a **fifth level, teaching others**, and ends in corporate filler ("force multiplier", "the returns are incomparable").
- **What was lost:** your idea itself. The live post argues something different under your name. The toddler-car example is very much you.
- **Recommendation:** restore.

### 3. Qué privilegio lavar platos que yo ensucié (2025-08-29): 418 → 257 words

- **Original:** after "Presencia", it continues with Mandino ("soy esclavo de mis hábitos; pero yo puedo escoger cuáles"), choosing chores as your *trigger* ("ninguna traducción al español me convence"), why films and music didn't work, turning chores into reflection, and the ending: *"esto es una idea en desarrollo y suena bonito en papel, espero que se me pegue."*
- **Live:** stops after the definition of presence.
- **What was lost:** the second half and the most honest line on the blog.
- **Recommendation:** restore.

### 4. Rodar es fácil, organizarse también (2025-04-02): 456 → 353 words

- **Original:** "Caos organizado" (wheelies, passing on the right, zozobra, and your own estimate: 2,000 bikes with 25% riding informally against 45 seized bikes and 254 tickets), then "El poder de estar organizados": if people can organise to break rules for fun, they can organise for drinking water, housing and safety. It ends: **"¿Está usted organizado? ¿Participa en algún proyecto común? ¿Conversa con su comunidad?"**
- **Live:** replaces both sections with "La Lección" and "Reflexión", a leaderless, anti-institution message ("La organización no requiere… líderes", "El gobierno no va a arreglar la inseguridad vial").
- **What was lost:** your numbers, the honest description of the chaos, and your actual argument. The new version also leans more political than you wrote it.
- **Recommendation:** restore.

## Three more the rebuild cut (not asked about, found by word count)

| Post | Words | What changed |
|---|---|---|
| `2022-09-23-blog-log` | 737 → 304 | Only the first day is left. Lost: the Gitflow notes, word count, cheat-sheet, reference blogs, password protection for drafts, and Vercel steps. Low value for readers; restoring it is optional. |
| `2026-04-21-el-boicot-es-consciencia` | 662 → 407 | Lost "No todos los negocios colaboran igual", "El privilegio de elegir", "No es nacionalismo. Es consciencia." and the BDS link. Same pattern: your sections were replaced by a softer generic one. |
| `2022-12-08-how-companies-track-you-by-email` | 1,048 → 615 | Lost "Why do I care? / Profiling" and your three concrete steps (be mindful, copy the link address, use incognito), plus the closing experiment. Replaced by a generic 5-tip list and a "Conclusion". It's a security post, so it matters for the brand. |

Every other post is within ±15 words of its original, which is just formatting.

The 2026-08 "seguridad digital" series was written after the rebuild, so there's no original to compare it against.
