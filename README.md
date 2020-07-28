# plantuml-libs


[![builds.sr.ht status](https://builds.sr.ht/~tmorin/plantuml-libs/commits/main.yml.svg)](https://builds.sr.ht/~tmorin/plantuml-libs/commits/main.yml?)
[![npm version](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs.svg)](https://badge.fury.io/js/%40tmorin%2Fplantuml-libs)

Tested with [PlantUML compiled Jar (Version 1.2020.15.jar)](https://plantuml.com/download).

Set of libraries for [PlantUML](http://plantuml.com).

- [Cloud - with AWS, Azure and GCP](cloud/README.md)
- [C4 Model](c4model/README.md)
- [EventStorming](eventstorming/README.md)

# Usage of the NPM package

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

```text
gdiag

Render PlantUML diagrams discovered (*.{puml,plantuml}) in the working
directory.

Options:
  --version                  Show version number                       [boolean]
  --working-directory, -w    The directory where the PlantUML files will be
                             discovered and rendered.    [string] [default: "."]
  --technical-directory, -t  The directory where technical resources will be
                             stored.                [string] [default: ".gdiag"]
  --library-directory, -l    The directory where the library is located.
  [string] [default: "<Depend of the host>/node_modules/@tmorin/plantuml-libs/"]
  --java-command, -j         The command of the java binary.
                                                      [string] [default: "java"]
  --clean, -c                Delete recursively the pictures located in the
                             working directory.       [boolean] [default: false]
  --help                     Show help                                 [boolean]
```
