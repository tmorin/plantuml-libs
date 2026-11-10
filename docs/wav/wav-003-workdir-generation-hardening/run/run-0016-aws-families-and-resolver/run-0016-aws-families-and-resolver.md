---
type: run
run: 0016
status: completed
profile: single-document
wave: 003
---

# Run 0016 - aws-families-and-resolver

Run of wave 003 (workdir-generation-hardening), manifest id W-3, phase P1.

## Scope

Three defects of the AWS package, fixed together because they share one maintainer
workflow (`doc/howto.upgrade-aws-package.md`, steps 1, 3 and 4):

1. Nine families of the pinned catalog have no colour row in
   `source/library/packages/aws/families.csv`, so their group boxes render with the default
   style (`distribution/aws/bootstrap.puml` has no `Rectangle<<...Family>>` for them).
2. Nothing at generation time says that a family has no row, so the gap shipped unnoticed
   through two upgrades.
3. `scripts/resolve-aws-icons.mjs` prints `newVersion`, `downloadUrl` and `publishedDate`, but
   the how-to tells the maintainer to set two constants, `ICONS_URL` and `FOLDER_DATE`, and
   leaves the second to be read out of the URL by hand.

In scope: `source/library/packages/aws/families.csv`, `source/library/packages/aws/index.ts`
(the family check only), `scripts/resolve-aws-icons.mjs`, `test/resolve-aws-icons.spec.mjs`,
a new `test/aws-families.spec.js`, and `doc/howto.upgrade-aws-package.md`.

Out of scope: `source/generator/workdir/**` (W-1 and W-2, committed), `groups.csv`, the AWS
example templates, the other packages and `resolve-azure-icons.mjs`, any change to
`FOLDER_DATE` or `ICONS_URL`, `distribution/` (W-4 regenerates it on GitHub), any Podman
build, and a new test fixture of the AWS page.

## Current state

Read on `wave-003` at `7e95eca445`, and measured with
`npm run generate:workdir -- -p aws -w <empty scratch dir>` (10 s, exit 0):

- The generated `aws` package has 27 distinct item families (items of `aws/Architecture`
  and `aws/Resource`; category and group items carry no family). `families.csv` has 36 rows
  and 18 of them match a generated family; 9 generated families have no row:
  `ArtificialIntelligence` (51 items), `CloudFinancialManagement` (7), `Databases` (50),
  `Games` (3), `GroupIcons` (15), `IoT` (75), `ManagementTools` (33),
  `MigrationModernization` (22), `SecurityIdentity` (56).
- The 18 other rows of `families.csv` are older spellings of categories AWS renamed
  (`Database`, `GameTech`, `InternetOfThings`/`LoT`, `ManagementGovernance`,
  `MigrationTransfer`/`MigrationAndTransfer`, `SecurityIdentityCompliance`,
  `AwsCostManagement`, `MachineLearning`, ...). Each of the nine missing families has such a
  predecessor row, which is where the colour comes from (`DEC-1`).
- `bootstrap.tera` emits `skinparam Rectangle<<<name>Family>>` once per CSV row and defines the
  eight palette variables `$AWS_COLOR_PURPLE`, `_PINK`, `_GREEN`, `_ORANGE`, `_RED`, `_BLUE`,
  `_TURQUOISE`, `_SQUID` (and six others, unused by the CSV). `AwsFactory.discover()` gives every
  `Architecture` and `Resource` item the stereotype `<family>Family`, so a family without a row is
  styled by nothing. `AwsFactory.create()` logs at `info` and never checks the CSV against the
  discovered families. `renderBootstrap()` already holds the parsed rows.
- Resolver, run live today (`node scripts/resolve-aws-icons.mjs`): it resolves
  `Icon-package_07312026`, `newVersion: aws-q3-2026`, `publishedDate: 2026-07-31`, the release the
  repository is pinned to (`FOLDER_DATE = "07312026"`). The `01302026` the wave plan reports comes
  from the test, not from the script: `test/fixtures/valid.html` is a saved copy of the AWS page
  from the January 2026 release, and `test/resolve-aws-icons.spec.mjs` asserts it (`aws-q1-2026`,
  `2026-01-30`). Cause: a stale fixture, as the plan's Open Question guessed first; no script defect
  (`DEC-4`).
- The script prints one non-JSON line (`Resolved AWS Icon Package URL: ...`) before its JSON, and
  throws for a release month other than 01, 04 or 07. Both are noted, neither is changed (`DEC-6`).
- The how-to names `newVersion`, `downloadUrl`, `publishedDate` (step 1), and the constants
  `ICONS_URL` and `FOLDER_DATE` with its `MMDDYYYY` format (step 3). No field carries the folder
  date, and nothing says what `families.csv` must contain beyond "add or remove rows".
- Baseline: `npm test` 24 passing, `npm run lint` exit 0. `scripts/resolve-aws-icons.mjs` is not
  prettier-clean (trailing spaces on three lines); `index.ts` and the spec are.

## Done when

- `AC-1` Each of the nine families has a row in `families.csv`, using only `$AWS_COLOR_*`
  variables, the file stays sorted by name and keeps a single header and no duplicate name. In the
  `library.yaml` of `generate:workdir -p aws -w <scratch>`, 27 families, 0 without a row (baseline 9).
- `AC-2` A family without a row makes `AwsFactory.create()` throw (`DEC-2`), the message naming
  the package `aws`, every family without a row (sorted, no duplicate) and `families.csv`. A test
  proves it with no network access, and that a package whose families all have rows passes.
- `AC-3` Every colour of `families.csv` is a variable that `bootstrap.tera` defines, so a row
  cannot reference a colour the bootstrap does not declare. Tested.
- `AC-4` The resolver prints `newVersion`, `downloadUrl`, `publishedDate` and `folderDate`, the
  last being the `MMDDYYYY` text of the archive name (`07312026`), with nothing else added or
  renamed. Tested for two pages, the January snapshot fixture and an inline page whose link carries
  `Icon-package_07312026`.
- `AC-5` The how-to names exactly those four fields in step 1 and says which constant each feeds
  (`downloadUrl` to `ICONS_URL`, `folderDate` to `FOLDER_DATE`); a test reads the how-to and fails if
  one of the four field names is absent from it.
- `AC-6` The how-to says, in step 3 and in Troubleshooting, that the generator now fails on a
  family without a row and how to fix it.
- `AC-7` `npm test` passes with more than the 24 tests of the baseline, `npm run lint` exits 0,
  prettier is clean on every changed file, and `npm run generate:workdir -- -w <empty scratch dir>`
  (all packages, no Podman) exits 0.
- `AC-8` The source and test diff touches only the files named under Scope; the changes to
  `index.ts` and `resolve-aws-icons.mjs` are limited to the check and the new field, apart from
  the whitespace prettier removes in the script.

## Decisions

- `DEC-1` Colours of the nine rows copy the predecessor row of the same category, which is what
  AWS keeps stable across a rename:
  `ArtificialIntelligence` `$AWS_COLOR_TURQUOISE` (as `MachineLearning`),
  `CloudFinancialManagement` `$AWS_COLOR_GREEN` (as `AwsCostManagement`),
  `Databases` `$AWS_COLOR_BLUE` (as `Database`), `Games` `$AWS_COLOR_PURPLE` (as `GameTech`),
  `GroupIcons` `$AWS_COLOR_SQUID` (as `GeneralIcons`, the neutral family),
  `IoT` `$AWS_COLOR_GREEN` (as `InternetOfThings`, `LoT`),
  `ManagementTools` `$AWS_COLOR_PINK` (as `ManagementGovernance`),
  `MigrationModernization` `$AWS_COLOR_TURQUOISE` (as `MigrationTransfer`),
  `SecurityIdentity` `$AWS_COLOR_RED` (as `SecurityIdentityCompliance`).
  Rejected: new hex values (the file only ever uses the palette variables, and the plan says to use
  them); the default style (the defect).
- `DEC-2` A family without a row is an error, not a warning. Reason: the gap shipped through two
  upgrades because a warning is invisible in a CI log nobody reads, and the pinned archive cannot
  change under a re-run, so the check only fires when a maintainer re-pins, which is when the how-to
  tells them to edit `families.csv`; it matches W-1's choice to fail in `generate:workdir` rather
  than after a render. Rejected: `context.warn` (does not stop the upgrade). Status: confirmed at
  Stage 3 (`Q-1`): `source/generator/workdir/validation.ts` (W-1) throws an `Error` listing every
  finding of a package rather than warning, and the wave plan's Autonomy Contract has the run decide
  and record; no repository convention favours a warning for a generation-time defect.
- `DEC-3` The check lives in `source/library/packages/aws/index.ts`, as an exported pure function
  `findFamiliesWithoutColor(items, rows)` called by `create()` once the architecture and resource
  items are discovered, with the rows `renderBootstrap()` already parses (the parse is moved into a
  shared private method; the rendering is unchanged). It reads no network, so the spec calls it with
  literal items and rows. Rejected: `source/generator/workdir/validation.ts` (W-1's generic, per
  package check; the colour table is AWS-only, and the wave says the runs touch disjoint files); a
  check inside the template (a `.tera` cannot throw a useful error).
- `DEC-4` The `01302026` report is a stale fixture, so no resolver defect is fixed for it. The
  January fixture stays and keeps asserting January, now labelled in the spec as a snapshot; an
  inline page for the current `07312026` link is added next to it. Rejected: replacing the fixture
  by a July page (a third saved copy of AWS's page to keep, for the same coverage), and a live
  network test (the project's other resolver specs are offline).
- `DEC-5` The new field is `folderDate`, a string of eight digits taken from the same match that
  already gives `publishedDate`. It is the value of `FOLDER_DATE`, in the same `MMDDYYYY` form,
  with no reformatting. Rejected: renaming `downloadUrl`/`newVersion`, or adding `ICONS_URL` and
  `FOLDER_DATE` as keys (the how-to, branch names and the Azure script share the existing names).
- `DEC-6` Accepted, not changed: the extra `Resolved AWS Icon Package URL` line on stdout, and the
  rejection of an October release. Both are existing behaviour that the maintainer meets in a
  visible way (a parse of the stdout fails, or the script exits 1 with a message), and neither is in
  the wave row. Logged in Findings.
- `DEC-7` The 18 predecessor rows of `families.csv` are kept. They are unused by the pinned
  catalog but harmless, removing them is not asked, and an older release re-pinned would need them.
  The how-to is not told to prune them.

## Open questions

None open. `Q-1` (warn or fail) was resolved at Stage 3 from the repository: fail, as `DEC-2` states
(W-1's validation throws an aggregated `Error`; the same pattern is reused, with every missing family
listed in one message). Not guessed: `validation.ts` line 46 and the W-3 wave row were read.

## Tasks

One sequence, one agent, tests before the code they pin:

1. `T-1` Add `test/aws-families.spec.js`: `findFamiliesWithoutColor` lists the missing families
   sorted and deduplicated and returns none when all have a row; `families.csv` has no duplicate
   name and every colour is a variable defined in `bootstrap.tera` (`AC-2`, `AC-3`). The first case
   fails before `T-2`.
2. `T-2` In `aws/index.ts`, add and export `findFamiliesWithoutColor`, share the CSV parse, and
   throw from `create()` (`DEC-2`, `DEC-3`). Run `npm run generate:workdir -- -p aws -w <scratch>`:
   it must fail naming the nine families.
3. `T-3` Add the nine rows to `families.csv` (`DEC-1`, `AC-1`). The same command now exits 0 with
   0 families without a row.
4. `T-4` In `test/resolve-aws-icons.spec.mjs`, assert the four fields (key set and values) for the
   fixture and for an inline page, and that the how-to names each field (`AC-4`, `AC-5`). The new
   assertions fail before `T-5`.
5. `T-5` In `resolve-aws-icons.mjs`, add `folderDate` (`DEC-5`); in the how-to, rewrite step 1 and
   add the family lines to step 3 and Troubleshooting (`AC-5`, `AC-6`).
6. `T-6` Run `npm test`, `npm run lint`, prettier on the changed files and the all-package
   `generate:workdir` into a scratch directory (`AC-7`, `AC-8`).

### Task results

Single agent, inline (single-document profile, no pln, no dispatch). Status: `T-1` to `T-5` done,
`T-6` done.

- `T-1` done. `test/aws-families.spec.js` (7 tests). It failed before `T-2` (`findFamiliesWithoutColor`
  is not a function). Deviation from the sketch: `create()` calls an exported pure function
  `assertFamiliesHaveColor(urn, items, rows)` (which throws) after `findFamiliesWithoutColor`, because
  `create()` needs the network archive and cannot be called offline; the test calls the assert
  function, and the real `create()` was exercised by `generate:workdir -p aws`.
- `T-2` done. `index.ts`: both functions exported, CSV parse shared (`readFamilies`), check placed
  after the resource discovery. Before `T-3`, `npm run generate:workdir -- -p aws -w <scratch>`
  exited 1 naming the nine families.
- `T-3` done. Nine rows added by `DEC-1`, file still sorted, single header. `generate:workdir -p aws`
  exits 0; `library.yaml` has 27 families and 0 without a row (`AC-1`).
- `T-4` done, with one ordering deviation: the resolver spec and the script were edited in the same
  step, so the new assertions were not observed failing; the how-to assertion was observed failing
  (`the how-to does not name folderDate`) until `T-5` wrote the how-to.
- `T-5` done. `resolve-aws-icons.mjs` returns `folderDate` (the `date` already matched; prettier
  removed the trailing spaces); the how-to names the four fields in step 1, ties `folderDate` to
  `FOLDER_DATE` and `downloadUrl` to `ICONS_URL` in step 3, and states in step 3 and in Troubleshooting
  that the generator fails on a family without a row. Prettier was also applied to the how-to, which
  was not clean before; the extra changes there are whitespace only (blank lines around lists, trailing
  spaces).
- `T-6`: `npm test` 33 passing (baseline 24), `npm run lint` exit 0, prettier clean on the five
  changed code, test and doc files. Live resolver prints the four fields (`folderDate` `07312026`). `npm run generate:workdir -- -w <empty scratch dir>` (all packages, no Podman) exits 0 (4 min 33 s, `generation done`).

## Canonical impact

None to update. This repository declares no `arc` or `dom` register (`docs/` holds only `wav/`,
and there is no `docs/CLAUDE.md`). `doc/howto.upgrade-aws-package.md` is the only description of
the maintainer workflow this run changes, and it is edited here (`AC-5`, `AC-6`);
`.claude/skills/aws-package-upgrading/SKILL.md` names neither the resolver fields nor the CSV, so it
needs no edit.

## Verification

Written at Stage 11 by an agent other than the implementer. No pln exists, so the checks are
`AC-1` to `AC-8`, each re-run or re-read here (2026-11-10, on `wave-003`).

- `AC-1` holds. `npm run generate:workdir -- -p aws -w <empty scratch dir>` exits 0; the
  `library.yaml` has 27 distinct item families, 0 without a row in `families.csv` (read by script).
  The diff of `families.csv` is the nine rows of `DEC-1`, only `$AWS_COLOR_*` values; the file is
  sorted, has one header and no duplicate (pinned by `test/aws-families.spec.js`).
- `AC-2` holds. `findFamiliesWithoutColor` and `assertFamiliesHaveColor` in `aws/index.ts` are
  called by `AwsFactory.create()` after the architecture and resource discovery; the message names
  `package aws`, the sorted families and `families.csv`. Tested offline (7 tests of
  `aws-families.spec.js`, including the pass case). The run's own earlier failing run naming the nine
  families is recorded under Task results, not re-run here.
- `AC-3` holds: the spec checks every colour of the CSV against the `!global $AWS_COLOR_*`
  definitions of `bootstrap.tera`.
- `AC-4` holds. The live resolver prints `newVersion`, `downloadUrl`, `publishedDate` and
  `folderDate` (`07312026`) and nothing else was added or renamed in the script diff (the one
  `folderDate: date` line, plus whitespace removal); the spec covers the January fixture and an
  inline July page.
- `AC-5` and `AC-6` hold: read in the how-to. Step 1 lists the four fields, step 3 ties
  `downloadUrl` to `ICONS_URL` and `folderDate` to `FOLDER_DATE`, step 3 and a new Troubleshooting
  entry state that the generator fails on a family without a row and how to fix it; the how-to
  spec test passes.
- `AC-7` holds. `npm test` 33 passing (baseline 24), exit 0; `npm run lint` exit 0; `prettier
  --check` clean on the five changed code, test and doc files; `npm run generate:workdir -- -w
  <empty scratch dir>` (all packages, no Podman) exits 0, `generation done` (4 min 41 s).
- `AC-8` holds. `git status` shows only the files of Scope (plus the wave's own documents, which
  this run does not own); the `index.ts` diff is the check, the shared CSV parse and the
  `create()` call; the script diff is `folderDate` plus the whitespace prettier removed. The
  how-to diff also carries whitespace-only prettier changes (blank lines around lists, trailing
  spaces), already disclosed in Task results. No debug artifact, no file in `distribution/`, no
  Podman build.

Deviations already recorded under Task results (assert helper called by `create()`; the T-4
resolver assertions not seen failing before `T-5`) do not change an `AC-`. Not confirmed here:
the real `create()` against a new catalog that has an unstyled family (only the aws-only workdir
run with all rows present, and the offline assert tests, were run); the Podman render and
`distribution/` stay with W-4. `docs/bkg/` and `tooling/docs/check-backlog.py` do not exist in this
repository, so the backlog sweep and check do not apply.

Review pass: dispatched (this verification was run by an agent other than the implementer and
the drafters, so it is independent of the implementation).

## Findings

- `F-1` The resolver prints a non-JSON line before its JSON on stdout, so `node
  scripts/resolve-aws-icons.mjs | jq` fails. Not changed (`DEC-6`).
- `F-2` The resolver throws for a release month other than 01, 04 or 07; an October release would
  stop the upgrade with a clear message. Not changed (`DEC-6`).
- `F-3` The `01302026` seen in the wave plan is the January 2026 snapshot in
  `test/fixtures/valid.html`; the live page resolves `07312026` today (`DEC-4`).

## Stage 2 review (KDMLLC)

Reviewer: the Stage 2 agent, a different agent from the one that generated this document (a bare
stub: frontmatter and one sentence). Referent read: `families.csv`, `bootstrap.tera`,
`aws/index.ts`, `resolve-aws-icons.mjs` and its spec and fixture, the how-to, the AWS upgrade skill,
`test/workdir-validation.spec.js`, the wave plan's W-3 row, gate and Open Questions, and run 0015's
document. Measured: the aws-only `generate:workdir` (27 families, 9 without a row), the live
resolver, `npm test` (24 passing), `npm run lint` (exit 0). Scores of the stub: KISS 5, DRY 5,
MECE 1, LEAN 5, LUCID 2, C n/a (nothing claimed).

| ID | Principle | Sev | Finding | Applied |
|---|---|---|---|---|
| R-1 | MECE-MISSING | S3 | No scope, done-when, decision, task list or canonical-impact answer: the profile drops files, never questions, and none was answered | Sections Scope to Canonical impact written from the wave row, the gate and the code |
| R-2 | MECE-MISSING | S2 | The plan's Open Question (why `01302026`) is unanswered, and "warn or fail" and the colour of each family are undecided | `DEC-4` with its evidence, `DEC-1` per family, `DEC-2` kept as `Q-1` |
| R-3 | C-DOC | S2 | The how-to (descriptive) says the maintainer takes `FOLDER_DATE` from the date in the URL while the script prints no such field; the plan's gate says the two must match. The how-to describes the script, so the doc is made to name the script's fields, and the script gains the one field the doc needs | `AC-4`, `AC-5`, `DEC-5` |
| R-4 | LUCID | S2 | A reader cannot tell which files W-3 may touch beside W-1 and W-2 | Scope, out-of-scope list, `AC-8` |
| R-5 | MECE-MISSING | S1 | A colour in `families.csv` that `bootstrap.tera` does not define would emit an invalid skinparam; nothing guards it | `AC-3` |
| R-6 | LEAN | S1 | Pruning the 18 predecessor rows, a live network test or a new fixture would add work nobody asked for | `DEC-4`, `DEC-7` (rejected, with reasons) |

Stage 3 (open questions): `Q-1` resolved inline by the Stage 3 agent, a different agent from the drafter; no external fact was involved, so no lookup was dispatched.

Review pass: inline (not independent). The stub was reviewed by an agent other than the one that
created it, but the body above was written by that same agent to apply the review's own rewrite
plan, so the body has had no second reading; Stage 3 (open questions) and Stage 7 (C scan against
the code) are the next passes over it.

## Stage 7 consistency check (C scan)

Single-document profile: there is no separate PRD and TDD, so the C scan runs over the requirement
side of this document (Scope, Done when `AC-1` to `AC-8`) against its design side (Decisions
`DEC-1` to `DEC-7`, Tasks `T-1` to `T-6`) and against the repository as referent. Checked by the
Stage 7 agent, a different agent from the drafter and from the Stage 2 and 3 agents.

- Coverage: each `AC-` is addressed by a decision and a task (`AC-1` `DEC-1` `T-3`; `AC-2` `DEC-2`
  `DEC-3` `T-1` `T-2`; `AC-3` `T-1`; `AC-4` `DEC-5` `T-4` `T-5`; `AC-5` and `AC-6` `T-5`; `AC-7` and
  `AC-8` `T-6`). Nothing is silently dropped and nothing is marked unresolved.
- Assumptions versus requirements: no decision contradicts an `AC-`. `DEC-3` (pure function, rows
  already parsed by `renderBootstrap()`) and `AC-2` (no network access) agree; `DEC-7` (keep the 18
  predecessor rows) and `AC-1` (single header, no duplicate name, sorted) agree.
- Open questions: `Q-1` was resolved at Stage 3 (`DEC-2`) and the section says none open; no
  question was lost.
- Claims against the repository, all confirmed (C-OK): aws-only `generate:workdir -w <scratch>`
  gives 27 families, 36 CSV rows, 18 matching, and exactly the nine missing names listed in Current
  state; the nine predecessor rows exist with the colours `DEC-1` copies; every colour used by the
  CSV is one of the eight variables `bootstrap.tera` defines (14 defined in all); the CSV is sorted
  and `renderBootstrap()` holds the parsed rows; `validation.ts` throws one aggregated `Error` (line
  46); the resolver prints the extra stdout line, rejects months other than 01, 04 and 07, and does
  not return `folderDate`; the spec asserts `aws-q1-2026` and `2026-01-30` from the January fixture;
  the how-to has steps 1 and 3 and a Troubleshooting section as `AC-5` and `AC-6` assume; a `.spec.js`
  can load a `.ts` module through `require("ts-node/register")`, as `test/workdir-validation.spec.js`
  does (relevant to `T-1`).
- Outcome: no C-DOC and no C-ENV finding, so neither side is edited and no product decision is
  needed. No blocker.

Review pass: dispatched (this scan was run by an agent other than the drafter, so the review is
independent of the drafting).
