# SJP Plumbing & Property Services

Static site for SJP Plumbing & Property Services Ltd, Elstow, Bedford. Built with Astro.

Facts on the pages come from the public Google listing (checked 8 October 2026) and the Companies House record for company 13779769. The site does not invent a Gas Safe number, an email address, weekend hours, or reviews that did not load.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Before you publish

Set the live domain in `astro.config.mjs` (`site`). Canonical links, Open Graph URLs, and the sitemap all use that value.

Google’s listing shows 35 photos. The public page, without a Google sign-in, returned 18 unique photos. Those are in `public/images/work`. The projects page links back to the listing for the rest.
