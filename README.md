# plantuml-libs

[![Continous Integration](https://github.com/tmorin/plantuml-libs/actions/workflows/continuous-integration.yaml/badge.svg)](https://github.com/tmorin/plantuml-libs/actions/workflows/continuous-integration.yaml)
[![npm version](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs.svg)](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs)

This is the **version 4** of the library.

The **version 3** of the library is available in the **v3.x branch**.

## Presentation

This repository hosts a [PlantUML] lib which provides several packages.
Each package focus on a particular technology/approach: Amazon Web Services (AWS), Azure, C4 Model or even EventStorming and more.

Additionally, a CLI utility, working with NodeJS, is also provided within the NPN package.
Its purpose is to speedup the rendering of PlantUML source files, i.e. the generation of PNG.

[PlantUML]: https://plantuml.com

## Contributing

Thanks for your interest in contributing!
There are many ways to contribute to this project.
Get started [here](.github/CONTRIBUTING.md).

## Install

The library can be installed from several channels:

- The NPM package is available on the NPM registry: [@tmorin/plantuml-libs].
- From the [GitHub Releases] page, an archive of the library can be downloaded. 

[@tmorin/plantuml-libs]: https://www.npmjs.com/package/@tmorin/plantuml-libs
[GitHub Releases]: https://github.com/tmorin/plantuml-libs/releases

## The PlantUML library

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

## Generate diagrams with `gdiag`

`gdiag` is a command CLI provided by the NPM package.
It helps to quickly generate the diagrams embedded in `*.puml` or `*.plantuml` files.

```text
gdiag

Render PlantUML diagrams discovered (*.{puml,plantuml}) in the working
directory.

Options:
      --version                 Show version number                    [boolean]
      --work-directory, --wd    The directory where the PlantUML files will be
                                discovered and rendered. [string] [default: "."]
      --tech-directory, --td    The directory where technical resources will be
                                stored.             [string] [default: ".gdiag"]
      --lib-directory, --ld     The directory where the library is located.
           [string] [default: "/home/tibo/git-perso/plantuml-libs/distribution"]
      --java-command, --jc      The command of the java binary.
                                                      [string] [default: "java"]
      --plantuml-version, --pv  The version of PlantUML to use.
                                                  [string] [default: "1.2021.7"]
  -c, --clean                   Delete recursively the pictures located in the
                                working directory.    [boolean] [default: false]
      --help                    Show help                              [boolean]
```

Alternatively, the command line `plantuml-generator`, from [tmorin/plantuml-generator], can also be used.

[tmorin/plantuml-generator]: https://github.com/tmorin/plantuml-generator

## Build the library

The build of the library is based on two steps:

- generate a work directory (`.workdir`) which contains the library manifest, and some additional resources like Tera templates, pictures ...
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
