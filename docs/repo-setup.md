# Repository Setup — Hockey Ops Player Directory

**Author:** Andrew
**Date:** 2026-08-20
**Repository URL:** https://github.com/xandrevv/INFO3360-2026FA
**Visibility:** public
**Default branch:** main

## 1. Ignore rules in place before first commit

`.gitignore` contents:
```text
node_modules
.DS_Store
dist
dist-ssr
*.local
.env
.nitro
.tanstack
.wrangler
.output
.vinxi
__unconfig*
todos.json
```

`.gitignore` existed before my first commit: YES

Why `.gitignore` must come before the first commit: Git only ignores
files that are not already tracked. If you commit `node_modules/` or
`.env` before `.gitignore` exists, those files enter history permanently
— deleting them later does not remove them from past snapshots. Writing
`.gitignore` first means secrets and build output never enter history
at all.

## 2. Repository initialized

```text
git init — repository initialized in project folder
git branch --show-current — main
```

## 3. Pre-stage status review

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

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

What `origin` means: `origin` is the name Git gives to the remote
copy of the repository — in this case the copy stored on GitHub. It is
just a shorthand so you do not have to type the full URL every time.

What `-u` did in `git push -u origin main`: the `-u` flag sets the
upstream tracking link between the local `main` branch and `origin/main`
on GitHub. After running it once, future pushes only need `git push`
with no extra arguments.

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

Sprint 2 will add env-variable separation and commit `.env.example`. My
repository is ready for that because ignore rules are already in place
and no secret has ever been committed: YES