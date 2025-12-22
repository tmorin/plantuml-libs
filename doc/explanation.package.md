# How a package is built

Purpose
- This is an "Explanation" (Diátaxis) page: it describes the mental model and architecture of the package build process used in this repository. It explains what the pieces are, how they fit together, and why the build performs certain steps — not a step-by-step runbook.

Assumptions / Intended audience
- You are a contributor or maintainer familiar with development workflows (Node/JS tooling, shell scripts) and with the idea of source templates and generated artifacts.
- This project produces PlantUML-based libraries and site/distribution bundles using templates and generator code located under `source/` and `scripts/`.
- If you want a practical build recipe (commands, CI jobs), see the repository's scripts and the `How-to` or `Reference` docs instead.

Key concepts (mental models)
- Source
  - What: the human-authored inputs: PlantUML snippets, metadata files (YAML/JSON), icon/image assets, and small content fragments.
  - Mental model: the canonical intent. Treat source as the single source of truth describing what the package should contain.

- Templates
  - What: textual skeletons (mustache/handlebars or similar) that declare the shape of generated outputs.
  - Mental model: a recipe or style guide: change the template to change presentation consistently across many items.

- Generator
  - What: programmatic code that reads source and templates and produces concrete artifacts (`.puml`, `.html`, manifests, and auxiliary files).
  - Mental model: a deterministic transformation engine that maps data shapes to files. Keep generator logic pure and predictable where possible.

- Distribution
  - What: the final, consumer-facing layout (directories, images, bundled single-file exports, or published site pages under `distribution/` or `public/`).
  - Mental model: the packaging contract consumers download or browse.

- Packaging metadata
  - What: package-level descriptors (name, id, version, license, included assets, categories) used to assemble the final manifest and to drive site generation.
  - Mental model: a small data contract that other tooling and publishing systems rely on.

Data shapes (what moves through the build)
- Inputs
  - Source files in `source/` (library items, templates, metadata fragments, assets).
  - Template files containing named placeholders and include directives.
  - Pack-level metadata files that describe the package identity and what should be included.

- Internal representations
  - The generator typically builds in-memory objects such as `{ id, title, content, assets: [], metadata: {} }` and a resolved template context like `{ variables: {}, includes: [], rendered: string }`.
  - These are flattened to per-item contexts before rendering.

- Outputs
  - Per-item artifacts (`.puml`, optional pre-rendered `.png`/`.svg`, item HTML or markdown snippets).
  - Package layout: `README.md`, `manifest.json` (or equivalent), `items/`, `images/`, and any single-file bundles in `distribution/`.

High-level build flow (textual diagram)

Source (PUML, metadata, templates)
  --> [Validate sources]
  --> [Resolve templates & contexts]
  --> [Generator: render textual artifacts (.puml, .md, .html)]
  --> [Render diagrams (PUML -> images) — optional]
  --> [Post-process & normalize outputs]
  --> [Assemble distribution + apply packaging metadata]
  --> Distribution folder / archive / published site

Why each step exists (concise reasoning)
- Validate sources
  - Ensures required metadata exists and source syntax is acceptable. Failing fast prevents confusing downstream errors.

- Resolve templates
  - Separates content from presentation: templates let many items be styled/structured consistently.

- Generate artifacts
  - Automates repetitive, error-prone text generation and ensures consistent outputs for many items.

- Render diagrams
  - Producing images (PNG/SVG) upstream improves the browsing experience and avoids surprising consumers who can't run PlantUML locally.

- Post-process / normalize
  - Strip volatile data (timestamps), standardize names and line endings, and remove noise so builds are reproducible and diffs are meaningful.

- Assemble distribution
  - Collate everything into the consumer contract (folders, manifests, readmes) so publishing and consumption are straightforward.

Common pitfalls and how to reason about them
1. Stale templates vs. evolving source
   - Symptom: generated artifacts look incorrect after source changes.
   - Reasoning: templates encode assumptions. When source shape changes, update templates or add compatibility shims in the generator.

2. Missing/inconsistent metadata
   - Symptom: packaging fails or packages lack expected fields (name/version/category).
   - Reasoning: treat metadata as a contract. Validate early and provide conservative defaults when safe.

3. Non-deterministic outputs (timestamps, random IDs)
   - Symptom: CI shows differing artifacts and noisy diffs on every build.
   - Reasoning: normalize or remove volatile values during post-processing; make generation deterministic where possible.

4. Naming collisions and path assumptions
   - Symptom: artifacts overwrite one another, links break, or packaging includes unexpected files.
   - Reasoning: canonicalize file names and require unique IDs. Add tests simulating assembly to catch collisions.

5. Tooling differences across environments
   - Symptom: PlantUML outputs differ or rendering fails on CI.
   - Reasoning: pin tool versions, document required runtimes, and consider pre-rendering images in CI to ensure consistent outputs.

Where to look in this repository (entry points)
- Generator code: `source/generator/` — inspect for concrete data transformations and renderer integrations.
- Invoke scripts: `scripts/generate-library.sh` and `scripts/generate-package.sh` — how builds are orchestrated.
- Distribution examples: `distribution/` and `public/` — sample package layouts and published artifacts.
- Tests: `test/` — look for generation or packaging tests that exercise the pipeline.
