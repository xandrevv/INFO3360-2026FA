# Acceptance Checklist — Hockey Ops Player Directory (Sprint 1)

**App under test:** TanStack Start player directory (local dev)
**Date:** 2026-08-20
**Tester:** Andrew
**Overall status:** ready

## Summary for hockey ops
- Passes: 10
- Fails: 0
- Blockers for demo: none

## How to re-run
1. From the project folder, start the dev server (`npm run dev`).
2. Open the local URL shown in the terminal.
3. Walk each row below; update Result and Evidence.

## Criteria (from docs/requirements-brief.md)

| ID | Criterion | How tested | Result | Evidence | Notes / next action |
|----|-----------|------------|--------|----------|---------------------|
| A1 | Home route loads and shows directory-oriented content | Opened `/` after fresh load | pass | Home page visible with player count, game count, and nav links | |
| A2 | Players index is reachable from nav and lists seed players | Clicked Players in nav | pass | Player list visible with all seed players including Alex Mercer | |
| A3 | Player detail is bookmarkable: direct load works in a fresh session | Copied `/players/p-17`, pasted in private window | pass | Player detail loaded with position, team, and status visible | |
| A4 | Invalid player id shows not-found or empty state | Opened `/players/does-not-exist-999` | pass | NotFoundPlayer message shown with link back to players | |
| A5 | Games index loads and is linkable | Opened `/games` | pass | Games list visible with seed game rows | |
| A6 | Search/filter params restore on reload | Set North Bay filter, reloaded in new tab | pass | Filter stuck after reload; URL showed team param | |
| A7 | Invalid search params do not crash the page | Set `/players?position=FAKE` | pass | App recovered to default (all positions) without crashing | |
| A8 | Server-rendered first content appears in initial HTML | View Source on `/players`, searched for "Alex Mercer" | pass | Name found in raw HTML source | |
| A9 | Cross-links between players and games do not 404 | Followed links from player detail to games and back | pass | All links navigated correctly | |
| A10 | Main nav reaches Home, Players, Games from each major page | Clicked each nav item from every page | pass | No broken links found; active section highlighted | |

## Gaps log

None — all criteria passed.

## Sign-off
- [x] Checklist matches criteria in docs/requirements-brief.md
- [x] Bookmark test done in a fresh browser session
- [x] At least one SSR/first-document check recorded
- [x] No fails to report

**Ready for stakeholder handoff step?** yes