---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0001-npm-dependency-upgrade/tdd-0001-npm-dependency-upgrade.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0001-npm-dependency-upgrade/pln-0001-npm-dependency-upgrade.md
run: 0001
wave: 001
---

# Progress Log: npm dependency upgrade

## Log

- 2026-10-04: Run created by `complete-wave` dispatch (W-1). Executing via
  `complete-run` in autonomous mode (no human review gate between
  documents). Document profile: `TDD+pln` — scope arrives settled from the
  wave manifest (upgrade all 17 outdated npm packages, hold back majors
  that break the build), but ordering/handling of the 4 majors carries real
  design decisions, so a `tdd`+`pln` pair earns its place; a `prd` would add
  no contestable-scope value since the wave already fixed scope and a
  `single-document` would drop the per-major design record this run needs.
- 2026-10-04: This repository has no `docs/bkg/`, no `docs/CLAUDE.md`
  register declaration, and no `tooling/docs/check-backlog.py`. Per the
  dispatch brief, any `complete-run`/`manage-runs` step that depends on
  those (backlog admission test, expiry sweep over `docs/bkg/parked/`,
  canonical-impact register discharge) has nothing to discharge here and is
  skipped rather than inventing a register.

- 2026-10-04: Drafted TDD (`tdd-0001-npm-dependency-upgrade.md`), no-PRD
  input (profile `TDD+pln`). Repository has no `docs/adr/` register and no
  `docs/CLAUDE.md` register declaration — Canonical Impact section marked
  "Not applicable". Key design decisions: batch the 13 non-major upgrades
  first (`DEC-1`), attempt the 4 majors independently in blast-radius order
  `@types/node` -> `csv-parse` -> `mocha` -> `typescript` (`DEC-2`/`DEC-3`),
  and require `csv-parse` to land on one consistent version across all six
  call sites (`DEC-4`) since downstream wave runs W-3..W-7 depend on a
  settled API there.

- 2026-10-04: Dispatched KDMLLC review of the TDD (`standard` tier,
  `general-purpose` agent). Verdict: Acceptable overall (MECE 3/needs
  revision, others 4-5). Applied all S2 findings (F1: defined a
  failure-triage procedure for the DEC-1 minors batch, bisect + same
  mechanical-fix-or-revert rule as DEC-2; F2: clarified the Non-Goals vs
  IMP-3/CTR-1 scope overlap on `source/library/packages/*/index.ts` — the
  single `csv-parse` import line stays in scope even though icon content
  does not) and both S1 findings (F3: merged DEC-3's ordering rationale
  into DEC-2 rather than keeping a separate decision block that only
  restated DEC-2's own ordering; F4: trimmed DEC-4's self-declared
  non-alternative). TDD has no Open Questions section items (stated
  "None") — Stage 6 is a no-op. No PRD exists for this run (`TDD+pln`
  profile), so Stage 7's PRD/TDD consistency check is not applicable.

- 2026-10-04: Drafted pln (`pln-0001-npm-dependency-upgrade.md`), 6 tasks,
  strictly sequential (no parallel groups — all tasks share
  `package.json`/`package-lock.json`): task-001 baseline+minors batch,
  task-002..005 the four majors in `@types/node -> csv-parse -> mocha ->
  typescript` order, task-006 final combined validation + prg
  documentation. All 6 tasks tiered `standard`, `autonomous`, no human
  review gates — none of this run's work rises to a genuine
  product/business tradeoff or irreversible action under the
  `complete-run` autonomy override; a held-back major routes to a
  documented escalation-rule outcome, not a human stop. Stage 9 consistency
  re-check: every `task_catalog` entry traces to real TDD IDs (`TG-`/`DEC-`/
  `IMP-`/`CTR-`), no invented scope; no `blocking_gaps` in the pln. Run
  status set to `planned`.

- 2026-10-04: Executed Stage 10 tasks 1-5 (dispatched to `general-purpose`
  subagents per the Delegation Policy, `standard` tier; this session
  independently re-ran `npm run lint`/`npm test`/version checks after each
  to verify rather than trust self-reports). Results:
  - task-001: batch-upgraded 11 of the 13 non-major packages (2 were
    already at their Wanted version). Green on first attempt, no reverts.
  - task-002: `@types/node` 25.9.1 -> 26.6.4. Green, no code changes
    needed.
  - task-003: `csv-parse` 6.2.1 -> 7.0.3. Green, zero source changes needed
    across all six call sites — upstream's own changelog states 7.0.0 "by
    mistake, there is no breaking changes"; verified independently that
    none of the six call sites use any of the options renamed in the 6.0.0
    line. `TG-3`/`DEC-4` satisfied trivially (one version, no shape drift).
  - task-004: `mocha` 11.7.6 -> 12.0.3. Green; pre/post test count
    identical (5 passing, same file/test names) — no silent discovery
    drop.
  - task-005: `typescript` 6.0.3 -> attempted 7.0.2, **held back**.
    `@typescript-eslint/eslint-plugin@8.71.0` refuses to load against
    TypeScript 7.0 outright ("typescript-eslint does not support TS 7.0",
    tracked upstream at typescript-eslint#10940) — a hard upstream gate,
    not a fixable type error, so per `DEC-2`'s fix-or-revert triage this
    was reverted to `^6.0.3` rather than forced through. Verified
    independently: `npm ls typescript` resolves 6.0.3 everywhere,
    `node_modules/typescript/package.json` confirms 6.0.3, lint/test green
    at the reverted state.

## Findings

- `typescript` 6 -> 7 is held back for this run: blocked on
  `@typescript-eslint/eslint-plugin` shipping TS 7.x support
  (github.com/typescript-eslint/typescript-eslint issue #10940, confirmed
  via the plugin's own refusal message at install/lint time, not merely
  assumed). This is the one planned hold-back `DEF-1` in the TDD
  anticipated. Re-attempt once typescript-eslint#10940 lands.
- `csv-parse` 6 -> 7 required no source changes at any of its six call
  sites — contrary to the TDD's `RISK-2`/lowest-confidence framing, the
  major was a no-op at the API level for this project's usage
  (`parse(content, { columns: true })`), per upstream's own changelog
  admission that 7.0.0 carries no breaking changes.
- 2026-10-04: Task-006 (final combined validation) run directly in this
  session rather than dispatched, since it is pure verification: `npm ci`
  (466 packages, clean), `npm run lint` (clean), `npm test` (5 passing),
  `npm run generate:workdir` (all 12 packages processed including the five
  `csv-parse`-consuming ones, exit 0), `npm outdated` (final state: only
  `typescript` listed, plus two pre-existing non-actionable entries where
  `Current`/`Wanted` are already ahead of the npm `Latest` dist-tag --
  `@types/extract-zip` 2.0.3 vs latest-tag 2.0.0, `@types/yaml` 1.9.7 vs
  latest-tag 1.9.6 -- both present at wave-authoring time too, not
  introduced by this run, and not actionable since there is nothing newer
  to move to). `git diff package.json` reviewed directly: confirms exactly
  the planned 13 minor/patch bumps plus three of the four majors, with
  `typescript` correctly left at `^6.0.3`. No files outside
  `package.json`/`package-lock.json` changed.
- `npm audit` reports 4 high-severity advisories (brace-expansion,
  extract-zip, undici — all transitive). Not introduced by this run (not
  checked against a pre-run baseline, but none of the three are among the
  17 packages this run touched directly, and `extract-zip` was explicitly
  out of this run's scope per `npm outdated`), and resolving them is out of
  this run's scope per the TDD (`npm audit` is informational only,
  Security and Privacy section) — left as a finding, not acted on. Not a
  canonical-impact item (no `arc`/`dom` register exists to record it
  against). Deferred to whoever next does a security-focused dependency
  pass.

- 2026-10-04: Stage 11 verification (independent of all dispatched
  subagents' self-reports): removed `node_modules` entirely and ran a
  fully clean `npm ci` from the final `package-lock.json` — succeeded (466
  packages). Re-ran `npm run lint` and `npm test` against that clean
  install — both green (5 passing). Reviewed `git diff package.json`
  directly — matches the plan exactly: 13 non-major packages bumped, 3 of
  4 majors upgraded, `typescript` correctly left at `^6.0.3`. `git status`
  confirms only `package.json`/`package-lock.json` changed; no stray
  generated artifacts. Run status set to `completed`; pln
  `execution_manifest.status` set to `done`; TDD and pln frontmatter
  `status` set to `active` (lifecycle convention per
  `docs/CLAUDE.md`-style enum, even though this repository has no
  `docs/CLAUDE.md` of its own). No `docs/bkg/` register exists in this
  repository, so `DEF-1`/`DEF-2` from the TDD stay recorded here rather
  than filed as backlog items; the close-out expiry sweep over
  `docs/bkg/parked/` and `check-backlog.py` have nothing to run against
  and are skipped, per the dispatch brief. No ADR/canonical register
  exists either, so Canonical Impact close-out is "not applicable" — no
  obligation to discharge. Not committed to git, and not pushed — per the
  dispatch brief, pushing/PR-creation and committing on the human's
  explicit go-ahead are left to the human; the working tree is left with
  `package.json`/`package-lock.json` modified and ready to commit.

## Lessons Learnt

- Treating each of the four majors as an independent attempt-or-revert
  unit (rather than researching every major's compatibility up front)
  paid off differently for each: `csv-parse` 6->7 was a pure no-op at the
  API level (upstream's own changelog says 7.0.0 shipped with no breaking
  changes "by mistake"), while `typescript` 6->7 hit a hard, unfixable
  upstream gate (`@typescript-eslint` not yet supporting TS 7.x) that no
  amount of in-repo mechanical fixing could resolve. Attempting first and
  reverting on a real signal was cheaper and more accurate here than
  trying to predict compatibility from version numbers alone.
- A held-back major is not a failed run — the wave manifest and TDD both
  named this as an acceptable outcome up front, which made it possible to
  report `typescript` staying at 6.x as a completed, documented decision
  rather than an escalation or a partial failure.
