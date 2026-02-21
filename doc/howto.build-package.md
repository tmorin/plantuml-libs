# How to build a package (example: c4nord)

This How-to shows the concrete steps to build a single package from this repository — using `c4nord` as an example. It is a procedural companion to the conceptual Explanation page (`doc/package.explanation.md`).

Checklist
- [ ] Ensure prerequisites are installed (Node, npm, podman or Docker)
- [ ] Install repository dependencies
- [ ] Generate the working directory and package YAML
- [ ] Run the containerized renderer to produce the distribution
- [ ] Inspect `distribution/c4nord` and verify outputs

Prerequisites
- Node.js 22+ and npm (used for the generator scripts and `ts-node`).
- Podman (preferred by the repository scripts) or Docker.
- Network access to pull the container image `docker.io/thibaultmorin/plantuml-generator:1`.

1) Clone repository and install dependencies

If you don't already have the repository locally, clone it and install dev dependencies:

```bash
git clone https://github.com/tmorin/plantuml-libs.git
cd plantuml-libs
npm ci
```

(If you prefer npm install, that's fine; `npm ci` is recommended in CI for reproducible installs.)

2) Generate the workdir for package `c4nord`

The repository provides `scripts/generate-package.sh` which orchestrates two steps:
- runs the TypeScript generator to create a `.workdir/library.yaml`
- runs the container image that performs the final rendering and assembly into `distribution/`

To build `c4nord` via npm wrapper:

```bash
# run the packaged script via npm and pass the urn as argument
npm run generate:package -- c4nord
```

Or run the script directly (ensure it is executable):

```bash
./scripts/generate-package.sh c4nord
```

Notes:
- The script will create `./.workdir` and `./distribution` if they don't exist.
- The TypeScript generator (`npm run generate:workdir`) is executed inside the repository (it requires `ts-node` from devDependencies).

3) Alternative: run the container step manually with Docker

If you don't have Podman or prefer Docker, you can run the container step yourself. First generate the workdir YAML (the script normally does this for you):

```bash
npm run generate:workdir -- -p c4nord
```

Then run the container image (Docker example):

```bash
docker pull docker.io/thibaultmorin/plantuml-generator:1
docker run --rm \
  --user "$(id -u):$(id -g)" \
  -v "$PWD/.workdir:/workdir" \
  -v "$PWD/distribution:/distribution" \
  docker.io/thibaultmorin/plantuml-generator:1 \
  plantuml-generator library generate library.yaml --urn="c4nord" --clean-urn="c4nord" -O=/distribution
```

Podman equivalent (what the script uses):

```bash
podman run --rm \
  --userns=keep-id \
  -v "$PWD/.workdir:/workdir:z,U" \
  -v "$PWD/distribution:/distribution:z,U" \
  docker.io/thibaultmorin/plantuml-generator:1 \
  plantuml-generator library generate library.yaml --urn="c4nord" --clean-urn="c4nord" -O=/distribution
```

4) Inspect the outputs

After successful execution, the built package will be under `distribution/c4nord`.
A typical package contains `.puml` files and pre-rendered images (PNG/SVG). Example files in this repository include:

- `distribution/c4nord/bootstrap.puml`
- `distribution/c4nord/deployment_diagram.png`
- `distribution/c4nord/level_1_system_context.puml`

Open `distribution/c4nord/README.md` to see package-level notes, or open the images to verify rendering.

5) Cleaning and reproducible builds

- To remove previous work artifacts for a fresh build, delete the package workdir or the whole `.workdir`:

```bash
rm -rf .workdir
rm -rf distribution/c4nord
```

- You can regenerate only the workdir YAML with a clean flag:

```bash
npm run generate:workdir -- -p c4nord -c
```

Note that `scripts/generate-package.sh` does not forward the `-c` flag; run `generate:workdir` manually if you need the clean behavior before running the container step.

6) Troubleshooting

- Missing `ts-node` / generator failures: ensure `npm ci` completed successfully. The TypeScript generator runs on your host via `ts-node` when creating `.workdir`.
- Container image not available or network blocked: pre-pull the image with `podman pull` or `docker pull` and retry.
- Permission errors on mounted volumes: adjust mount options or run the container with user mapping (see Docker `--user` example). The Podman script uses `--userns=keep-id` to avoid permission mismatches.
- CI differences in PlantUML rendering: pin the container image and consider pre-rendering images in CI to ensure deterministic outputs.

7) CI / automation notes

- In CI, reproduce the same commands as above. Use `npm ci` then either run `npm run generate:package -- c4nord` (if the runner has Podman) or run the `generate:workdir` step followed by a Docker invocation as shown in step 3.
- Ensure the CI runner has predictable UID/GID or uses appropriate container options to avoid permission issues when writing `distribution/`.
