# Search Params Notes

## Players `/players`
- Keys: position (F|D|G|all, default: all), status (active|ir|all, default: active)
- Bad values fall back to defaults — no crash
- Example bookmark: /players?position=F&status=active

## Games `/games`
- Keys: team (string club code, default: ''), date (YYYY-MM-DD, default: '')
- Bad date format is ignored and falls back to default
- Example bookmark: /games?team=TOR&date=2026-10-01

## Behavior
- Refreshing a filtered URL keeps the same filters
- Unknown query keys are ignored
- Types flow from validateSearch into the page component