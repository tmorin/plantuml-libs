# plantuml-libs

[![Integration](https://github.com/tmorin/plantuml-libs/workflows/Integration/badge.svg?branch=master)](https://github.com/tmorin/plantuml-libs/actions?query=workflow%3AIntegration+branch%3Amaster)
[![npm version](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs.svg)](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs)

Tested with [PlantUML compiled Jar (Version 1.2020.9)](https://plantuml.com/download).

The version 1 of the library is available in the v1.x branch.

## Presentation

This repository hosts a [PlantUML] lib which provides several `packages`.
Each package focus to a particular technology/approach (Amazon Web Services (AWS), C4 Model or even EventStorming and more).

The repository hosts also two command lines utilities.
The first one (`glib`) helps to generate packages, the second one (`gdiag`) helps to use the packages within external projects in order to bootstrap a local and generate diagrams.

## PlantUML library

The resources can be browsed, from GitHub, with Markdown pages directly in the [dist](dist/README.md) directory.

The available packages:

- [aws-20200430](dist/aws-20200430/README.md)
- [aws-20200911](dist/aws-20200911/README.md)
- [azure-v2](dist/azure-v2/README.md)
- [c4model](dist/c4model/README.md)
- [eventstorming](dist/eventstorming/README.md)
- [homecloud](dist/homecloud/README.md)
- [material-4.0](dist/material-4.0/README.md)

[PlantUML]: https://plantuml.com

## Usage

The library can directly be used remotely hitting the GitHub repository.

However, the performances are not good enough for intensive usage.
In this case, the library should be installed locally and use directly from the file system.

To help the local installation, an NPM package is available.

## Usage of the NPM package

A npm package [@tmorin/plantuml-libs](https://www.npmjs.com/package/@tmorin/plantuml-libs) is available.
Its purpose is to provide locally the libraries as well as the command-line utility: `gdiag`.
The command-line utility managed it-self the download of the PlantUML jar.

Install the package globally:
```shell script
npm i -g @tmorin/plantuml-libs
```

Show the `gdiag` help output:
```shell script
gdiag --help
```

```
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
  [string] [default: "<Depend of the host>/node_modules/@tmorin/plantuml-libs/"]
      --java-command, --jc      The command of the java binary.
                                                      [string] [default: "java"]
      --plantuml-version, --pv  The version of PlantUML to use.
                                                  [string] [default: "1.2020.9"]
      --log-level, --ll         The level of the logs.
         [string] [choices: "error", "warn", "info", "http", "verbose", "debug",
                                                      "silly"] [default: "info"]
  -c, --clean                   Delete recursively the pictures located in the
                                working directory.    [boolean] [default: false]
      --help                    Show help                              [boolean]
```