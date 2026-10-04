# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site (React + Vite) for Dhruv Khalasi, a DevOps engineer. It is deployed to GitHub Pages at a subpath, not a custom domain.

## Commands

```
npm run dev       # start Vite dev server on 127.0.0.1:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint (not eslint)
```

There is no test suite and no typecheck script — this is a plain JS (not TS) React app despite `@types/react` being present (editor intellisense only).

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages automatically on every push to `main` (and via manual `workflow_dispatch`). There is no separate staging step — pushing to `main` ships to production.

`vite.config.js` sets `base: '/dhruv-deploys/'`. This must match the actual GitHub Pages repo/path the site is served from — if the repo is renamed or the site moves, this is the first thing to update, otherwise all assets 404 in production while still working fine in `npm run dev`.

## Architecture

**Single page, section-based composition.** `src/App.jsx` is the entire page: it renders `IntroLoader` (one-time splash), `TopBar`, then the sections `Hero` → `Experience` → `Projects` → `Skills` → `Contact` in order, plus a global `CommandPalette` overlay. There is no router — navigation is anchor-based scrolling to section ids (`#top`, `#work`, `#projects`, `#stack`).

**All copy/content lives in `src/data/content.js`.** Profile info, stats, experience bullets, project descriptions, toolchain/skills lists, and education are all exported as plain data objects from this one file and imported by the section components. To update what the site says (new job, new project, changed skills), edit `content.js` — not the JSX in `src/sections/`, which is pure presentation over that data.

**Theming is CSS-variable + attribute based.** `src/hooks/useTheme.js` toggles `document.documentElement`'s `data-theme` attribute (`"dark"` | `"light"`) and persists the choice to `localStorage` under key `portfolio-theme`. `src/index.css` defines the full variable palette on `:root` (dark, default) and overrides on `:root[data-theme="light"]`. Any new color must be added as a variable in both blocks, not hardcoded in component CSS.

**`Reveal` (`src/components/Reveal.jsx`) is the shared scroll-in-view animation primitive.** It wraps children in an `IntersectionObserver` and toggles an `is-visible` class plus a `--reveal-delay` CSS var once the element scrolls into view. Every section uses this instead of rolling its own observer.

**`Terminal` (`src/components/Terminal.jsx`) is a self-contained fake-shell animation** with a hardcoded `SESSIONS` script array that it types out and cycles through on a timer loop. It has no relation to a real shell — new "commands" are added by editing that array directly.

**`CommandPalette` is a ⌘K/Ctrl+K overlay** with its own hardcoded `actions` list (scroll-to-section, copy email, open LinkedIn, toggle theme, replay intro). New global actions get added to that list in `src/components/CommandPalette.jsx`.

**Hero character video/image assets are generated offline, not at build time.** `assets-source/` (gitignored, not part of the npm build) holds Python preprocessing scripts:
- `process_video.py` — reads `character-source-video.mp4`, resizes frames, and chroma-key removes the background using corner-sampled color + flood-fill-from-border + binary dilation (to close pinch points like gaps between limbs) before exporting PNG frames.
- `remove_bg.py` — same background-removal approach (white-background flood fill + feather) for a single static image.

These scripts' output is manually re-encoded and the results are committed directly as the binary assets `src/assets/character-anim.webm` and `src/assets/character-poster.png`, which `Hero.jsx` and `IntroLoader.jsx` import directly. If the character cutout has a visible edge/halo artifact, the fix is tuning `TOLERANCE`/dilation iterations in `process_video.py` and re-running the offline pipeline — not something fixable from the React/CSS side. Requires `opencv-python`, `numpy`, `scipy`, `Pillow` locally; these are not npm/package.json dependencies.

## Linting

Lint rules are in `.oxlintrc.json` (oxlint, not ESLint) with the `react` and `oxc` plugin sets enabled, plus explicit `react/rules-of-hooks` (error) and `react/only-export-components` (warn). Run `npm run lint` before considering a change done.
