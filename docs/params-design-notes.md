# Path Params Design Notes — Player Detail

## Decision
- Route file: src/routes/players/$playerId.tsx
- URL pattern: /players/$playerId
- Param name: playerId (matches route map and helper)

## Validation (sprint 1)
- parsePlayerIdParam: non-empty trimmed string
- Invalid or empty ids must not render a fake success state

## Linking
- Players index uses <Link to="/players/$playerId" params={{ playerId }}>
- Do not rely on ?playerId= query strings for the detail page

## Why
Hockey ops needs shareable, bookmarkable per-player URLs on arena wifi.
A shared helper keeps the list, detail, and future loaders consistent.