# How to upgrade the GCP package

This guide provides concrete, step-by-step instructions to upgrade the GCP package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

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
create_branch(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-gcp-icons", from_branch="master")
```

**Fallback (CLI)**:
```bash
git checkout master
git pull
git checkout -b feat/upgrade-gcp-icons
```

### 2. Check if new icons are available

GCP uses a fixed URL: `https://cloud.google.com/icons/files/google-cloud-icons.zip`

Proceed to Step 3 to update the package. If new icons have been released by Google, the workdir generation in Step 4 will detect the changes.

### 3. Review the GCP package source

Edit `source/library/packages/gcp/index.ts` and verify the setup:

1. Check line 17 contains the correct URL:
   ```typescript
   const ICONS_URL = "https://cloud.google.com/icons/files/google-cloud-icons.zip"
   ```

2. If Google has changed the icon directory structure, update:
   - The `discover()` method's glob pattern if SVG paths have changed
   - The `getItemUrn()` method's path parsing if folder names differ
   - `source/library/packages/gcp/groups.csv` if custom groupings need updates

3. Review templates in `source/templates/gcp/`:
   - `source/templates/gcp/bootstrap.tera` - main template definitions
   - `source/templates/gcp/examples/` - example templates used in documentation
   - Ensure all `.tera` files reference icon paths that match the new structure

### 4. Generate the work directory

Validate your changes by generating the work directory:

```bash
npm run generate:workdir -- -p gcp
```

Check the output:
- `.workdir/library.yaml` should list the `gcp` package with correct modules and examples
- `.workdir/.cache/gcp` should contain all expected elements
- Compare item count with previous version (changes indicate new/updated icons from Google)

### 5. Commit and push the branch

**Primary (MCP)**: Use `github-mcp-server-push_files` to commit changes
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-gcp-icons", 
  files=[...], message="feat(gcp): update icons from Google Cloud\n\nUpdated GCP package with latest available icons from Google Cloud's official icon library.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add .
git commit -m "feat(gcp): update icons from Google Cloud

Updated GCP package with latest available icons from Google Cloud's official icon library.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

git push -u origin feat/upgrade-gcp-icons
```

### 6. Trigger the Package Builder pipeline

**Primary (MCP)**: Use `github-mcp-server-create_dispatch_event` or similar to trigger the workflow
```
create_dispatch_event(owner="tmorin", repo="plantuml-libs", event_type="package-builder", 
  client_payload={"pkgName": "gcp", "pkgVersion": "latest", "branch": "feat/upgrade-gcp-icons"})
```

Alternatively, use the MCP workflow trigger method (check your MCP server's available tools):
```
trigger_workflow(owner="tmorin", repo="plantuml-libs", workflow_id="package-builder.yaml",
  inputs={"pkgName": "gcp", "pkgVersion": "latest"}, ref="feat/upgrade-gcp-icons")
```

**Fallback (CLI)**:
```bash
gh workflow run package-builder.yaml \
  -f pkgName=gcp \
  -f pkgVersion=latest \
  --ref feat/upgrade-gcp-icons
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
git pull origin feat/upgrade-gcp-icons
```

### 8. Verify the outputs

Inspect the generated files:

```bash
ls -la distribution/gcp/
```

Verify:
- `distribution/gcp/Item/` - all icons render correctly as PlantUML files
- `distribution/gcp/Group/` - all groups are properly styled
- `distribution/gcp/README.md` - auto-generated with updated icon counts and examples

### 9. Create a pull request

**Primary (MCP)**: Use `github-mcp-server-create_pull_request`
```
create_pull_request(owner="tmorin", repo="plantuml-libs", 
  title="feat(gcp): update icons", 
  head="feat/upgrade-gcp-icons", 
  base="master",
  body="Updated GCP package with latest available icons from Google Cloud's official icon library.")
```

**Fallback (CLI)**:
```bash
gh pr create \
  --title "feat(gcp): update icons" \
  --body "Updated GCP package with latest available icons from Google Cloud's official icon library." \
  --base master
```

---

## Troubleshooting

### Pipeline fails with "unable to render" error

**Cause**: Template references outdated icon paths or incorrect structure.

**Solution**:
- Check `source/templates/gcp/bootstrap.tera` and `source/templates/gcp/examples/` for hardcoded icon references
- Verify all icon paths match the new Google Cloud archive structure
- Extract the google-cloud-icons.zip locally and inspect the directory structure to understand changes

### Icon count differs significantly from previous version

**Cause**: Google has changed the icon structure or categories.

**Solution**:
- Verify the change on the [Google Cloud Icons page](https://cloud.google.com/icons/)
- If the glob pattern in `source/library/packages/gcp/index.ts` `discover()` method needs updating, do so to match the new structure
- Check that `getItemUrn()` path parsing still matches the new icon organization

### Pipeline fails with "nothing to commit, working tree clean"

**Cause**: Google has not released new icons since the last upgrade.

**Solution**:
- This is expected behavior—the package is already up-to-date
- No further action is needed; the upgrade process confirmed no new icons are available

### Pipeline creates a commit but you want to override it

If you need to force-push your changes:

```bash
git push -f origin feat/upgrade-gcp-icons
```

Then re-run the pipeline.

### General debugging

- Review the full build output in GitHub Actions for specific error messages
- Check `.workdir/library.yaml` structure matches expectations
- Verify TypeScript compilation: `npm run lint` should pass
- For detailed build process information, see [doc/howto.build-package.md](./howto.build-package.md)

---

This guide keeps maintenance changes small, reviewable, and focused. Always validate locally before pushing to remote.
