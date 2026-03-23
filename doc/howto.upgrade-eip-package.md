# How to upgrade the EIP package

This guide provides concrete, step-by-step instructions to upgrade the Enterprise Integration Pattern (EIP) package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

## Prerequisites & Tool Selection

This guide assumes an AI agent has access to:
- **Primary**: GitHub MCP server (via `github-mcp-server-*` tools) - **Use this when available**
- **Fallback**: GitHub CLI `gh` command (when MCP is unavailable)
- **Required**: [Node.js 22+](https://nodejs.org/) is installed

## Notes

Do not modify these directories directly—they are generated:
- `./.workdir`
- `./distribution`
- `./public`

## Steps

### 1. Create a feature branch

**Primary (MCP)**: Use `github-mcp-server-create_branch` to create the branch
```
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-eip-icons", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-eip-icons
```

### 2. Check for new EIP releases

Enterprise Integration Pattern shapes are published on [GitHub Releases](https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/releases). Check if a new release is available.

The package fetches from: `https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/archive/refs/tags/{VERSION}.zip`

Proceed to Step 3. If new shapes have been released, the workdir generation in Step 4 will detect the changes.

### 3. Update the EIP package source

Edit `source/library/packages/eip/index.ts`:

1. Update line 14 with the new version number from the GitHub release:
   ```typescript
   const iconsVersion = "<new-version>"
   ```

2. Line 15 automatically uses the new version:
   ```typescript
   const iconsUrl = `https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/archive/refs/tags/${iconsVersion}.zip`
   ```

3. If the icon directory structure has changed:
   - Update the `discover()` method's glob pattern if SVG paths have changed
   - Update the `getItemUrn()` method's path parsing if folder names differ

4. Review templates in `source/templates/eip/`:
   - `source/templates/eip/bootstrap.tera` - main template definitions
   - `source/templates/eip/documentation.tera` - documentation template
   - `source/templates/eip/examples/` - example templates used in documentation
   - Ensure all `.tera` files reference shape paths that match the new structure

### 4. Generate the work directory

Validate your changes by generating the work directory:

```bash
npm run generate:workdir -- -p eip
```

Check the output:
- `.workdir/library.yaml` should list the `eip` package with correct modules and examples
- `.workdir/.cache/eip` should contain all expected shape modules
- Verify the number of items against the previous version (changes indicate new/updated shapes)

### 5. Commit and push the branch

**Primary (MCP)**: Use `github-mcp-server-push_files` to commit changes
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-eip-icons", 
  files=[...], message="feat(eip): update shapes from Enterprise Integration Patterns\n\nUpdated EIP package with latest available shapes from the official repository.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(eip): update shapes from Enterprise Integration Patterns

Updated EIP package with latest available shapes from the official repository.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

git push -u origin feat/upgrade-eip-icons
```

### 6. Trigger the Package Builder pipeline

**Primary (MCP)**: Use `github-mcp-server-create_dispatch_event` or similar to trigger the workflow
```
create_dispatch_event(owner="tmorin", repo="plantuml-libs", event_type="package-builder", 
  client_payload={"pkgName": "eip", "pkgVersion": "latest", "branch": "feat/upgrade-eip-icons"})
```

Alternatively, use the MCP workflow trigger method (check your MCP server's available tools):
```
trigger_workflow(owner="tmorin", repo="plantuml-libs", workflow_id="package-builder.yaml",
  inputs={"pkgName": "eip", "pkgVersion": "latest"}, ref="feat/upgrade-eip-icons")
```

**Fallback (CLI)**:
```bash
gh workflow run package-builder.yaml \
  -f pkgName=eip \
  -f pkgVersion=latest \
  --ref feat/upgrade-eip-icons
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams and examples
3. Push generated distribution files back to the branch

Processing typically takes several minutes. Monitor the run at the GitHub Actions tab.

### 7. Pull the generated changes

Once the pipeline completes, pull the generated files:

**Primary (MCP)**: Use `github-mcp-server-get_commit` to verify changes and pull

**Fallback (CLI)**:
```bash
git pull origin feat/upgrade-eip-icons
```

### 8. Verify the outputs

Inspect the generated files:

```bash
ls -la distribution/eip/
```

Verify:
- `distribution/eip/Item/` - all shapes render correctly as PlantUML files
- `distribution/eip/Group/` - all groups are properly styled
- `distribution/eip/README.md` - auto-generated with updated shape counts

### 9. Create a pull request

**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(eip): update shapes", 
  head="feat/upgrade-eip-icons", 
  base="master",
  body="Updated EIP package with latest available shapes from the Enterprise Integration Patterns repository.")
```

**Fallback (CLI)**:
```bash
gh pr create \
  --title "feat(eip): update shapes" \
  --body "Updated EIP package with latest available shapes from the Enterprise Integration Patterns repository." \
  --base master
```

---

## Troubleshooting

### Pipeline fails with "unable to render" error

**Cause**: Template references outdated shape paths or incorrect structure.

**Solution**:
- Check `source/templates/eip/bootstrap.tera`, `source/templates/eip/documentation.tera`, and `source/templates/eip/examples/` for hardcoded shape references
- Verify all shape paths match the new repository archive structure
- Extract the shapes archive locally and inspect the directory structure to understand changes

### Icon discovery fails or shape count is zero

**Cause**: GitHub release structure changed, archive URL is invalid, or glob pattern doesn't match new structure.

**Solution**:
- Verify the release exists on [GitHub Releases](https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/releases)
- Check that `iconsVersion` (line 14) is correctly set
- Verify the glob pattern in the `discover()` method matches the new archive structure
- Extract the archive locally and inspect the directory layout if needed

### Shape count changes unexpectedly

**Cause**: EIP shapes repository changes, or the shape structure has been reorganized.

**Solution**:
- Verify changes on the [EIP Shapes GitHub repository](https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy)
- Check `.workdir/library.yaml` to see which modules changed
- This may be normal if the repository maintainer has released new shapes

### Pipeline creates a commit but you want to override it

If you need to force-push your changes:

```bash
git push -f origin feat/upgrade-eip-icons
```

Then re-run the pipeline.

### General debugging

- Review the full build output in GitHub Actions for specific error messages
- Check `.workdir/library.yaml` structure matches expectations
- Verify TypeScript compilation: `npm run lint` should pass
- For detailed build process information, see [doc/howto.build-package.md](./howto.build-package.md)

---

This guide keeps maintenance changes small, reviewable, and focused. Always validate locally before pushing to remote.
