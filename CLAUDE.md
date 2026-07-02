# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Tribeca Dental Studio 4 Kids** (`pediatrics.tribecadentalstudio.com`), a pediatric dental practice in NYC. Next.js 16 (App Router, React 19, React Compiler enabled), Tailwind CSS v4, and Sanity v4 as the headless CMS. The `package.json` name is `pediatric-tribeca`.

## Commands

```bash
npm run dev      # dev server on port 3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config, extends next core-web-vitals + typescript)
```

There is no test suite. Type checking happens via `next build` (`tsc --noEmit` behavior through the Next plugin).

## Environment

Required at runtime (see `.env`, and `src/sanity/env.ts` which throws if missing):
- `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_PROJECT_ID` (fallbacks `production` / `im5m0k26` are hardcoded in `sanity.config.ts` and `src/sanity/lib/client.ts`).

Server-only secrets used by API routes (not in committed `.env`): `GHL_PRIVATE_TOKEN`, `GHL_LOCATION_ID` (GoHighLevel CRM), `SEEB_AI_PASSWORD` (Seeb.ai outbound). Note `src/app/api/reviews/route.ts` has a Google Places API key hardcoded in source.

Path alias: `@/*` → `src/*`.

## Architecture

### Internationalization (en / es / zh) drives all routing
Every user-facing page lives under `src/app/[lang]/`. Locale handling is deliberately manual (no i18n library):

- **`src/middleware.ts`** redirects any locale-less path to `/en/...` (307). Its matcher excludes `api`, `_next`, static files, and `sw.js` — so API routes are never locale-prefixed.
- **`src/app/[lang]/dictionaries.ts`** lazily imports one of `src/dictionaries/{en,es,zh}.json` and falls back to `en` for unknown langs. Pages call `getDictionary(lang)` and pass the resulting `dict` object down as props.
- Components receive **either** the whole `dict`, a slice of it (e.g. `dict.hero`), **or** just `lang` and re-fetch/branch internally — inspect the component before assuming which. Much page copy (especially SEO `<h1>`/`<p>` blocks) is inlined per-locale with `isEs`/`isZh` ternaries rather than living in the dictionaries.
- `params` is a `Promise` (Next 16) — always `await params` before reading `lang`.

### SEO is a first-class concern
- `generateMetadata` is duplicated per route with per-locale title/description and `alternates` (canonical + `languages` hreflang, incl. `x-default`). `src/hooks/helper.ts` `getAlternates(lang, path, page?)` centralizes the alternates shape and `baseUrl`; some routes build alternates inline instead — prefer `getAlternates` for new pages.
- `src/app/[lang]/layout.tsx` injects JSON-LD (`Dentist` schema), Google Tag Manager, and the TrueLark chat widget. `src/app/sitemap.ts` generates the sitemap.
- `next.config.ts` sets `trailingSlash: true` and whitelists `cdn.sanity.io` for `next/image`.

### Sanity CMS
- **Studio is embedded** at `/[lang]/studio` (`src/app/[lang]/studio/[[...tool]]/page.tsx`, `force-static`). `sanity.config.ts` pins `basePath: '/en/studio'`.
- Schema types in `src/sanity/schemaTypes/` (registered in `index.ts`): `post`, `category`, `author`, `testimonial`, `doctor`, `contentType`, plus the `blockContent` portable-text type. Studio desk structure in `src/sanity/structure.ts`.
- Client: `src/sanity/lib/client.ts` (`useCdn: false`). Live/preview via `src/sanity/lib/live.ts` (`sanityFetch` / `SanityLive`). GROQ queries in `src/sanity/lib/queries.ts`; image URLs via `src/sanity/lib/image.ts` (`urlFor`). Posts are filtered by `language == $lang`.

### API routes (`src/app/api/`, un-prefixed by locale)
- `leads/route.ts` — POST from `ContactForm`. Normalizes the phone to `+1##########` and fans out **in parallel** to GoHighLevel (`/contacts/upsert`) and Seeb.ai (webhook); returns per-service success flags. Failures are logged, not thrown.
- `blog-posts/route.ts` — GET, paginated (9/page) posts by `lang`; powers `InfiniteBlogGrid` client-side infinite scroll.
- `reviews/route.ts` — GET Google Places reviews for the practice's `PLACE_ID`.

### Fonts & styling
- Local fonts (`src/app/fonts.ts`): Brandon Grotesque (`--font-brandon`, the body default) and D-DIN (`--font-D-DIN`), loaded via `next/font/local` from `src/app/fonts/`.
- Tailwind v4 via `@tailwindcss/postcss`; global styles in `src/app/globals.css`. Brand accent color is `#C5A059`. `framer-motion`, `swiper`, and `lucide-react` are used for animation/carousels/icons.

## Conventions worth matching
- Presentational components live in `src/components/` (PascalCase files). Route-specific components sit alongside their `page.tsx` (e.g. `mission/StoryCard.tsx`, `innovation/innovation.tsx`).
- When adding a locale-aware page: create it under `src/app/[lang]/`, `await params`, fetch the dictionary, and add matching `generateMetadata` alternates for all three locales — the middleware/hreflang setup assumes en/es/zh parity everywhere.
