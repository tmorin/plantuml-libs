# How to upgrade the GCP package

This guide provides concrete, step-by-step instructions to upgrade the GCP package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

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

### 1. Check the Google Cloud Icons source
- Visit [Google Cloud Icons](https://cloud.google.com/icons/) to check if new icons are available.
- The GCP package uses a fixed URL: `https://cloud.google.com/icons/files/google-cloud-icons.zip`
- Verify if Google has released a new version by downloading and comparing the archive.

### 2. Create a new branch
**Primary (MCP)**: Use `github-mcp-server-create_branch`
```
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-gcp-icons", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-gcp-icons
```

### 3. Update the GCP package and templates
- Review `source/library/packages/gcp/index.ts` to ensure the `ICONS_URL` is still correct.
- If Google has updated the URL or structure, update the URL constant.
- If the icon directory structure has changed, update the `discover()` method's glob pattern or the `getItemUrn()` method's path parsing logic.
- Review `source/library/packages/gcp/groups.csv` and check if any custom groups need to be added or modified.
- Review `source/templates/gcp/bootstrap.tera` to ensure compatibility with current GCP icons.
- Check `source/templates/gcp/examples/` for any example templates that reference outdated icons or concepts.
- **Important**: Ensure `source/templates/gcp/examples/` folder and its `.tera` files render correctly with new icons.

### 4. Generate the work directory
```bash
npm run generate:workdir -- -p gcp
```
- Check `.workdir/library.yaml` and ensure the GCP package appears with correct modules and examples.
- Inspect `.workdir/.cache/gcp` to ensure all expected elements are present.
- Verify the number of items in the `gcp/Item` module against the previous version (changes indicate new/updated icons).

### 5. Commit and push the branch
**Primary (MCP)**: Use `github-mcp-server-push_files`
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-gcp-icons", 
  files=[...], message="feat(gcp): update icons from Google Cloud Icons\n\nUpdated GCP package with latest available icons from Google Cloud's official icon library.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(gcp): update icons from Google Cloud Icons

Updated GCP package with latest available icons from Google Cloud's official icon library."
git push --set-upstream origin feat/upgrade-gcp-icons
```

### 6. Trigger the Package Builder pipeline
```bash
gh workflow run package-builder.yaml -f pkgName=gcp -f pkgVersion=latest --ref feat/upgrade-gcp-icons
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
git pull origin feat/upgrade-gcp-icons
```
If the pull fails due to conflicts, perform a rebase and resolve any conflicts.

### 9. Verify rendered outputs
- Inspect the generated files in `distribution/gcp`.
- Open the images and PlantUML files to verify correct rendering.
- Verify that all items in `distribution/gcp/Item/` render correctly.
- Check that all groups in `distribution/gcp/Group/` are properly styled.

### 10. Update README
- Update `distribution/gcp/README.md` to reflect any changes:
  - Update the item count in the modules section if the number of items has changed
  - Update the examples list if new examples have been added
  - Add any notes about breaking changes or new features

### 11. Create a pull request
**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(gcp): update icons", 
  head="feat/upgrade-gcp-icons", 
  base="master",
  body="...")
```

**Fallback (CLI)**:
```bash
gh pr create --title "feat(gcp): update icons" --base master
```

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### GCP-Specific: Handling No-Change Scenarios
- **Pipeline fails with "nothing to commit, working tree clean"** - This is **normal and expected** behavior when Google has not released new icons since the last upgrade.
- The Package Builder pipeline will fail at the commit step if there are no changes to the distribution files.
- This indicates the GCP package is already up-to-date with the latest available icons from Google Cloud.
- Simply triggering the upgrade process and observing this failure confirms that no new icons need to be integrated.

### Key Insights
- The GCP package does not use versioning (unlike AWS packages). It always fetches the latest icons from Google's official source.
- If the pipeline fails due to "nothing to commit", the package is successfully up-to-date; no further action is required.
- The upgrade workflow is designed to safely handle both scenarios: new icons available and no changes since last upgrade.

### Cross-Package Lessons
- For comparison on versioned package upgrades (like AWS), see [howto.upgrade-aws-package.md](./howto.upgrade-aws-package.md).
- Both AWS and GCP guides share common troubleshooting patterns for template errors, factory class updates, and pipeline lifecycle management.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates, or invalid icon paths in templates.
- **Solution**: 
  - Ensure `source/templates/gcp/examples/` folder exists with all required `.tera` files
  - Verify all icon references in templates match the discovered icon paths
  - Check that the glob pattern in the factory correctly discovers all SVG files

### Icon count is significantly different
- **Cause**: Google has changed the icon structure, added/removed categories, or the glob pattern is not matching correctly.
- **Solution**:
  - Manually verify the icons.zip contents: extract it and check the directory structure
  - Update the glob pattern in `discover()` method if the structure has changed
  - Verify the icon path parsing in `getItemUrn()` matches the new structure

### TypeScript compilation errors
- **Cause**: Changes to the factory class or interface not properly updated.
- **Solution**: 
  - Verify the `GcpFactory` class still implements the `PackageFactory` interface
  - Update `source/library/index.ts` if you renamed the factory class
  - Ensure all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
