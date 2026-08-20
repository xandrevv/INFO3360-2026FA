# Hockey Ops Player Directory — Requirements Brief (Sprint 1)

## Overview
Hockey operations needs a player directory staff can open on arena wifi and use immediately. Real directory content should appear on first paint, not only after a loading spinner. Every player must have a linkable, bookmarkable page URL.

This sprint delivers a TanStack Start skeleton: routes, validated params, and server-rendered page shells with seed data. Auth and live feeds are later sprints.

## Actors and Goals
| Actor | Goal | Success looks like |
| --- | --- | --- |
| Hockey ops staff | Open directory on weak wifi and see players/games right away | First HTML already lists directory content |
| Hockey ops staff | Share or bookmark one player | URL like `/players/42` opens that player's page |
| Future developer | Implement without re-guessing scope | This brief stays the checklist |

## Route Map
| Route | URL | Kind | Purpose |
| --- | --- | --- | --- |
| Home | `/` | Static | Landing page and directory summary |
| Players list | `/players` | Static | List all players |
| Player detail | `/players/$playerId` | Dynamic | One player's page; bookmarkable |
| Games list | `/games` | Static | List all games |

## Data Shown on First Paint
| Page | Must appear in first HTML |
| --- | --- |
| Home | App title, intro, links to Players and Games |
| Players list | At least a few player names (seed data OK) |
| Player detail | Player name and id; not-found state if missing |
| Games list | At least a few games (seed data OK) |

## Out of Scope (This Sprint)
- Auth / login
- Live NHL feeds or external APIs
- Editing or creating players
- Full visual design

## Acceptance Criteria
1. Visiting `/` shows a home page with content and navigation — not a blank page.
2. Visiting `/players` shows a list of players in the first HTML.
3. Visiting `/players/<id>` shows that player's page and the URL is bookmarkable.
4. Visiting `/games` shows a list of games.
5. Nav links to Home, Players, and Games work from every page.
6. An invalid player id shows a safe not-found state instead of a crash.