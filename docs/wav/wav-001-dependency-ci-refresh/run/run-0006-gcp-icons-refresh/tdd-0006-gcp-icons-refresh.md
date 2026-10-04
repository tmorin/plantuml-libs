---
title: GCP icons refresh
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/wbc-001-dependency-ci-refresh.md
run: 0006
wave: 001
type: tdd
---

# Title

GCP icon package refresh for `@tmorin/plantuml-libs` (wave 001, run W-6)

# Summary

`source/library/packages/gcp/index.ts` fetches a single fixed URL
(`https://cloud.google.com/icons/files/google-cloud-icons.zip`) with no
version pin. This run's own reconnaissance found that URL now returns
HTTP 404 — the factory is not merely stale, it is currently broken: running
`npm run generate:workdir -- -p gcp` silently produces **0 icons** because
`source/generator/workdir/archive.ts`'s `fetchArchive()` never validates
that the downloaded body is actually a zip (it downloaded an HTML error
page and "extracted" it into an empty directory without raising an error).

Google restructured its public icon library and now serves three separate
archives. Rendering the real `cloud.google.com/icons` page (it is
JS-driven; a plain HTTP fetch of the page cannot see the real links)
surfaced:

- `https://services.google.com/fh/files/misc/category-icons.zip` — new
  category icons, nested `Category Icons/<Name>/SVG/<Name>-512-color.svg`.
- `https://services.google.com/fh/files/misc/core-products-icons.zip` — new,
  simplified per-product icon set, nested `Unique Icons/<Name>/SVG/...`.
- `https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip`
  — "Legacy console icons": flat `<name>/<name>.svg`, 216 icons.

The legacy zip's flat layout is structurally identical to what
`discover()`/`getItemUrn()` already parse, and a name-for-name diff against
the 216 base names already present in the checked-in
`distribution/gcp/Item/*.puml` found no real differences (see `ASM-2`).
Google relocated this exact asset; it did not change its content. This TDD's
design is therefore narrow: repoint the URL at the correct replacement
asset, add a package-local guard against the exact silent-empty-package
failure mode this run just hit, and record a verifiable freshness
checkpoint since GCP publishes no version string to pin against.

No PRD exists for this run — **traceability is incomplete**; requirements
below are sourced directly from the wave manifest
(`docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md`,
run `W-6`) and its business case, per this run's `TDD+pln` document profile
(infra-only work, scope already settled by the wave, no `prd` needed).

# Scope

In scope: `source/library/packages/gcp/index.ts` (the `ICONS_URL` constant
and a zero-icons guard), and `doc/howto.upgrade-gcp-package.md` (correcting
all three dead-URL references — Step 2, Step 3 bullet 1, and
Troubleshooting — since the GCP package's own upgrade skill,
`.claude/skills/gcp-package-upgrading`, points agents at that file).

Out of scope: `source/generator/workdir/archive.ts`'s generic
silent-failure behavior (shared by every package; see `DEC-2` and `DEF-1`),
`source/library/packages/gcp/groups.csv` (architecture-grouping metadata,
unrelated to Google's asset move and unaffected by it — confirmed no
content change needed), `source/templates/gcp/**` (the three hardcoded
icon references in `diagram_elements_overview.tera` all still resolve in
the new asset — confirmed, no change needed), and any `test/**` file (no
GCP-specific spec file exists in this repository, unlike `aws`/`azure`).
Also out of scope: adopting the new `category-icons.zip`/
`core-products-icons.zip` redesigned icon system as this package's content
(see `DEC-1`'s rejected alternative) — that would shrink the package from
216 to a much smaller, differently-organized set, a content redesign
nothing in this wave asked for.

# PRD Traceability

No PRD exists for this run (`TDD+pln` profile). Requirements are sourced
directly from:

- Wave manifest `W-6` entry (`wav-001-dependency-ci-refresh.md`): "use
  `gcp-package-upgrading` to refresh the GCP icon set, whose content was
  last substantively touched in 2023."
- Wave P2 table exit evidence: "Package rebuilds via `npm run
  generate:package -- -p gcp`; run records what changed since the 2023
  baseline or confirms no change."
- Business case (`wbc-001-dependency-ci-refresh.md`) Context: "GCP has no
  version pin at all — it always fetches `google-cloud-icons.zip` as-is
  from Google... the unpinned URL means drift happens silently."
- Wave Risks section: "AWS and GCP freshness is not fully confirmed at
  wave-authoring time... GCP's URL carries no version at all... W-6 may
  legitimately conclude 'already current' at execution time — a valid
  outcome, not a planning error." This run's actual finding (dead URL, not
  merely stale) is a stronger outcome than either of the two the wave
  anticipated, and is addressed in full below.

All three are addressed by this TDD; none are unresolved.

# Technical Goals

- `TG-1` — `source/library/packages/gcp/index.ts` fetches a URL that
  currently resolves (HTTP 200, actual zip body) and reproduces the
  package's existing 216-icon, 22-group content exactly.
- `TG-2` — A future upstream URL rot (the exact failure this run found)
  cannot silently reduce the package to zero icons again; it must fail the
  build loudly instead.
- `TG-3` — The package's freshness is independently re-checkable by a
  future run without re-deriving this run's whole investigation from
  scratch: a dated checkpoint (icon/group counts) is recorded in-repo.
- `TG-4` — `doc/howto.upgrade-gcp-package.md` no longer documents a dead
  URL as the package's fetch target.

# Non-Goals

- Does not fix `source/generator/workdir/archive.ts`'s generic
  content-type/zip-signature validation gap — see `DEF-1`.
- Does not adopt Google's new `category-icons.zip`/`core-products-icons.zip`
  icon system, or add it as new modules alongside the existing one — see
  `DEC-1`'s rejected alternatives and `DEF-2`.
- Does not touch any other icon/shape package (wave runs W-3, W-4, W-5,
  W-7's scope) or `.github/workflows/**` (W-2's scope).
- Does not change `source/library/packages/gcp/groups.csv` or
  `source/templates/gcp/**` — confirmed unaffected by the URL move.
- Does not push a branch or open a pull request — this run commits locally
  only, per its own dispatch instructions; `doc/howto.upgrade-gcp-package.md`
  Steps 1 and 5-9 (branch/push/workflow-dispatch/PR, via GitHub MCP or `gh`)
  are not executed by this run even though the how-to describes them for a
  different execution context.

# Assumptions

- `ASM-1` — Google's "Legacy console icons" zip
  (`google-cloud-legacy-icons.zip`) is the direct, content-preserving
  replacement for the old `google-cloud-icons.zip`, not a deprecated
  snapshot that could disappear without a further replacement. Validated
  empirically for *this* run (content match confirmed, below); not
  something this run can validate for the future — flagged as `RISK-2`.
- `ASM-2` — The legacy zip's 216 icons are content-identical to what this
  package already ships. Validated by diffing the legacy zip's flat
  `<name>/<name>.svg` directory names (216, lowercase/snake_case) against
  the base names already present in `distribution/gcp/Item/*.puml` with
  `Card`/`Group`/`.Local`/`.Remote` suffixes stripped (216, PascalCase) —
  216 vs 216, no real differences (a handful of apparent mismatches in an
  ad hoc comparison script were artifacts of naive snake→Pascal conversion
  on names with embedded hyphens, e.g. `gke_on-prem`; the repository's
  actual `toCamelCase()`, built on lodash `camelCase()`
  (`source/generator/workdir/naming.ts`), does not share that bug and
  needs no change). This assumption is about *names*, not SVG byte
  content — the actual old zip is unreachable (404) so a byte-for-byte
  diff against the pre-2026 asset is not possible; see `Q-1`.
- `ASM-3` — The three hardcoded icon references in
  `source/templates/gcp/examples/diagram_elements_overview.tera`
  (`CloudDns`, `CloudLoadBalancing`, `ComputeEngine`) all still resolve
  after the URL change. Validated directly: all three base names
  (`cloud_dns`, `cloud_load_balancing`, `compute_engine`) are present in
  the legacy zip's 216-entry list.
- `ASM-4` — Podman and Docker are both available in this execution
  environment (`which podman docker` succeeded), so
  `npm run generate:package -- -p gcp` (which needs the
  `docker.io/thibaultmorin/plantuml-generator:1` image per
  `scripts/generate-package.sh`) can be attempted for full verification,
  unlike the sibling `W-1`/`W-2` runs' environments which recorded this as
  unavailable. Validated by direct command check at Stage 10/11.

# Constraints

- `CON-1` — `source/library/packages/gcp/index.ts`'s `discover()`/
  `getItemUrn()` parsing logic must not change unless the upstream
  directory layout actually differs from what it expects — it does not
  (per `ASM-2`), so this run changes only the URL constant and adds a
  guard, not the parsing logic itself.
- `CON-2` — No semicolons, double-quote strings, `import P from "path"`-style
  aliased imports (`docs/CLAUDE.md`'s... — this repository's root
  `CLAUDE.md` "Code Conventions" section; there is no separate `docs/
  CLAUDE.md` register file in this repository, confirmed by directory
  listing). Any edit must match the surrounding file's existing style.
- `CON-3` — This run must not push a branch or open a pull request
  (dispatch-level instruction); it may commit locally.
- `CON-4` — No `docs/bkg/` backlog register, `docs/CLAUDE.md` register
  declaration, or `tooling/docs/check-backlog.py` exist in this repository
  (confirmed by direct filesystem check) — any step depending on those is
  not applicable and is skipped, recorded in the prg rather than invented.

# Current State

- `source/library/packages/gcp/index.ts` line 17: `const ICONS_URL =
  "https://cloud.google.com/icons/files/google-cloud-icons.zip"` — returns
  HTTP 404 as of 2026-10-04 (`curl -sIL` confirmed).
- `source/generator/workdir/archive.ts`'s `fetchArchive()` →
  `download()`/`extractArchive()` has no response validation: a non-zip
  response body (e.g. an HTML error page) is written to `icons.zip` and
  handed to `extract-zip` with no check that extraction actually found
  entries; `discover()`'s `glob("**/*.svg")` then simply returns an empty
  array and the package silently builds with 0 icons (reproduced directly:
  `npm run generate:workdir -- -p gcp` logged `discovered 0 pictures file`,
  `found (0) icons`, `found (22) groups`).
- `source/library/packages/gcp/groups.csv` defines 22 custom architecture
  groups (`User`, `Infrastructure System`, `Zone`, etc.) — independent of
  Google's SVG icon set, last touched 2023, unaffected by this change.
- `distribution/gcp/Item/*.puml` (checked-in, from the last successful
  build) contains 1512 `.puml` files resolving to 216 distinct base icon
  names after stripping `Card`/`Group`/`.Local`/`.Remote` suffixes — this is
  the comparison baseline used for `ASM-2`.
- Correction to the wave manifest's framing: `git log` shows
  `source/library/packages/gcp/index.ts` (the factory *code*) was indeed
  last substantively edited in 2023, but the automated `package_builder`
  CI bot successfully *regenerated* `distribution/gcp`'s actual *content*
  as recently as 2025-02-21 (commit `555cb6ac54`, `feat(gcp): refresh the
  package`) using that same code and the same (then still-resolving) old
  URL. So the old URL did not die "since 2023" — it was still working as
  late as February 2025; it broke at some point between then and this
  run's 2026-10-04 execution, within the window of Google's reported
  2024-2025 icon-library restructure. This does not change this run's
  design, but it is a more precise dating than the wave manifest's framing
  and is recorded here rather than silently left uncorrected.
- `source/templates/gcp/bootstrap.tera` and
  `source/templates/gcp/examples/diagram_elements_overview.tera` exist and
  reference icon URNs by name; only the latter hardcodes specific icon
  names (`CloudDns`, `CloudLoadBalancing`, `ComputeEngine`).
- `doc/howto.upgrade-gcp-package.md` Step 2 states "GCP uses a fixed URL:
  `https://cloud.google.com/icons/files/google-cloud-icons.zip`" — this is
  now incorrect and would mislead a future run of
  `.claude/skills/gcp-package-upgrading`.
- No `test/*.spec.{js,mjs}` file references `gcp` (confirmed via `grep -rl
  gcp test/`), unlike `aws`/`azure` which have dedicated
  `resolve-{aws,azure}-icons.spec.mjs` files.
- Both `podman` and `docker` are present in this execution environment
  (`/usr/bin/podman`, `/usr/bin/docker`).

# Proposed Design

Three narrow, additive/modifying changes, no new component or service
boundary — diagram trigger rules do not fire (no new relationship between
modules; the only "flow" affected is a fetch-and-parse sequence already
fully described in prose below), so no diagram is included.

`DEC-1` — Point `ICONS_URL` at
`https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip`.

- Decision: Replace the dead
  `https://cloud.google.com/icons/files/google-cloud-icons.zip` with
  `https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip`,
  with no other change to `discover()`/`getItemUrn()`.
- Rationale: This is the asset Google itself now serves as the direct
  continuation of the old URL's content — confirmed structurally identical
  (flat `<name>/<name>.svg`, same 216 names) to what this package already
  builds, per `ASM-2`. It requires zero parsing-logic changes and ships
  the smallest possible diff that fixes the actual break.
- Alternatives considered:
  (a) `https://services.google.com/fh/files/misc/core-products-icons.zip`
  — Google's new, simplified ~89-unique-product icon set, nested under
  `Unique Icons/<Name>/SVG/...`. Rejected: adopting it would both shrink
  the package's content (216 → far fewer named icons) and require
  non-trivial `discover()`/`getItemUrn()` rework for the new nested
  `SVG`/`PNG` subfolder layout — a content redesign the wave never asked
  for (see Scope/Non-Goals).
  (b) `https://services.google.com/fh/files/misc/category-icons.zip` —
  Google's new category-level icon set (28 categories). Rejected: wrong
  granularity entirely (categories, not products/services); would replace
  this package's actual content with something unrelated.
  (c) Leave the URL unchanged and treat the 404 as "already current, no
  action" (the wave's own anticipated valid outcome for GCP). Rejected:
  the wave's anticipated "already current" outcome assumed the URL would
  still resolve; a 404 is not "current", it is broken, and the business
  case's own completion criteria ("matches the latest available... or the
  run recorded why not") is not satisfied by leaving a dead fetch target
  in place when a confirmed working replacement exists.
- Tradeoffs: none identified — this is a strict improvement (broken → 
  working, same content) with no scope or compatibility cost.
- Linked requirements: wave `W-6` focus line; business case GCP context
  line; `TG-1`.

`DEC-2` — Add a package-local zero-icons guard inside
`source/library/packages/gcp/index.ts`'s `create()`, rather than fixing
`archive.ts` generically.

- Decision: After `discover()` returns, if `iconItems.length === 0`, throw
  an `Error` naming the URL and the expectation ("GCP icon discovery
  returned 0 icons from `${ICONS_URL}` — upstream may have moved or
  changed structure again; see `doc/howto.upgrade-gcp-package.md`") rather
  than letting the package silently build empty.
- Rationale: directly serves `TG-2`. This run just demonstrated the exact
  failure mode (dead URL → silent empty package) and the fix belongs where
  this run has authority to act: `source/library/packages/gcp/**`.
  `archive.ts` is shared infrastructure used by every other package
  (`aws`, `azure`, `fontawesome`, `simpleicons`, `material`, `eip`,
  `c4model`, `c4k8s`, `domainstorytelling`, `eventstorming`) and sits
  outside this run's `likely_paths`; it is also plausibly being read or
  relied upon by the other icon-package runs in this same wave batch
  (`W-3`, `W-4`, `W-5`, `W-7`) executing concurrently, so editing it here
  risks a conflicting/overlapping change outside what the wave scoped as
  concurrent-safe (the wave's own Risks section calls out
  `source/library/packages/<name>/**` as the no-overlap boundary between
  W-3..W-7).
- Alternatives considered: (a) fix `archive.ts`'s `download()` to validate
  the response (e.g. check `Content-Type` or magic bytes `PK\x03\x04`
  before writing/extracting) — correct in principle, benefits every
  package, but out of this run's scope per the overlap reasoning above;
  captured as `DEF-1` instead of done here. (b) Do nothing (rely on a
  human noticing an empty `distribution/gcp/`) — rejected, this is
  precisely the silent-failure mode `TG-2` exists to close.
- Tradeoffs: the guard only catches *this* package's zero-icons case, not
  a partial/truncated response that still yields some icons; accepted
  since a partial-but-nonzero failure is a much lower-probability failure
  mode and still visible via the icon-count checkpoint in `DEC-3`.
- Linked requirements: `TG-2`.

`DEC-3` — Record a dated "last verified" checkpoint as a code comment
above `ICONS_URL`, since GCP publishes no version string to pin against.

- Decision: Add a comment stating the asset's origin (the 2024-2025 Google
  icon-library restructure), the URL it replaced, and a concrete
  checkpoint: verification date, icon count (216), and group count (22
  — from `groups.csv`, unaffected). Format: plain comment, not a parsed
  constant — there is nothing upstream to programmatically compare it
  against, so a structured version field would be decorative, not
  functional.
- Rationale: directly serves `TG-3`. Every other package in this repo
  (`aws`, `azure`, `fontawesome`, `material`, `simpleicons`, `eip`) pins a
  real upstream version/date because upstream actually publishes one; GCP
  does not (confirmed by inspecting all three current download links —
  plain static filenames, no version segment in any of them). A comment
  checkpoint is the closest equivalent available, and gives the next
  `gcp-package-upgrading` run a concrete prior state to diff against
  instead of re-deriving "has anything changed?" from nothing, as this run
  had to.
- Alternatives considered: (a) add no freshness marker at all, relying on
  `npm run generate:workdir`'s own icon-count log line as the only signal
  — rejected, that log line is ephemeral (console output, not committed)
  and doesn't tell a future reader *when* it was last confirmed. (b)
  Introduce a fake version constant (e.g. `ICONS_VERSION = "2026-10"`)
  mirroring Azure's `ICONS_VERSION` pattern — rejected, Azure's constant is
  meaningful because it is substituted into a real, Microsoft-published
  versioned URL; GCP's URL has no such slot, so a same-shaped constant
  would imply a precision that doesn't exist upstream.
- Tradeoffs: a comment is not machine-checked; a future agent could still
  skip reading it. Accepted as the best available option given no real
  upstream version exists.
- Linked requirements: `TG-3`; business case completion criteria ("matches
  the latest available... or the run recorded why not").

`DEC-4` — Correct every dead-URL reference in
`doc/howto.upgrade-gcp-package.md` (not Step 2 alone — the old filename
`google-cloud-icons.zip` recurs three times: Step 2's fixed-URL statement,
Step 3 bullet 1's "correct URL" check, and the Troubleshooting section's
"extract the zip locally" note) and add a short note about the 2024-2025
restructure, without rewriting the document's GitHub MCP/`gh`-based
branch-push-PR workflow (Steps 1, 5-9), which is out of this run's
execution context but still correct guidance for whichever context the
how-to is normally run in.

- Decision: Update all three occurrences to the new
  `google-cloud-legacy-icons.zip` URL/filename and add one sentence noting
  Google now serves three separate archives (category/core-products/legacy),
  with a pointer to this run's TDD/prg for the full reasoning, so a future
  reader doesn't have to re-derive why "legacy" is the right one.
- Rationale: directly serves `TG-4`. The how-to is the artifact
  `.claude/skills/gcp-package-upgrading` explicitly delegates to (`Steps:
  1) Follow the instructions in the "doc/howto.upgrade-gcp-package.md"
  file...`); leaving a dead URL in it would make the next invocation of
  that skill repeat this run's entire investigation from scratch, or worse,
  silently fail the same way this run's initial `generate:workdir` run did.
- Alternatives considered: rewrite the whole how-to's workflow to match
  this execution context (no GitHub MCP, no push/PR) — rejected, that
  workflow may be correct for a different agent/environment that *does*
  have GitHub MCP access and branch/PR permissions; this run only owns
  fixing the one factual error (the dead URL), not re-authoring the
  procedure for every possible execution context.
- Tradeoffs: the how-to will still describe a push/PR flow this specific
  run doesn't execute; accepted, since rewriting that is out of scope and
  not something this run was asked to decide.
- Linked requirements: `TG-4`.

# Repository Impact

`IMP-1` — `source/library/packages/gcp/index.ts`

- Path(s): `source/library/packages/gcp/index.ts`
- Change type: modify
- Why impacted: `DEC-1` (URL), `DEC-2` (zero-icons guard), `DEC-3`
  (freshness-checkpoint comment).
- Linked requirements: `TG-1`, `TG-2`, `TG-3`.
- Risks / notes: keep the diff minimal — no change to `discover()`'s glob
  pattern or `getItemUrn()`'s path parsing, per `CON-1`.

`IMP-2` — `doc/howto.upgrade-gcp-package.md`

- Path(s): `doc/howto.upgrade-gcp-package.md`
- Change type: modify
- Why impacted: `DEC-4` (correct all three dead-URL references).
- Linked requirements: `TG-4`.
- Risks / notes: outside `source/library/packages/gcp/**` (this run's
  `likely_paths`) — reportable but low-risk: no other wave batch member
  has reason to touch this file (it is GCP-package-specific documentation),
  so no concurrency conflict is expected.

`IMP-3` — `.workdir/` and `distribution/gcp/` (generated, not hand-edited)

- Path(s): `.workdir/library.yaml`, `.workdir/.cache/gcp/**`,
  `distribution/gcp/**`
- Change type: modify (regenerated output, not source)
- Why impacted: re-running `npm run generate:workdir -- -p gcp` and (if
  Podman/Docker available, confirmed per `ASM-4`) `npm run
  generate:package -- -p gcp` regenerates these from the corrected
  `index.ts`; per `doc/howto.upgrade-gcp-package.md`'s own Notes section,
  these directories are generated and must not be hand-edited.
- Linked requirements: `TG-1` (verification evidence).
- Risks / notes: per `ASM-2`, content should come back unchanged (216
  icons, 22 groups) — a different count would mean `ASM-2` or `ASM-3` was
  wrong and needs re-examination before this run can report done. One
  genuine content difference was found and applied — see `Q-1`'s
  resolution. A file-ownership artifact was also discovered applying the
  verified output: `distribution/**`/`.workdir/**` in this checked-out
  tree are owned by a podman-rootless-mapped uid that this run's own shell
  process cannot write to directly (`cp`/`rm` both failed with "Permission
  denied", even though a prior real `npm run generate:package` invocation
  — by this wave's CI or another session — clearly wrote there
  successfully). The fix was to perform the file copy itself from *inside*
  a short-lived container with the same `--userns=keep-id` mapping,
  bind-mounting only the already-isolated, already-verified source files
  (read-only) and the real `distribution/gcp/` (read-write) — never the
  shared `.workdir/` or any other package's `distribution/<pkg>/`. This is
  an environment quirk of this execution session, not a defect in the
  generator; recorded here and in the prg so a future run isn't surprised
  by the same "permission denied" on a seemingly-owned file.

# Canonical Impact

Not applicable — no canonical registers declared. This repository has no
`docs/adr/` register and no `docs/CLAUDE.md` register declaration
(confirmed by directory listing: no `docs/CLAUDE.md` file exists in this
repository at all — the root `CLAUDE.md` is the only project-instructions
file, and it declares no `arc`/`dom` register).

# Data Model and Contracts

`CTR-1` — GCP upstream fetch target

- Current contract: `source/library/packages/gcp/index.ts`'s `ICONS_URL`
  resolves to a zip whose extracted root contains flat `<name>/<name>.svg`
  entries (no intermediate category folder), consumed by `discover()`'s
  `glob("**/*.svg")` and `getItemUrn()`'s `path.split(sep).slice(1)`
  parsing (which assumes exactly this 2-segment shape).
- Proposed contract: identical shape, new URL
  (`https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip`).
  No change to the shape itself — `ASM-2` confirmed the new asset matches
  it exactly.
- Affected files: `source/library/packages/gcp/index.ts`.
- Migration or compatibility notes: none needed — this is a same-shape
  asset relocation, not a format change. If a future Google change does
  alter the shape, `DEC-2`'s zero-icons guard will not catch a
  *reshaped-but-nonzero* response; that residual risk is `RISK-1`.
- Linked requirements: `TG-1`.

# Interfaces and Behavior

- Input: `ICONS_URL` (HTTP GET, no auth) → zip body.
- Output: unchanged — `Package` object with `gcp/Item` and `gcp/Group`
  modules, consumed by the existing website/distribution ETL exactly as
  before; this run changes only where the icon bytes come from, not the
  shape of what `create()` returns.
- Error state (new, per `DEC-2`): `create()` now throws synchronously if
  `discover()` returns zero items, surfacing as a failed
  `npm run generate:workdir`/`generate:package` invocation instead of a
  silently empty `distribution/gcp/`.

# Flows and Processing Logic

`FLOW-1` — GCP package generation (unchanged shape, corrected target)

- Trigger: `npm run generate:workdir -- -p gcp` (standalone) or
  `npm run generate:package -- -p gcp` (full render via Podman/Docker).
- Steps: `create()` → `fetchArchive(ICONS_URL, ...)` downloads and extracts
  the zip → `discover()` globs `**/*.svg` → `getItemUrn()` builds item URNs
  → (new) zero-icons guard checks `iconItems.length` → `csvToCustomGroups()`
  reads `groups.csv` → `Package` with `Item`/`Group` modules is returned →
  (for `generate:package`) the Podman-run `plantuml-generator` container
  renders `.puml`/`.png`/`.md` into `distribution/gcp/`.
- Branches / failure paths: if the fetch target 404s, redirects
  unexpectedly, or otherwise returns a non-zip body, `download()` still
  writes whatever bytes it got (no content-type check — `DEF-1`), but
  `discover()` now reliably returns 0 items in that case (confirmed
  behavior), which the new guard turns into a thrown `Error` instead of a
  silent empty package.
- Final output / rendered result: `distribution/gcp/Item/**`,
  `distribution/gcp/Group/**`, `distribution/gcp/README.md` — expected
  unchanged in content versus the current checked-in state (`ASM-2`).
- Linked requirements: `TG-1`, `TG-2`.

No sequence/activity diagram: the flow has exactly one external integration
point (the fetch) and one new branch (the guard), both fully described
above in a few lines — diagram trigger 2 ("meaningful branching,
async behavior, or non-trivial failure paths") does not clear the bar for
a dedicated diagram.

# Reliability, Performance, and Scalability

- The zero-icons guard (`DEC-2`) converts a silent data-loss failure into
  a loud build failure — strictly improves reliability for this package,
  no performance impact (one length check on an already-computed array).
- No scalability concern: 216 icons, one HTTP fetch, unchanged from before.

# Security and Privacy

- No change in trust boundary: the fetch target moves from one
  Google-controlled domain (`cloud.google.com`) to another
  (`services.google.com`), both first-party Google infrastructure. No
  credentials, tokens, or user data involved in either case.

# Observability and Verification

- `npm run generate:workdir -- -p gcp` — must log `discovered 216 pictures
  file`, `found (216) icons`, `found (22) groups` (the pre-break baseline
  established in `ASM-2`/Current State); a different icon count is a
  verification failure requiring investigation before this run reports
  done.
- `npm run generate:package -- -p gcp` (`scripts/generate-package.sh`,
  needs Podman/Docker — available per `ASM-4`) — full render through the
  `plantuml-generator` container; must complete without error and produce
  `distribution/gcp/Item/**`, `distribution/gcp/Group/**`,
  `distribution/gcp/README.md`.
- `git diff distribution/gcp/` (if the full render runs) — expected to show
  no content differences beyond cosmetic regeneration artifacts (e.g.
  timestamps, if any); any structural diff (added/removed/renamed items)
  contradicts `ASM-2` and must be explained, not silently accepted.
- `npm run lint` — must pass (repo-wide `eslint .`); the only source
  changed is `source/library/packages/gcp/index.ts`.
- `npm test` — must pass; no GCP-specific spec exists, so this is a
  repo-wide regression check, not targeted coverage of this change.
- `grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md` —
  expected to match only the explanatory historical reference in the
  corrected Step 2 text (the sentence naming the old URL as "now 404s"),
  not the Step 3 or Troubleshooting occurrences this run corrects (`DEC-4`)
  — catches exactly the kind of partial fix an earlier review pass of this
  TDD flagged (only Step 2 corrected, Step 3/Troubleshooting left stale).

# Deployment and Rollout

- Code-only change (one `index.ts` constant/guard, one doc fix) plus
  regenerated-but-not-hand-edited output (`.workdir/`, `distribution/gcp/`).
  No data migration, no schema change, no external service dependency
  beyond the existing GCP icon fetch.
- No staged rollout needed — this is a library content package, not a
  running service; "rollout" is the next `npm publish`/release cycle,
  which this run does not trigger (no `npm run release` call).
- Rollback: `git revert` the commit(s); the old (broken) `ICONS_URL` would
  simply restore the current 404 state, so rollback is only meaningful if
  Google's new URL also stops working — in which case the fix is a new
  investigation, not a revert.
- This section is planning guidance only; it does not authorize pushing,
  releasing, or publishing (`CON-3`).

# Risks and Tradeoffs

- `RISK-1` — `DEC-2`'s guard only catches *zero* icons, not a
  reshaped-but-nonzero response (e.g. if Google changes the legacy zip's
  internal layout but keeps some `.svg` files discoverable by the current
  glob). Mitigated partially by `DEC-3`'s recorded icon-count checkpoint
  (216) — a future run comparing against that checkpoint would still catch
  a silent partial change, just not automatically.
- `RISK-2` (`ASM-1`) — "Legacy console icons" is Google's own label; it may
  signal eventual deprecation/removal, not necessarily permanence. If
  Google removes it entirely in the future, this package breaks again in
  the same way it just did — this run cannot mitigate a future removal,
  only ensure the *next* break is loud (`DEC-2`) instead of silent.
- No risk identified around `IMP-2` (`doc/howto.upgrade-gcp-package.md`)
  causing concurrent-run conflicts — it is GCP-specific documentation no
  sibling wave-batch run (`W-3`, `W-4`, `W-5`, `W-7`) has reason to touch.

# Open Questions

- `Q-1` — **Resolved during this run's own verification (Stage 10/11), not
  left open.** Is the legacy zip's SVG *content* byte-identical to whatever
  the pre-2026 `google-cloud-icons.zip` served? A full isolated
  `generate:package -- -p gcp` render (`IMP-3`) was diffed file-by-file
  against the checked-in `distribution/gcp/`: of 216 icons (2710 files
  total), exactly **one** — `PrivateConnectivity` — has genuinely different
  embedded sprite data (`Item/PrivateConnectivity.puml`, and the two
  aggregate files `full.puml`/`single.puml` that embed every sprite); its
  rendered PNG also differs (1240→1246 bytes). No other `.puml`/`.md` text
  file differs at all. The remaining 215 icons' deterministic sprite
  encodings are byte-identical, which is a direct, not inferred, content
  match (the old `google-cloud-icons.zip` itself is still unreachable, but
  the Feb-2025 `package_builder` CI build — the closest available stand-in
  for "pre-restructure content", per the Current State correction above —
  is directly diffable and was diffed). The many PNG-only differences seen
  elsewhere in the diff (679 files) are confirmed render-environment noise,
  not content drift: a control check on an *unrelated*, unchanged-source
  file (`Group/GroupAccount.Local.png`, generated purely from
  `groups.csv`, which this run never touched) still rendered at a
  different pixel width (244px vs 234px) between the checked-in version
  and a fresh render from identical source — meaning the
  `plantuml-generator:1` image's rendering is not perfectly reproducible
  run-to-run (likely font/Graphviz layout non-determinism), so a PNG diff
  alone is not reliable evidence of a real source change. This run applied
  only the 7 files with a genuine, source-confirmed difference
  (`PrivateConnectivity`'s `.puml`/`.png` variants and the two aggregate
  `.puml` files) to the real `distribution/gcp/`, and deliberately did not
  overwrite the other 672 PNG-only "differences" to avoid a misleading,
  noise-driven diff across files whose actual source is unchanged.

# Deferred Work

- `DEF-1` — Add response validation (`Content-Type` check and/or zip magic
  bytes `PK\x03\x04`) to `source/generator/workdir/archive.ts`'s
  `download()`, so every package (not just GCP) fails loudly instead of
  silently on a dead/redirected fetch URL. Out of this run's scope per
  `DEC-2`'s reasoning (shared infrastructure, concurrent wave-batch risk).
  Not filed to `docs/bkg/todo/` — no such register exists in this
  repository (`CON-4`); recorded here and in this run's prg instead.
- `DEF-2` — Evaluate whether `category-icons.zip`/`core-products-icons.zip`
  (Google's new, simplified icon system) are worth adding as a *new*,
  separate module or package alongside the existing 216-icon set, rather
  than a replacement for it. Out of this run's scope (content redesign,
  not a refresh) — a genuine future product decision, not a technical one
  this TDD can settle. Not filed to `docs/bkg/todo/` for the same reason
  as `DEF-1`.

# File Placement and Frontmatter

Saved at
`docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/tdd-0006-gcp-icons-refresh.md`,
matching this wave's established run-directory convention (see sibling
runs `run-0001-npm-dependency-upgrade`, `run-0002-ci-cd-minute-optimization`).
Frontmatter keys: `title`, `status`, `owner`, `date`, `related`, `run:
0006`, `wave: 001`, `type: tdd` — matching the sibling runs' shape exactly.
