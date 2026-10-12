# How to upgrade the AWS package

This guide provides concrete, step-by-step instructions to upgrade the AWS package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute.

## Prerequisites & Tool Selection

This guide assumes an AI agent has access to:
- **Primary**: GitHub MCP server (via `github-mcp-server-*` tools) - **Use this when available**
- **Fallback**: GitHub CLI `gh` command (when MCP is unavailable)
- **Required**: [Node.js 24+](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Discover the latest published AWS icons
- Run [resolve-aws-icons.mjs](../scripts/resolve-aws-icons.mjs) to get the latest AWS icons release.
- The script prints `newVersion` (a quarter label such as `aws-q3-2026`), `downloadUrl` and `publishedDate`. Only `downloadUrl` and the date embedded in it matter for the code: there is **no** versioned folder or package to create. The label is only useful for branch and commit names.
- The package keeps one stable identity, `aws` (URN, source folder, template folder, distribution folder). Only two constants change from one release to the next.

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

### 3. Update the two release constants
The AWS package is a single, stable folder: `source/library/packages/aws/` (factory `AwsFactory`, URN `aws`). It is **never renamed or duplicated** for a new release. Only these constants at the top of `source/library/packages/aws/index.ts` change:

- `ICONS_URL`: the `downloadUrl` returned by `resolve-aws-icons.mjs`.
- `FOLDER_DATE`: the `MMDDYYYY` date of the release (e.g. `07312026`). The factory uses it to locate the folders inside the downloaded zip: `Architecture-Service-Icons_<FOLDER_DATE>`, `Architecture-Group-Icons_<FOLDER_DATE>`, `Category-Icons_<FOLDER_DATE>` and `Resource-Icons_<FOLDER_DATE>`.

Do not rename `source/library/packages/aws`, `source/templates/aws`, the `AwsFactory` class or its import in `source/library/index.ts`.

Then check the content that depends on the catalog:
- Unzip the new archive (or inspect `.workdir/.tmp/aws/temp_icons` after step 4) and make sure the four `*_<FOLDER_DATE>` folders listed above still exist. If AWS renamed them or changed the internal layout, update the matching `Fe.copy` calls and the glob patterns in `index.ts`.
- Check `source/library/packages/aws/families.csv` and `groups.csv`: they hold the colors of the families and of the custom groups. Add or remove rows when AWS adds or removes a category or group.
- Check the example templates in `source/templates/aws/examples/` (see below).

#### Example templates
`AwsFactory.create` declares the examples (currently "Chef Automate Architecture on AWS" and "Git to S3 Webhooks"). Each example name is converted to a snake_case file name, and the template must exist at `source/templates/aws/examples/<snake_case_name>.tera` (for instance `chef_automate_architecture_on_aws.tera` and `git_to_s_3_webhooks.tera`; note that `S3` becomes `s_3`). A declared example without its template aborts the "Render Atomic Templates (Other)" phase of the renderer, and the whole package fails to render.

For every upgrade:
- Keep the two templates in `source/templates/aws/examples/` in sync with the declared examples, and add a template whenever a new example is declared.
- Verify that every `include("aws/...")` URN used by a template still exists in the new catalog, e.g. `grep -F "urn: aws/Architecture/Compute/AwsLambda" .workdir/library.yaml`. AWS regularly renames or drops services and families; when a URN is gone, replace it with its closest successor (and the matching macro call) instead of keeping a dangling include. The macro name is the last segment of the URN.

### 4. Generate the work directory
```bash
npm run generate:workdir -- -p aws
```
- Check `.workdir/library.yaml`: the `aws` package must list its modules (`aws/Architecture`, `aws/Category`, `aws/Group`, `aws/Resource`) with a plausible, non-zero number of items, and its two examples (`aws/examples/*.tera`).
- Compare the discovered counts logged by the command (architecture, category, resource, group) with the previous release. Normal catalog churn moves them by a few percent; a count of zero means the zip layout or the glob patterns changed.
- Inspect `.workdir/.tmp/aws/icons` to ensure all expected elements are present.
- Do not run a full local Podman render of the AWS package just to check the pipeline (it takes a very long time and saturates the CPU). The Package Builder pipeline in step 6 does the real render.

### 5. Commit and push the branch
**Primary (MCP)**: Use `github-mcp-server-push_files` to commit changes
```
push_files(owner="tmorin", repo="plantuml-libs", branch="feat/upgrade-aws-<new-version>", 
  files=[...], message="feat(aws): upgrade to <new-version> icons\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>")
```

**Fallback (CLI)**:
```bash
git add source/library/packages/aws source/templates/aws doc
git commit -m "feat(aws): upgrade to <new-version> icons"
git push --set-upstream origin feat/upgrade-aws-<new-version>
```

### 6. Trigger the Package Builder pipeline
**Primary (MCP)**: Use GitHub CLI wrapped by agent to trigger workflow
```bash
gh workflow run package-builder.yaml -f pkgName=aws -f pkgVersion=<new-version> --ref feat/upgrade-aws-<new-version>
```

The pipeline will:
1. Generate the work directory (`npm run generate:workdir -- -p aws`)
2. Render all PlantUML diagrams and examples (`plantuml-generator`, in a container)
3. Push the regenerated `distribution/aws` back to the branch

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
- Inspect the generated files in `distribution/aws`.
- Open the images and PlantUML files to verify correct rendering.
- Ensure samples have been properly rendered.

### 10. Update README
- The `distribution/aws/README.md` is generated by the pipeline. Check that it reflects the new icons, modules and examples instead of editing it by hand.

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
- **There is no rename step.** The package is always `aws`; an upgrade is a re-pin of `FOLDER_DATE` and `ICONS_URL` plus the fixes the new catalog requires (zip layout, example includes, families and groups).
- **Example templates age with the catalog.** An `include("aws/...")` pointing to a service that AWS dropped or renamed only fails at render time, so check them against `.workdir/library.yaml` in step 3.

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
- **Cause**: an example declared in `AwsFactory.create` has no template at `source/templates/aws/examples/<snake_case_name>.tera`, or a template is broken. The failure shows up in the "Render Atomic Templates (Other)" phase.
- **Solution**: make sure `source/templates/aws/examples/` contains one `.tera` file per declared example (the file name is the snake_case example name, `S3` becoming `s_3`), and that every `include("aws/...")` in these files still resolves in `.workdir/library.yaml`.

### Zero or very few icons discovered
- **Cause**: the zip layout changed, so `FOLDER_DATE` no longer matches the folder names inside the archive, or the glob patterns in `discover` no longer match.
- **Solution**: inspect `.workdir/.tmp/aws/temp_icons`, then adjust `FOLDER_DATE` and, if needed, the `Fe.copy` paths and glob patterns in `source/library/packages/aws/index.ts`.

### Archive download fails
- **Cause**: the `ICONS_URL` is wrong or the release was moved by AWS.
- **Solution**: run [resolve-aws-icons.mjs](../scripts/resolve-aws-icons.mjs) again and copy the `downloadUrl` verbatim.

### TypeScript compilation errors
- **Cause**: a constant or an import was edited incorrectly in `source/library/packages/aws/index.ts`.
- **Solution**: restore the structure of the file; only the `FOLDER_DATE` and `ICONS_URL` constants are expected to change in a regular upgrade. `source/library/index.ts` must keep importing `AwsFactory` from `./packages/aws`.

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
