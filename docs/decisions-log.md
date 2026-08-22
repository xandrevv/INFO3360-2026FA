# Decisions Log — Sprint 1 (Engineering)

## D1 — Route tree matches ops jobs
- **Decision:** Which pages to build and what URL shapes to use.
- **Choice:** Static routes for home, players list, and games list; dynamic `/players/$playerId` for individual player pages.
- **Why:** Ops need shareable per-player links; list pages match the "browse directory" workflow. See `docs/route-map.md`.

## D2 — Type-safe path params
- **Decision:** How player ids enter the app from the URL.
- **Choice:** Validated path params via shared helper in `src/lib/playerParams.ts`.
- **Why:** Bad ids should fail clearly with a not-found message; bookmarks must not silently show wrong data.

## D3 — Search params for filters
- **Decision:** Where directory filters live.
- **Choice:** Schema-validated search params in `src/lib/searchSchemas.ts` on players and games pages.
- **Why:** Filters in the URL mean staff can refresh or share a filtered view and land in the same state.

## D4 — Server-rendered first paint with seed data
- **Decision:** What staff see before client JavaScript finishes loading.
- **Choice:** Server loaders reading `src/data/hockeySeed.ts` via `src/server/directoryLoader.ts` so HTML already contains directory content.
- **Why:** Arena wifi makes spinner-only first loads painful; seed data lets us prove server rendering before Supabase is connected. See `docs/ssr-verification-notes.md`.

## D5 — Navigation and empty states
- **Decision:** How staff move between pages and handle missing players.
- **Choice:** Shared `AppNav` with active highlighting, plus a dedicated `NotFoundPlayer` component for unknown ids.
- **Why:** A directory that shows a blank page on a bad bookmark is not usable on the bench.

## D6 — Stack baseline
- **Decision:** App foundation for this sprint.
- **Choice:** TanStack Start with Vite, React, TypeScript, and Tailwind per `docs/scaffold-notes.md`.
- **Why:** Fits type-safe routing and SSR goals; leaves a clear path to TanStack Query, Supabase, and Vercel next sprint.

## Explicit non-goals this sprint
- Live Supabase reads/writes, Supabase Auth, Vitest/Playwright CI, production deploy.