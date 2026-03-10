# Astro Portfolio Site

Portfolio website built with Astro.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
astrosite/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ env.d.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  └─ index.astro
│  └─ styles/
│     └─ global.css
├─ .gitignore
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
├─ README.md
└─ tsconfig.json
```

## Notes On Current Homepage

- `src/pages/index.astro` is now your full portfolio homepage implementation.
- It uses Tailwind via CDN and includes inline styles/scripts directly in the page.
- Sections included: nav, hero, about/experience, projects, contact, footer.
- Mobile menu toggle and scroll-reveal behavior are implemented in inline JS.

## Changes Made In This Update

- Replaced the starter `src/pages/index.astro` with your provided `newindex.astro` content.
- Fixed the smooth-scroll script bug that could break when clicking links with `href="#"`.
- Kept the rest of your homepage structure and styling intact for further edits.
