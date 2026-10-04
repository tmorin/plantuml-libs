---
type: wbc
wave: 001
status: completed
date: 2026-10-04
related: []
---

# Wave 001 — Dependency, Icon Package & CI/CD Refresh — Business Case

## Context

The project pins an exact upstream version or snapshot date for each icon/shape
package: AWS (`FOLDER_DATE = "07312025"`), Azure (`ICONS_VERSION = "23"`), Font
Awesome (`"7.2.0"`), Material (`"4.0.0"`), Simple Icons (`"16.9.0"`), and EIP
(`"1.2"`). GCP has no version pin at all — it always fetches
`google-cloud-icons.zip` as-is from Google.

A freshness check against upstream on 2026-10-04 found:

- **Azure**: `Azure_Public_Service_Icons_V24.zip` already resolves (HTTP 200)
  against the pinned V23 — a newer release exists.
- **Font Awesome**: latest GitHub release is `7.3.1`, pinned is `7.2.0`.
- **Simple Icons**: latest npm version is `16.34.0`, pinned is `16.9.0`.
- **AWS**: pinned snapshot is over a year old (2025-07-31) and AWS refreshes
  this asset package on a roughly quarterly cadence; upstream page is
  JS-rendered so this wave could not confirm the exact current filename, but
  staleness is likely.
- **GCP**: the package's content was last substantively touched in 2023; the
  unpinned URL means drift happens silently.
- **EIP** (`1.2`) and **Material** (`4.0.0`): confirmed current — both match
  their latest upstream tag/release exactly. No action needed.

Separately, `npm outdated` reports 17 packages behind their latest version,
including four majors: `@types/node` (25→26), `csv-parse` (6→7), `mocha`
(11→12), and `typescript` (6→7).

On the CI/CD side, `.github/workflows/continuous-integration.yaml` triggers on
`on: [push, pull_request]` with no branch filter and no `concurrency` group.
For any commit pushed to a branch with an open pull request, this means the
full `Build` job (checkout, install, lint, test, zip, upload) runs twice for
the identical commit — once for the `push` event, once for the
`pull_request: synchronize` event — and a superseded run from a rapid
follow-up push is never cancelled. Both are pure, recurring CI-minute cost.

No `docs/bkg` or `docs/ana` register exists yet in this repository, so this
wave's goal is sourced directly from the user's request rather than from a
tracked backlog item or analysis.

## Problems / Opportunities

- Pinned upstream versions drift silently: consumers of this library get
  icons/shapes that are a year or more stale (AWS, GCP) or missing recent
  upstream additions (Azure, Font Awesome, Simple Icons), with no signal
  that a refresh is due until someone checks by hand, as this wave just did.
- `npm outdated` carrying 17 packages, including 4 majors, is accumulating
  dependency risk and widening the gap each one will eventually need to
  cross.
- CI currently spends minutes re-running the identical `Build` job twice per
  commit on every open pull request, and never cancels a run a newer push
  has already made obsolete — a recurring cost on every single commit, not
  a one-time fix.

## Options & Recommendation

**Option A (recommended):** One run per confirmed-or-likely-stale upstream
source — npm dependencies, AWS, Azure, Font Awesome, GCP, Simple Icons — plus
one dedicated run for CI trigger/concurrency optimization. Sequence the npm
dependency upgrade ahead of the five icon-package runs, since several
packages share `csv-parse`-based discovery code
(`source/generator/workdir/discovery.ts`); the CI run proceeds fully in
parallel since it only touches `.github/workflows/**`.

**Option B:** One single run that upgrades every dependency/package and
rewrites the CI workflows together. Rejected — it bundles unrelated failure
domains (a `typescript` major bump breaking the build has nothing to do with
a workflow trigger fix) into one PR authored by one agent, and prevents the
five independent icon-package refreshes from running concurrently.

**Option C:** Skip the dedicated npm-dependency run and let each
icon-package run upgrade whatever devDependencies it happens to touch.
Rejected — `csv-parse` is shared infrastructure used by multiple packages
(`discovery.ts`, plus direct use in `aws`, `c4model`, `c4k8s`,
`domainstorytelling`, `eventstorming`); upgrading it piecemeal inside an
unrelated package run risks each one handling the same breaking-change
surface differently, or missing it.

## Vision

Every icon/shape package this project ships tracks the latest version its
own dedicated skill can detect (or explicitly records why not), `npm
outdated` reports nothing actionable, and the GitHub Actions pipeline runs
the smallest necessary set of jobs automatically on every push and every
pull request — no duplicate `Build` run for the same commit, and no CI
minutes spent on a run a newer push has already superseded.
