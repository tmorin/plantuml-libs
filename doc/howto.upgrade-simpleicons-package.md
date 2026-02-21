# How to upgrade the Simple Icons package

This guide provides concrete, step-by-step instructions to upgrade the Simple Icons package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

## Prerequisites & Tool Selection

This guide assumes an AI agent has access to:
- **Primary**: GitHub MCP server (via `github-mcp-server-*` tools) - **Use this when available**
- **Fallback**: GitHub CLI `gh` command (when MCP is unavailable)
- **Required**: [Node.js 22+](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Check the Simple Icons source
- Visit [Simple Icons Releases](https://github.com/simple-icons/simple-icons/releases) to check for the latest release.
- The Simple Icons package fetches from GitHub releases: `https://github.com/simple-icons/simple-icons/archive/{VERSION}.zip`
- Note the latest version number (e.g., `8.16.0`).

### 2. Create a new branch
**Primary (MCP)**: Use `github-mcp-server-create_branch`
```
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-simpleicons-<new-version>", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-simpleicons-<new-version>
```

### 3. Update the Simple Icons package
- Open `source/library/packages/simpleicons/index.ts`.
- Update the `ICONS_VERSION` constant to the new version.
- The `ICONS_URL` will automatically use the new version from the constant.
- No other changes to factory logic typically needed unless the icon directory structure has changed.
- Review `source/templates/simpleicons/bootstrap.tera` to ensure compatibility with current Simple Icons.
- Note: Simple Icons package does **not** use example templates, so there is no `examples/` directory for this package.

### 4. Generate the work directory
```bash
npm run generate:workdir -- -p simpleicons
```
- Check `.workdir/library.yaml` and ensure the Simple Icons package appears with correct modules and items.
- Inspect `.workdir/.cache/simpleicons` to ensure all expected icons are present.
- Verify the number of items in the modules against the previous version.

### 5. Commit and push the branch
**Primary (MCP)**: Use `github-mcp-server-push_files`
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-simpleicons-<new-version>", 
  files=[...], message="feat(simpleicons): upgrade to <new-version> icons\n\nUpdated Simple Icons package with latest icons from the official repository.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(simpleicons): upgrade to <new-version> icons

Updated Simple Icons package with latest icons from the official repository."
git push --set-upstream origin feat/upgrade-simpleicons-<new-version>
```

### 6. Trigger the Package Builder pipeline
```bash
gh workflow run package-builder.yaml -f pkgName=simpleicons -f pkgVersion=<new-version> --ref feat/upgrade-simpleicons-<new-version>
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams and examples
3. Push generated distribution files back to the branch

Processing can take several minutes.

### 7. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- If the pipeline fails, fix issues locally and use `git push --force` to update the branch.

### 8. Pull the branch locally
**Primary (MCP)**: Verify changes via `github-mcp-server-get_commit`

**Fallback (CLI)**:
```bash
git pull origin feat/upgrade-simpleicons-<new-version>
```
If the pull fails due to conflicts, perform a rebase and resolve conflicts.

### 9. Verify rendered outputs
- Inspect the generated files in `distribution/simpleicons`.
- Open the images and PlantUML files to verify correct rendering.

### 10. Update README
- Update `distribution/simpleicons/README.md` to reflect any changes to the icon library.

### 11. Create a pull request
**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(simpleicons): upgrade to <new-version>", 
  head="feat/upgrade-simpleicons-<new-version>", 
  base="master",
  body="...")
```

**Fallback (CLI)**:
```bash
gh pr create --title "feat(simpleicons): upgrade to <new-version>" --base master
```

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Simple Icons Specifics
- Unlike versioned packages like AWS, the Simple Icons package does not require renaming or class changes.
- Only the version constant needs updating - the factory class name (`SimpleiconsFactory`) and URLs remain stable.
- The package organizes icons by their first character (e.g., `simpleicons/a`, `simpleicons/b`), which is handled automatically by the factory.

### Common Troubleshooting Patterns
- **Template-related failures** are common pipeline issues for some packages (missing files, broken references), but **do not apply to Simple Icons** as it does not use example templates.
- **URL validation**: Ensure the GitHub release archive exists before running the pipeline.
- **Icon count changes**: Small variations in icon count between versions are normal as Simple Icons adds/updates icons regularly.

### Pipeline Lifecycle
- The pipeline may create commits for generated distribution files. This is expected behavior when there are changes.
- Pipeline failures can be legitimate (errors to fix) or expected (e.g., no changes available).
- Always review pipeline logs carefully to distinguish between actionable errors and expected outcomes.

### Cross-Package Lessons
- For comparison on versioned packages (like AWS), see [howto.upgrade-aws-package.md](./howto.upgrade-aws-package.md).
- For comparison on non-versioned packages with custom structures (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: For the Simple Icons package, this error is usually **not** caused by example templates, because the factory returns `examples: []` and no example templates are used. The error may instead come from another package in the pipeline, or from invalid PlantUML generated for Simple Icons.
- **Solution**: First, inspect the pipeline logs to confirm which package is failing. If another package is failing, refer to that package's upgrade guide and its template directory. If the failure is within Simple Icons, look for issues such as invalid PlantUML syntax, corrupted or missing sprite files, or mismatches between generated resources and the manifest.

### Icon discovery fails or icon count is zero
- **Cause**: The GitHub release structure may have changed, or the archive URL is invalid.
- **Solution**: 
  - Verify the release exists on GitHub
  - Check that `ICONS_VERSION` is correctly set
  - Verify the glob pattern in the factory matches the archive structure

### TypeScript compilation errors
- **Cause**: Factory file syntax or imports are broken.
- **Solution**: 
  - Ensure the factory file `source/library/packages/simpleicons/index.ts` has valid TypeScript syntax
  - Verify all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
