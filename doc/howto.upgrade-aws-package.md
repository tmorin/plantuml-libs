# How to upgrade the AWS package

This guide provides concrete, step-by-step instructions to upgrade the AWS package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

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

### 1. Discover the latest published AWS icons
- Run [resolve-aws-icons.mjs](../scripts/resolve-aws-icons.mjs) to get the latest AWS icons version and URL.

### 2. Create a new branch
**Primary (MCP)**: Use `github-mcp-server-create_branch` to create the branch
```
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-aws-<new-version>", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-aws-<new-version>
```

### 3. Update package sources and references
- Locate the AWS package source: `source/library/packages/aws-<old>` (e.g., `aws-q1-2024`).
- Rename the existing AWS package folder to the new versioned folder (e.g., `aws-<old>` → `aws-<new>`).
- Update all references in the renamed folder from the old version to the new version (folder names, file names, and inside files).
- **Important**: If there are nested folders with the old version name (e.g., `aws-<new>/aws-<old>`), flatten the structure.
- Rename and update templates in `source/library/templates`: `source/templates/aws-<old>` → `source/templates/aws-<new>`.
- Perform a global search and replace for all occurrences of `aws-<old-version>` to `aws-<new-version>` in:
  - All files and subfolders under `./doc`
  - All files and subfolders under `./source` (including library index)
  - All files and subfolders under `./test`
  - The file `./README.md`
- **Critical**: Update the factory class name (e.g., `AwsQ12024Factory` → `AwsQ32025Factory`) and the corresponding import in `source/library/index.ts`.
- In the new package's `index.ts`, ensure `FOLDER_DATE` and `ICONS_URL` constants are accurate.

### 4. Generate the work directory
```bash
npm run generate:workdir -- -p aws-<new-version>
```
- Check `.workdir/library.yaml` and ensure the new AWS package appears with correct modules and examples.
- Inspect `.workdir/.cache/aws-<new-version>` to ensure all expected elements are present.

### 5. Commit and push the branch
**Primary (MCP)**: Use `github-mcp-server-push_files` to commit changes
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-aws-<new-version>", 
  files=[...], message="feat(aws): upgrade to <new-version> icons\n\nBREAKING CHANGE: aws-<old-version> is replaced by aws-<new-version>\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(aws): upgrade to <new-version> icons

BREAKING CHANGE: aws-<old-version> is replaced by aws-<new-version>"
git push --set-upstream origin feat/upgrade-aws-<new-version>
```

### 6. Trigger the Package Builder pipeline
**Primary (MCP)**: Use GitHub CLI wrapped by agent to trigger workflow
```bash
gh workflow run package-builder.yaml -f pkgName=aws-<new-version> -f pkgVersion=<new-version> --ref feat/upgrade-aws-<new-version>
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams and examples
3. Push generated distribution files back to the branch

Processing can take several minutes.

### 7. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- If the pipeline fails or does not produce the expected outcome, fix the issues locally and use `git push --force` to update the branch.

### 8. Pull the branch locally
**Primary (MCP)**: Use `github-mcp-server-get_commit` or similar to verify changes

**Fallback (CLI)**:
```bash
git pull origin feat/upgrade-aws-<new-version>
```
If the pull fails due to conflicts, perform a rebase and resolve conflicts.

### 9. Verify rendered outputs
- Inspect the generated files in `distribution/aws-<new-version>`.
- Open the images and PlantUML files to verify correct rendering.
- Ensure samples have been properly rendered.

### 10. Update README
- Update `distribution/aws-<new-version>/README.md` to reflect new icons, modules, and examples.

### 11. Create a pull request
**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(aws): upgrade to <new-version>", 
  head="feat/upgrade-aws-<new-version>", 
  base="master",
  body="...")
```

**Fallback (CLI)**:
```bash
gh pr create --title "feat(aws): upgrade to <new-version>" --base master
```

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Common Troubleshooting Patterns
- **Template-related failures are the most common** pipeline issues (missing files, broken references, or incorrect version strings).
- **Factory class updates** are critical when upgrading to new versions - the class name, imports, and exports must all be synchronized.
- **Search and replace operations** across the codebase are error-prone; use your editor's refactoring tools when possible.

### Pipeline Lifecycle
- The pipeline may create commits for generated distribution files. This is expected behavior when there are changes.
- Pipeline failures can be legitimate (errors to fix) or expected (e.g., no changes available).
- Always review pipeline logs carefully to distinguish between actionable errors and expected outcomes.

### Cross-Package Lessons
- For comparison on handling packages without versioning (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).
- That guide documents handling cases where pipeline fails due to "nothing to commit" - a scenario indicating the package is already up-to-date.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates.
- **Solution**: Ensure `source/templates/aws-<new-version>/examples/` folder exists with all required `.tera` files, and that all references inside these files have been updated to use the new version string.

### Nested folder structure after renaming
- **Cause**: Package folder structure has nested folders with the old version name.
- **Solution**: Flatten the structure by moving all files from the nested folder to the parent and removing the empty nested directory.

### TypeScript compilation errors
- **Cause**: Factory class name or imports not updated correctly.
- **Solution**: 
  - Verify the factory class name matches the pattern (e.g., `AwsQ32025Factory`)
  - Update `source/library/index.ts` with the correct import and factory instantiation

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
