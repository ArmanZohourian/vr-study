# Participant website

Static bilingual (DE/EN) site. No build step.

## Before publishing
1. Create a free Cal.com account and an event type (e.g. 20-min slots, your available hours, location). Put its link (e.g. `arman/vr-study`) in `CAL_LINK` at the top of `site.js`. Cal.com sends booking confirmations with a calendar invite (.ics) and prevents double bookings.
2. Replace every yellow `[PLACEHOLDER]` in `index.html`, `privacy.html` and `impressum.html` (`grep -n "todo" *.html`).
3. Have `privacy.html` checked by the university's data protection officer.

## Deploy
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from branch.
- **GitLab Pages:** add a `.gitlab-ci.yml` job named `pages` that copies these files into `public/`.

## Gameplay video
Drop the recording at `media/gameplay.mp4` (H.264, ideally under ~20 MB, 30–60 s) and optionally a still at `media/gameplay-poster.jpg`. Until then the page shows a "video coming soon" placeholder.
