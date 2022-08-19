import F from "fs"
import { stringify } from "yaml"
import yargs from "yargs"
import create, { PACKAGES } from "../../library"
import { FactoryContext } from "./factories"
import {
  copyTemplates,
  getAbsoluteDstYamlDirPath,
  getDstYamlPath,
  getTmpDirPath,
  getTplDirPath,
} from "./paths"
import { promisify } from "util"

export interface YamlGeneratorArgs {
  p: Array<string>
  c: boolean
  w: string

  [x: string]: unknown
}

const argv = yargs
  .usage("$0  [args]")
  .option("p", {
    alias: "packages",
    describe: "process only the provided packages",
    type: "string",
    array: true,
    default: PACKAGES,
  })
  .option("c", {
    alias: "clean",
    describe: "clean the build directories of packages before the processing",
    type: "boolean",
  })
  .option("w", {
    alias: "working-directory",
    describe: "the working directory",
    default: ".workdir",
    type: "string",
  })
  .help().argv as YamlGeneratorArgs

const workDirPath = argv.w
const tmpDirPath = getTmpDirPath(workDirPath)
const tplDirPath = getTplDirPath(workDirPath)
const dstYamlPath = getDstYamlPath(workDirPath)
const absoluteDstYamlDirPath = getAbsoluteDstYamlDirPath(workDirPath)
const context: FactoryContext = {
  tmpDirPath,
  tplDirPath,
  dstYamlPath,
  absoluteDstYamlDirPath,
  cleanPkgTmpDir: argv.c,
  packages: argv.p,
}

copyTemplates(workDirPath)
  .then(() => create(context))
  .then((library) =>
    promisify(F.writeFile)(context.dstYamlPath, stringify(library))
  )
  .then(() => console.info("generation done"))
  .catch((e) => console.error("generation failed", e))
