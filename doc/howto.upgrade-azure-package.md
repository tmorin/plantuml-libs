# How to upgrade the Azure package

This guide provides concrete, step-by-step instructions to upgrade the Azure package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

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

### 1. Discover the latest published Azure icons
- Run [resolve-azure-icons.mjs](../scripts/resolve-azure-icons.mjs) to get the latest Azure icons version and URL.
- The script fetches the Microsoft Azure Icons page and extracts the latest version number and download URL.
- Compare the returned version with the current `ICONS_VERSION` in `source/library/packages/azure-{VERSION}/index.ts`.

### 2. Create a new branch
**Primary (MCP)**: Use `github-mcp-server-create_branch`
```
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-azure-<new-version>", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-azure-<new-version>
```

### 3. Create and update the Azure package folder
- Create a new folder: `source/library/packages/azure-{NEW_VERSION}` (e.g., `azure-21`).
- Copy contents from the previous version folder (e.g., `azure-20`) as a starting point.
- Update the `ICONS_VERSION` constant in the new folder's `index.ts` to match the new version.
- Update the factory class name from `AzureV{OLD_VERSION}Factory` to `AzureV{NEW_VERSION}Factory` (e.g., `AzureV20Factory` → `AzureV21Factory`).
- Review and update `source/library/packages/azure-{NEW_VERSION}/groups.csv` if needed (custom groupings and styling).
- Review and update templates in `source/templates/azure-{NEW_VERSION}/` if the icon structure has changed.
- **Important**: Ensure `source/templates/azure-{NEW_VERSION}/examples/` folder and its `.tera` files render correctly with new icons.
- Perform a global search and replace for all occurrences of `azure-{OLD_VERSION}` to `azure-{NEW_VERSION}` in:
  - All files under `./doc`
  - All files under `./source` (including library index)
  - All files under `./test`
  - The file `./README.md`

### 4. Generate the work directory
```bash
npm run generate:workdir -- -p azure-<new-version>
```
- Check `.workdir/library.yaml` and ensure the Azure package appears with correct modules and examples.
- Inspect `.workdir/.cache/azure-<new-version>` to verify all expected elements are present.
- Verify the number of items in the `azure-<new-version>/Item` module against the previous version.

### 5. Commit and push the branch
**Primary (MCP)**: Use `github-mcp-server-push_files`
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-azure-<new-version>", 
  files=[...], message="feat(azure): upgrade to <new-version> icons\n\nBREAKING CHANGE: azure-<old-version> is replaced by azure-<new-version>\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(azure): upgrade to <new-version> icons

BREAKING CHANGE: azure-<old-version> is replaced by azure-<new-version>"
git push --set-upstream origin feat/upgrade-azure-<new-version>
```

### 6. Trigger the Package Builder pipeline
```bash
gh workflow run package-builder.yaml -f pkgName=azure-<new-version> -f pkgVersion=<new-version> --ref feat/upgrade-azure-<new-version>
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams and examples
3. Push generated distribution files back to the branch

Processing can take several minutes.

### 7. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- Check the generated manifests and ensure the item count makes sense.
- If the pipeline fails, fix issues locally and use `git push --force` to update the branch.

### 8. Pull the branch locally
**Primary (MCP)**: Verify changes via `github-mcp-server-get_commit`

**Fallback (CLI)**:
```bash
git pull origin feat/upgrade-azure-<new-version>
```
If pull fails due to conflicts, perform a rebase and resolve conflicts.

### 9. Verify rendered outputs
- Inspect generated files in `distribution/azure-<new-version>`.
- Open images and PlantUML files to verify rendering.
- Verify all items in `distribution/azure-<new-version>/Item/` render correctly.
- Check all groups in `distribution/azure-<new-version>/Group/` are properly styled.

### 10. Update README
- Update `distribution/azure-<new-version>/README.md` to reflect new icons, modules, and examples.

### 11. Create a pull request
**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(azure): upgrade to <new-version>", 
  head="feat/upgrade-azure-<new-version>", 
  base="master",
  body="...")
```

**Fallback (CLI)**:
```bash
gh pr create --title "feat(azure): upgrade to <new-version>" --base master
```

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Azure-Specific: Versioned Icon Updates
- Azure uses a **versioned URL pattern** for icons: `Azure_Public_Service_Icons_V{VERSION}.zip`
- Each new version requires creating a new package folder (e.g., `azure-20`, `azure-21`) with a corresponding factory class.
- The factory class name must match the pattern `AzureV{VERSION}Factory` (e.g., `AzureV20Factory`, `AzureV21Factory`).
- This versioning approach is similar to AWS packages and allows maintaining multiple icon versions simultaneously.

### Key Insights
- Check the [Microsoft Azure Icons page](https://learn.microsoft.com/en-us/azure/architecture/icons/) for version updates - the download link indicates the latest version number.
- If the pipeline fails due to "nothing to commit", the package is successfully up-to-date; no further action is required.
- The upgrade workflow is designed to safely handle both scenarios: new icons available and no changes since last upgrade.

### Cross-Package Lessons
- For comparison on versioned package upgrades (like AWS), see [howto.upgrade-aws-package.md](./howto.upgrade-aws-package.md).
- For comparison on unversioned package upgrades (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).
- All three guides share common troubleshooting patterns for template errors, factory class updates, and pipeline lifecycle management.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates, or invalid icon paths in templates.
- **Solution**: 
  - Ensure `source/templates/azure-<new-version>/examples/` folder exists with all required `.tera` files
  - Verify all icon references in templates match the discovered icon paths
  - Check that the glob pattern in the factory correctly discovers all SVG files

### Icon count is significantly different
- **Cause**: Microsoft has changed the icon structure, added/removed categories, or the glob pattern is not matching correctly.
- **Solution**:
  - Manually verify the icons archive contents: extract it and check the directory structure
  - Update the glob pattern in `discover()` method if the structure has changed
  - Verify the icon path parsing in `getItemUrn()` matches the new structure

### TypeScript compilation errors
- **Cause**: Changes to the factory class or interface not properly updated.
- **Solution**: 
  - Verify the `AzureV{VERSION}Factory` class still implements the `PackageFactory` interface
  - Update `source/library/index.ts` with the correct import and factory instantiation
  - Ensure all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
