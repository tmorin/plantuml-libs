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
  .option("s", {
    alias: "skip-patterns",
    describe: "resources to skip",
    default: [
      // "**/*.{Local,Remote}.puml",
      // "aws-q1-2022/**",
      // "aws-q2-2022/**",
      // "azure-4/**",
      // "domainstorytelling/**",
      // "eip-1/**",
      // "eventstorming/**",
      // "gcp/**",
      // "homecloud-2/**",
      // "fontawesome-6/**",
      // "material-4/**",
      // "simpleicons-7/**",
    ],
    type: "string",
  })
  .help().argv as YamlGeneratorArgs

async function execute() {
  const config: Config = {
    inputDirectories: argv.i,
    skipPatterns: argv.s,
    outputDirectory: argv.o,
    library: {
      name: "tmorin/plantuml-libs",
      github: "https://github.com/tmorin/plantuml-libs",
      version: require(P.join(__dirname, "../../../", "package.json")).version,
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
