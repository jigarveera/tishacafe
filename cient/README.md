# Tisha Cafe site workspace

React, Vite, Tailwind CSS 4 and Framer Motion power the mobile-first Tisha Cafe storefront preview.

## Run

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

## Project references

- [Research and unresolved business facts](RESEARCH.md)
- [Page and component build sequence](PROJECT_PLAN.md)
- `src/data/business.js`: source-aware business constants
- `src/data/tisha_cafe_menu.research.json`: unmodified supplied menu research, with Zomato and District kept separate
- `src/data/menuCatalog.json`: small District menu projection used by the preview UI
- `src/data/assetManifest.js`: candidate media URLs and target folders
- `tailwind.config.js`: logo-derived light and dark palette, 50–950 shades

The local WebP photos and transparent store cutouts are generated concept imagery. They are not photographs of Tisha Cafe or its exact dishes and should be replaced with approved originals. Cart and liked items use Redux Toolkit and persist in this browser. Checkout and account backends are not connected yet. Only Tailwind directives belong in `src/index.css`; style components with Tailwind utilities. Confirm hours, menu, media permissions and the exact logo file before publishing the site.
