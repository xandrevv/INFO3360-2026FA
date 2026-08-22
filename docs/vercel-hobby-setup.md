# Vercel Hobby Setup — Hockey Ops Directory

**Date:** 2026-08-20
**Vercel plan:** Hobby (free) — not Pro

## URLs (reused all semester)

| Item | Value |
| --- | --- |
| GitHub repository | `https://github.com/xandrevv/INFO3360-2026FA` |
| Instructor collaborator | `thortek` added: yes |
| Vercel Production URL | `https://info-3360-2026-fa.vercel.app` |
| Preview URLs | Do **not** submit these to Canvas |

## Hobby constraints I will keep

- One Vercel project for this course
- Production deploys from `main` only
- No cron / Fluid Compute / paid add-ons
- Secrets go in the Vercel dashboard later — never in git

## First production deploy

- Status: Ready
- Fix needed: switched from `vercel` preset in vite.config.ts to `nitro/vite` plugin with `preset: 'vercel'`
- Incognito check of Production URL: pass