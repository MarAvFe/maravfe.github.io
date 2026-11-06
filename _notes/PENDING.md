# Pending

Last updated 2026-11-06. v1 is merged into `master` and pushed.

## Review tonight

- [ ] **Look at v1.** From the repo root, run `python3 -m http.server 8000`, then open http://localhost:8000. (Opening `index.html` directly won't work: the project list is fetched from `projects.json`.)
- [ ] **Rerun the check** at http://localhost:8000/_tools/check.html. Every line should say PASS.
- [ ] **Blog restore:** read `_notes/blog-restore-comparison.md` and decide which posts to restore. Nothing has been changed in `~/blog`.

## Decisions waiting on you

- [ ] **Featured three.** Currently provisional: Seguridad digital, rail-shooter, Hay Baldazo (infovia). Change them with the `"featured": true` flags in `projects.json`.
- [ ] **Statuses are my guesses** (idea / building / shipped / paused). Correct them in `projects.json`. The ones I'm least sure about: rail-shooter, curious-for-speed, garmin-*, tap-n-watch.
- [ ] **Left out on purpose: `busca-maes-bot`.** It looks people up by name and plate. That's public data in CR, but listing it on a privacy-minded homepage sends a mixed signal. Add it back if you disagree.
- [ ] **Palestina x Costa Rica** is listed under Costa Rica. Keep it or drop it, your call.
- [x] **Brand statement.** Replaced in `index.html` with Marcello's own words on 2026-11-06.

## Broken or missing

- [ ] **infovia demo is down:** https://infovia.vercel.app returns 404, so the card links only to the code. Redeploy it, or mark it paused (it currently is).
- [ ] **No screenshots yet.** Featured projects show 8×8 theme sprites instead. When a project has a screenshot, add a `"shot"` field (it isn't rendered yet, so ask me to wire it up).
- [ ] **Short or missing READMEs:** processing-sketches and curious-for-speed (no README found locally), tap-n-watch (no code).

## Cleanup (do on desktop, after merge)

- [x] Delete `beep/` (except `beep/simaplaDigital/`), `tango/`, `red/`, `imagenes-matilde/` and `Readme.txt`.
- [ ] `beep/simaplaDigital/` stays online with no link from the site, until Marcello is ready to wipe it.
- [x] Close the 11 Dependabot PRs that target `beep/` and `tango/`.
- [ ] Remove unused files from the old link page: `assets/css/style.css`, and `assets/img/{bg.jpg,ig.png,ln.png,medium.png,website.png}`. Keep `pfp.jpg` if you want a photo later.
- [ ] Old link-page extras are gone from the new page: Calendly, the "PRONTO" course, Instagram and Google Analytics. Add back anything you still want.

## To ship

- [x] Merge the branch into `master` and push. GitHub Pages then serves it on marcelloavila.com.
- [ ] After the merge, check that `_notes/` and `_tools/` are not served (Jekyll skips folders starting with `_`).

## Done

- [x] Baseline, voice rules and rebrand research: `_notes/BASELINE.md`
- [x] yt-dlp installed with pipx (`~/.local/bin/yt-dlp`)
- [x] Artvee backdrop: Klever, *Forest Sunset* (1912), dithered to 14 NES colours with `_tools/dither.py`
- [x] v1 home page: `index.html`, `assets/night.css`, `assets/night.js`, `projects.json`, self-hosted fonts
- [x] Comparison of the posts the blog rebuild cut: `_notes/blog-restore-comparison.md`
