import P from "path"
import yargs from "yargs"
import { ExtractStage } from "./extract"
import { TransformStage } from "./transform"
import { LoadStage } from "./load"
import { Config } from "./config"

interface YamlGeneratorArgs {
  i: Array<string>
  s: Array<string>
  o: string
  gTagId: string

  [x: string]: unknown
}

const argv = yargs
  .usage("$0 [args]")
  .option("i", {
    alias: "input-directory",
    describe: "the input directory",
    default: [P.join(process.cwd(), "distribution")],
    type: "array",
  })
  .option("o", {
    alias: "output-directory",
    describe: "the output directory",
    default: P.join(process.cwd(), "public"),
    type: "string",
  })
  .option("gTagId", {
    alias: "google-tag-id",
    describe: "the Google Tag identifier",
    default: "",
    type: "string",
  })
  .option("s", {
    alias: "skip-patterns",
    describe: "resources to skip",
    default: [
      "**/*.{Local,Remote}.puml",
      /*
      "aws-q2-2023/!**",
      "azure-11/!**",
      "gcp/!**",
      "fontawesome-6/!**",
      "material-4/!**",
      "simpleicons-8/!**",*/
    ],
    type: "string",
  })
  .help().argv as YamlGeneratorArgs

async function execute() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const version = require(P.join(
    __dirname,
    "../../../",
    "package.json"
  )).version
  const config: Config = {
    inputDirectories: argv.i,
    skipPatterns: argv.s,
    outputDirectory: argv.o,
    tracking: {
      gTagId: argv.gTagId,
    },
    library: {
      name: "tmorin/plantuml-libs",
      github: "https://github.com/tmorin/plantuml-libs",
      version,
    },
  }
  console.info("execute - config", config)

  console.info("execute - extract state")
  const extractOutput = await ExtractStage.create(config).execute()
  console.info(
    "execute - %s resources discovered",
    extractOutput.inputResources.length
  )

  console.info("execute - transform state")
  const transformOutput = await TransformStage.create(
    config,
    extractOutput
  ).execute()

  console.info("execute - load state")
  await LoadStage.create(config, transformOutput).execute()
}

execute().catch((error) => console.error(error))
