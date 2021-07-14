# plantuml-libs

[![Continous Integration](https://github.com/tmorin/plantuml-libs/actions/workflows/continuous-integration.yaml/badge.svg)](https://github.com/tmorin/plantuml-libs/actions/workflows/continuous-integration.yaml)
[![npm version](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs.svg)](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs)

This is the **version 4** of the library.

The **version 3** of the library is available in the **v3.x branch**.

## Presentation

This repository hosts a [PlantUML] lib which provides several `packages`.
Each package focus on a particular technology/approach: Amazon Web Services (AWS), Azure, C4 Model or even EventStorming and more.

[PlantUML]: https://plantuml.com

## Contributing

Thanks for your interest in contributing! There are many ways to contribute to this project.
Get started [here](.github/CONTRIBUTING.md).

## PlantUML library

The resources can be browsed, from GitHub, with Markdown pages directly in the [distribution](distribution) directory.

The available packages:

- [aws-20210131](distribution/aws-20210131/README.md)
- [azure-4](distribution/azure-4/README.md)
- [c4model](distribution/c4model/README.md)
- [eip-1](distribution/eip-1/README.md)
- [eventstorming](distribution/eventstorming/README.md)
- [fontawesome-5](distribution/fontawesome-5/README.md)
- [gcp](distribution/gcp/README.md)
- [homecloud-1](distribution/homecloud-1/README.md)
- [material-4](distribution/material-4/README.md)
- [simpleicons-5](distribution/simpleicons-5/README.md)

## Build the library

The build of the library is based on two steps:

- generate a work directory (`.workdir`) which contains the library manifest, and some additional resources like Tera template, pictures ...
- generate the distribution directory (`.distribution`) which contains the PlantUML resources as well as the documentation

### Generate the work directory

```shell
npm run generate-library
```

### Generate the distribution directory

```shell
docker run --rm \
  -v "$(pwd)/.workdir:/workdir" \
  -v "$(pwd)/distribution:/distribution" \
  thibaultmorin/plantuml-generator:0 \
  plantuml-generator library generate library.yaml \
  -c=All -O=/distribution
```
