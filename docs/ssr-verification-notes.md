# SSR Verification Notes (Sprint 1)

## First-paint checks
| Route | URL tested | Content visible on hard refresh? | Notes |
|-------|------------|----------------------------------|-------|
| Home | / | Yes | Player and game counts visible immediately |
| Players list | /players | Yes | All seed players visible on first load |
| Player detail | /players/p-17 | Yes | Player name, number, position visible |
| Games | /games | Yes | All seed games visible on first load |

## Requirements-brief criteria
- [x] No spinner-only empty shell on directory pages
- [x] Player detail bookmark shows identity content without waiting on client-only fetch
- [x] Seed/mock data used; Supabase still stubbed for a later sprint

## Agent follow-ups I needed
- Moved filtering from server loader into component so search params update the list correctly

## Risks / next sprint
- Replace seed data with Supabase when auth and live data are ready
- Tighten search param filtering on the server side when real database queries are available