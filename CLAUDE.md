# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

`@tmorin/plantuml-libs` — generates PlantUML sprite/icon libraries (AWS, Azure, C4, EIP, Font Awesome, GCP, Material, Simple Icons, etc.) and their documentation website. Node.js CLI entry point: `bin/gdiag.js`.

## Stack

- TypeScript, run via `ts-node`, `moduleResolution: Node`. Source uses ESM `import` syntax but the package has no `"type": "module"` and `bin/gdiag.js` uses `require()` — this is CommonJS, not ESM, despite the import syntax.
- Node.js >=24 <25 (see `engines` in package.json)
- Mocha + `assert.strict` for tests
- ESLint flat config (`eslint.config.mjs`) + Prettier (no semicolons, double quotes)

Check `package.json` for exact dependency versions rather than assuming.

## Architecture: Library vs Generator

- `source/library/` — one factory per technology package (`source/library/packages/{name}/index.ts`), each producing raw PlantUML sprite/icon resources. Packages are independent but follow shared patterns.
- `source/generator/workdir/` — orchestrates all library packages into a single `.workdir/library.yaml` manifest plus supporting assets. Run: `npm run generate:workdir`
- `source/generator/website/` — ETL pipeline (Extract → Transform → Load) that turns `.workdir/library.yaml` into the documentation site and `distribution/` output. Each stage implements the generic `Stage<I, O>` interface (`source/generator/website/stage.ts`).
- Full build: `scripts/generate-library.sh` chains workdir → website → distribution/. Requires Podman/Docker and the `plantuml-generator` image (`docker.io/thibaultmorin/plantuml-generator:1`).
- Single-package build: `scripts/generate-package.sh <package>` (invoked via `npm run generate:package -- <package>` — bare name, no `-p`; the script prepends `-p` itself when it calls `generate:workdir` internally) regenerates the workdir then builds just that one package through Podman.
- Don't rebuild a large icon/shape package (`aws`, `azure`, `fontawesome`, `gcp`, `simpleicons`) just to sanity-check the pipeline — their full Podman render can run for tens of minutes to multiple hours and saturates the host's CPU, especially if more than one runs concurrently. `npm run generate:workdir -- -p <package>` (TypeScript-only, no Podman) is enough to verify discovery/counts for a content change. If you genuinely need to confirm the full Podman + `plantuml-generator` render still works end to end, build `eip` instead (`npm run generate:package -- eip`) — it's small and fast, and exercises the same pipeline.
- Regenerating `distribution/` for a package is done on GitHub, never locally: dispatch the `package-builder.yaml` Action (`gh workflow run package-builder.yaml --ref <branch> -f pkgName=<package>`). Its last job commits and pushes `distribution/` to that ref, so dispatch once at a time per ref.

## Code Conventions

- Classes: private constructor + static factory, e.g. `static create(...): X`
- Import aliases for common modules: `import P from "path"`, `import Fe from "fs-extra"`, `import U from "util"`
- Import order: stdlib → external packages → local modules, no blank lines between groups
- `readonly` for immutable class properties; interfaces declared inline near their implementation
- async/await throughout, no callbacks or `.then()` chains

## Testing

- Files: `test/*.spec.js` / `test/*.spec.mjs`, run with `npm test`
- Run one file: `npm test -- test/gdiag.spec.js`
- Run by pattern: `npm test -- --grep "gdiag"`
- Test functions must be `async function` (not arrows) to access `this.timeout(...)`
- AWS/Azure spec files make real network requests — expect them to be slow
- Clean temp state in `beforeEach()`; use `.tmp/` for scratch output

## Commands

```bash
npm run generate:workdir            # library packages -> .workdir/library.yaml
npm run generate:workdir -- -p <package> -w <scratch dir>   # pass -w: the default .workdir/library.yaml is shared and rewritten by every run
npm run generate:website            # runs the website ETL stages
npm run generate:package -- aws     # regenerate + build a single package (needs Podman)
scripts/generate-library.sh         # full build: workdir -> website -> distribution/ (needs Podman/Docker)
npm test                            # mocha
npm run lint                        # eslint . (bin/**, test/**, .workdir/**, distribution/**, docs/** ignored)
```

## Versioning & Commits

- Semantic Versioning via `standard-version` (`npm run release`)
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): description` — common types `feat`, `fix`, `refactor`, `chore`, `docs`, `test`
- Pre-releases: `npm run alpha` (`--prerelease alpha`)
- Release: `npm run release` bumps the version, writes `CHANGELOG.md` and creates the tag; then `git push --follow-tags origin master` (or `npm run release:publish`). Pushing the tag makes CI create the GitHub release and run `npm publish`: it cannot be undone, so confirm first.
- `CHANGELOG.md` only lists commits whose subject is `feat(...)` or `fix(...)`; a commit that is not a Conventional Commit is silently left out.

## Waves and runs

Multi-run work lives in `docs/wav/wav-NNN-slug/` (business case, plan, progress log, `run/`), driven by the `run-management` plugin. `.claude/run-management.yaml` sets how runs commit. A run's commit subject is the `Commit subject:` line of its run document: write it as a Conventional Commit (`feat(scope): ...`, `fix(scope): ...`) so the run shows in the changelog; the default `run NNNN slug (wave ...)` subject does not.

## Package Upgrades

Upgrading an icon/shape package (AWS, Azure, EIP, Font Awesome, GCP, Material, Simple Icons) or npm dependencies has a dedicated skill under `.claude/skills/` for each package (e.g. `aws-package-upgrading`, `npm-dependency-management`) — use those rather than improvising the process.

## When in Doubt

Match existing patterns in the surrounding file over generic best practices — this codebase has consistent, if unconventional, house style (no semicolons, aliased imports, factory-pattern classes).
