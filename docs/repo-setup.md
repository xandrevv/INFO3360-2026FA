# Repository Setup — Hockey Ops Player Directory

**Author:** Andrew
**Date:** 2026-08-20
**Repository URL:** https://github.com/xandrevv/INFO3360-2026FA
**Visibility:** public
**Default branch:** main

## 1. Ignore rules in place before first commit

```text
node_modules/
dist/
.output/
.vinxi/
.vercel/
.env
.env.local
.env.*.local
.DS_Store
*.log
```

`.gitignore` existed before my first commit: YES

## 2. Repository initialized

```text
git init — repository initialized in project folder
git branch --show-current — main
```

## 3. Pre-stage status review

- `node_modules/` absent from tracked files: PASS
- `.env` / `.env.local` absent from tracked files: PASS
- Build output (`dist/`, `.output/`) absent: PASS

## 4. First commit

- Commit command used: `git commit -m "initial commit"`
- Working tree clean afterward: PASS

## 5. Remote and push

```text
origin  https://github.com/xandrevv/INFO3360-2026FA.git (fetch)
origin  https://github.com/xandrevv/INFO3360-2026FA.git (push)
```

- `git push -u origin main` completed without error: PASS

## 6. Browser verification

| Check | Result |
| --- | --- |
| Source files visible on the GitHub repo page | PASS |
| No `.env` file in the repository | PASS |
| No `node_modules` folder in the repository | PASS |
| Commit message readable in the commit list | PASS |

## 7. Issues and fixes

| Issue | What I tried | Outcome |
| --- | --- | --- |
| PAUL auto-grader failed steps 3-5 despite correct files being committed | Emailed professor; continued with correct work in repo | Files confirmed present via git ls-files and git show --stat |

## 8. Ready for Sprint 2

Sprint 2 will add env-variable separation and commit `.env.example`. My repository
is ready for that because ignore rules are already in place and no secret has ever
been committed: YES