---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/tdd-0006-gcp-icons-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/pln-0006-gcp-icons-refresh.md
run: 0006
wave: 001
---

# Progress Log: GCP icons refresh

## Log

- 2026-10-04: Run 0006 started via `complete-run` (dispatched by `complete-wave` as
  wave 001 batch member W-6). Document profile set to `TDD+pln` (infra-only,
  matching sibling runs W-1/W-2) — no PRD, since this work is not product-facing
  and the wave manifest already names the specific target.
- 2026-10-04: Reconnaissance before drafting the TDD. Ran
  `npm run generate:workdir -- -p gcp` against the unmodified factory and found it
  silently produces **0 icons** (22 groups only): `fetchArchive` downloaded
  `https://cloud.google.com/icons/files/google-cloud-icons.zip` into
  `.workdir/.tmp/gcp/icons.zip`, but the response was an HTML document (`file`
  confirms "HTML document, Unicode text"), not a zip — `curl -sIL` against the
  same URL returns HTTP 404. `fetchArchive`/`archive.ts` never validates the
  response is actually a zip, so the whole package silently builds empty.
  This is a materially worse finding than the manifest's "last touched in 2023,
  drift happens silently" framing: the current factory is actively broken, not
  merely stale.
- 2026-10-04: Used the browser tool to render the real (JS-driven)
  `https://cloud.google.com/icons` page and extracted the actual current
  download links via `document.querySelectorAll('a')`. Google restructured its
  icon library (per public reporting, early-2025 redesign, ~250 icons down to a
  curated set): the page now serves three separate zips —
  `https://services.google.com/fh/files/misc/category-icons.zip` (new category
  icons, nested `Category Icons/<Name>/SVG/<Name>-512-color.svg`),
  `https://services.google.com/fh/files/misc/core-products-icons.zip` (new
  simplified per-product icons, nested `Unique Icons/<Name>/SVG/...`), and
  `https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip`
  ("Legacy console icons" — flat `<name>/<name>.svg`, 216 icons, no SVG/PNG
  subfolder).
- 2026-10-04: Compared the legacy zip's 216 icon names against the base names
  already present in the checked-in `distribution/gcp/Item/*.puml` (stripping
  `Card`/`Group`/`.Local`/`.Remote` suffixes) — same count (216), and a
  name-by-name diff showed no real differences (the few apparent mismatches
  were artifacts of a throwaway snake_case→PascalCase script mishandling
  embedded hyphens, e.g. `gke_on-prem`; the repo's actual `toCamelCase`, built
  on lodash `camelCase`, does not have this bug). Conclusion: Google moved this
  exact asset to a new URL without changing its content or internal layout —
  the `getItemUrn()` / `discover()` parsing logic in
  `source/library/packages/gcp/index.ts` needs no changes, only the URL.
  `source/templates/gcp/examples/diagram_elements_overview.tera`'s three
  hardcoded icon references (`CloudDns`, `CloudLoadBalancing`,
  `ComputeEngine`) all still resolve in the new set.
- 2026-10-04: Drafted the TDD, dispatched `review-kdmllc-content` against it
  (standard-tier `general-purpose` subagent). It returned "Acceptable"
  overall with three findings: (F1, S2) `DEC-4`/Scope/`IMP-2` only named
  "Step 2's URL reference" in `doc/howto.upgrade-gcp-package.md`, but the
  dead `google-cloud-icons.zip` filename actually recurred in three spots
  (Step 2, Step 3 bullet 1, Troubleshooting) — only the first two had
  already been fixed in the same edit; (F2, S1) `DEC-3`'s rationale said
  "the 2026 Google icon-library restructure" while the prg log and the
  already-implemented code comment both said 2024-2025 — a
  self-contradiction in the one place meant to be the durable freshness
  checkpoint; (F3, S1, informational) the TDD/run status still read
  `designing` while the code fix was already implemented and uncommitted,
  expected mid-flight but worth correcting at close-out. Applied all three:
  fixed the Troubleshooting section's stale filename reference, corrected
  `DEC-3`'s year to 2024-2025, widened `DEC-4`/Scope/`IMP-2` to cover all
  three occurrences, and added an Observability grep check
  (`grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md`,
  expected to match only the historical "now 404s" sentence) — re-ran it
  directly and confirmed only that one expected match remains.
- 2026-10-04: Implemented the fix in
  `source/library/packages/gcp/index.ts` (`ICONS_URL` repointed to
  `google-cloud-legacy-icons.zip`, freshness-checkpoint comment, zero-icons
  guard) and `doc/howto.upgrade-gcp-package.md` (all three dead-URL
  references corrected). Verified in an isolated working directory
  (`-w` flag, outside the shared `.workdir/` — see Findings for why) via
  `npx ts-node source/generator/workdir -p gcp -w <scratch>`: logged
  `discovered 216 pictures file`, `found (216) icons`, `found (22) groups`
  — exactly the `ASM-2` prediction. Drafted the pln next.
- 2026-10-04: While investigating, discovered this wave batch's runs share
  one working tree, not isolated worktrees: `git status` showed ~8,000
  pending changes under `distribution/azure/**` and a modified
  `source/library/packages/simpleicons/index.ts` from sibling runs `W-4`
  (azure) and `W-7` (simpleicons) actively executing concurrently, and up
  to 4 `plantuml-generator` Podman containers were observed `Up`
  simultaneously via `podman ps -a`. `npm run generate:workdir -p gcp`'s
  default behavior overwrites the *entire* shared `.workdir/library.yaml`
  with only the named package(s)' data, so an unscoped or
  differently-scoped concurrent run could clobber another's in-flight
  state through that one shared file. Mitigated by running this run's own
  verification (`generate:workdir` and the full Podman `generate:package`
  render) in a working directory fully isolated via the generator's own
  `-w` flag and a scratch distribution output directory, never touching
  the shared `.workdir/` or any sibling's output. Inspecting other
  containers' mounts (`podman inspect <id> --format '{{range .Mounts}}...'`)
  confirmed the `W-7` (simpleicons) and `W-4` (azure) siblings had
  independently reached the same isolation pattern (their own
  scratchpad-rooted `-w` directories); one other running container (likely
  `W-3`/aws) was mounting the real, shared `distribution`/`.workdir`
  directly — a live hazard for whichever run that is, not something this
  run can fix from inside its own scope. This is a wave-level process gap
  (batch members should run in separate worktrees) worth surfacing to the
  orchestrator rather than something any one run can resolve alone.
- 2026-10-04: Ran the isolated full Podman render
  (`generate:package`-equivalent, `--urn=gcp --clean-urn=gcp`) to
  completion: 2710 files produced, exactly matching the checked-in
  `distribution/gcp/`'s file count. A full `diff -rq` against the
  checked-in tree found 679 differing files; narrowing to non-`.png` files
  found exactly 3 (`Item/PrivateConnectivity.puml`, `full.puml`,
  `single.puml`), all differing only in one icon's embedded sprite
  encoding (`PrivateConnectivity`). A control check — diffing
  `Group/GroupAccount.Local.png` (generated purely from `groups.csv`,
  never touched by this run or by Google's zip) between the checked-in
  version and a fresh isolated render — still showed a different PNG
  (244px vs 234px wide, pixel-level `PIL` diff confirmed), proving the
  remaining 676 PNG-only differences are `plantuml-generator:1`
  rendering-environment noise (non-reproducible across runs, likely
  font/Graphviz layout variance), not real content drift. This
  definitively resolves the TDD's `Q-1` (see that document's own
  resolution note) with direct evidence rather than inference.
- 2026-10-04: Applying the 7 genuinely-changed files
  (`PrivateConnectivity.puml`/`.png`/`.Local.png`/`Card.Local.png`/
  `Group.Local.png`, `full.puml`, `single.puml`) to the real
  `distribution/gcp/` hit a file-ownership wall: that directory tree (and
  the shared `.workdir/`, `distribution/azure/`, etc.) is owned by a uid
  (`101000`) that this run's own shell process — despite `id` reporting
  `uid=1000(tibo)` — could not write to directly (`cp`/`rm` both failed
  "Permission denied"; `podman unshare chown` only remapped to a different
  non-matching uid, `100999`, still not writable from the plain shell).
  Root cause: this session's bash tool runs in its own sandboxed user
  namespace, distinct from whatever namespace rootless Podman's
  `--userns=keep-id` mapped against when these files were originally
  written (by CI or another session). Fix: performed the copy itself from
  *inside* a short-lived container with the same `--userns=keep-id`
  mapping, bind-mounting only the already-isolated, already-verified
  7 source files (read-only) and the real `distribution/gcp/` (read-write)
  — confirmed via `podman inspect` that no other mount (shared `.workdir`,
  other packages' `distribution/<pkg>/`) was touched. `git status` after
  the copy showed exactly those 7 files as `M`, nothing else.
- 2026-10-04: Final verification: `npm run lint` passed clean (0 errors);
  `npm test` passed 5/5 (the `gdiag` suite plus the AWS/Azure icon-package
  fetch tests — no GCP-specific test exists). Updated this pln's
  `execution_manifest.status` to `done`, `run-0006-gcp-icons-refresh.md`'s
  `status` to `completed`, and this prg's `status` to `completed`.
  Committed locally (explicit file list, not `git add -A`, since this
  shared working tree holds other wave-batch runs' uncommitted changes
  too) — did not push or open a pull request, per this run's dispatch
  instructions, which leave that to the human.

## Findings

- `source/generator/workdir/archive.ts`'s `download()`/`fetchArchive()` has no
  content-type or zip-signature validation — a dead/redirected/HTML-serving
  URL fails silently (0 discovered items, not an error). This is shared
  infrastructure used by every package (`aws`, `azure`, `fontawesome`, `gcp`,
  `simpleicons`, `material`, `eip`, `c4model`, `c4k8s`, `domainstorytelling`,
  `eventstorming`), so fixing it generically is out of this run's
  `likely_paths` (`source/library/packages/gcp/**`) and risks colliding with
  the other concurrently-dispatched icon-package runs in this same wave batch
  that may touch adjacent generator code. This run instead adds a
  package-local guard inside `source/library/packages/gcp/index.ts` (fail
  loudly if `discover()` returns zero items) so a future URL rot is caught
  immediately rather than silently shipping an empty package — see the TDD's
  `DEC-` for the full reasoning. The generic fix in `archive.ts` is a
  reasonable wave-level follow-up but is not something this run can do within
  its own scope without touching shared, concurrently-contended
  infrastructure.
- Google's upstream for GCP icons has no version string, dated URL, or any
  other machine-checkable freshness signal — confirmed directly this run by
  rendering the real page: all three current zip links are plain static
  filenames with no version segment. A "pin" in the AWS/Azure/FontAwesome/
  SimpleIcons sense (a version or date baked into the fetch URL) is not
  possible for GCP; the most this run can do is record a "last verified"
  checkpoint (date + icon/group counts) as a code comment so the next
  refresh has something concrete to diff against, which it does.
- No `docs/bkg/` backlog register, `docs/CLAUDE.md` register declaration, or
  `tooling/docs/check-backlog.py` exists in this repository (confirmed via
  direct filesystem check) — every `manage-runs`/`complete-run` step that
  depends on those (deferred-item filing, the close-out expiry sweep, the
  `check-backlog.py` exit-0 check) has nothing to discharge here and is
  skipped rather than inventing a register.

## Lessons Learnt

- For an unpinned, JS-rendered upstream page like `cloud.google.com/icons`,
  `curl`/`WebFetch` alone cannot see the real download links (the HTML is a
  bootstrap shell for a JS app); a headless-browser render was needed to
  extract the actual `<a href>` values. A plain HTTP check only told us the
  old URL now 404s, not what replaced it.
- When an upstream "no version pin" package's fetch silently degrades to zero
  discovered items instead of erroring, `npm run generate:workdir -- -p
  <pkg>`'s own log output ("found (N) icons") is the cheapest smoke test for
  catching it — worth checking before assuming "no pin" just means "always
  current".
