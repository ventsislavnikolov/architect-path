# Notes

## Learner profile
- Principal Software Developer → targeting internal promotion to (AI) Software Architect.
- **Strong** architecture background already. Don't re-teach basics; sharpen vocabulary,
  articulation, influence, and the AI-systems lens.
- Wants both: architecting AI systems AND AI-augmented architecting.

## Teaching preferences
- **Bilingual lessons (2026-06-27):** produce BOTH English and Bulgarian versions of each lesson
  and reference doc. BG = primary reading language; keep hard/technical terms in **English**
  (trade-off, RAG, fine-tuning, ADR, fitness function, latency, guardrails, etc.). File naming:
  `*.html` = EN, `*.bg.html` = BG. Add a language toggle in the masthead of each.
- Default working hypothesis: prefers concise, business-grounded, practitioner-level material
  with immediately-usable artifacts (templates, frames) given the promotion goal.

## Open questions to resolve with the learner
- Willing to join a community (forum / internal guild / meetup)? Affects RESOURCES wisdom section.
- Any specific AI systems already in flight at work to use as the running case study?
- Preferred lesson cadence (one quick lesson per sitting? batches?).
- Does the company have a written architect competency/leveling rubric we can target directly?

## Deployment (live site)
- **Live:** https://architect-path.vercel.app — read as a book.
- **Hosting:** Vercel project `omni-body/architect-path`, static (output dir `.`).
- **Auto-deploy:** GitHub repo `ventsislavnikolov/architect-path` is git-connected → every push to
  `main` auto-deploys to production. So the workflow each update is just: edit → commit → push.
- `.vercel/` and `.env*` are gitignored. Manual deploy fallback: `vercel deploy --prod`.

## Lesson completion tracking (index)
- **Hardcoded, NOT localStorage** — learner uses phone + desktop, so per-device storage was wrong.
- Single source of truth: `data-done="true|false"` on each `.toc-item[data-lesson]` in `index.html`.
- `assets/completion.js` reads it → adds `.done` class, reveals `✓ Done` badge, fills progress bar.
- **To mark a lesson done:** flip that lesson's `data-done` to `"true"`, commit, push (auto-deploys).
- Current state: L1 = done; L2, L3 = not done (learner hasn't submitted their tasks yet).

## Pedagogy reminders
- Storage strength > fluency: use retrieval practice, spacing, interleaving.
- Quizzes: all answer options equal length/word-count, no formatting tells.
- Each lesson = one tangible win, tied to mission, in ZPD. Keep within working memory.
