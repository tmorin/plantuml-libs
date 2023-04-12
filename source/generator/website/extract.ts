import { Stage } from "./stage"
import P from "path"
import { InputResource } from "./resource"
import { glob } from "glob"
import { Sitemap } from "./sitemap"
import { Config } from "./config"

export interface ExtractStageOutput {
  inputResources: Array<InputResource>
  sitemap: Sitemap
}

export class ExtractStage implements Stage<void, ExtractStageOutput> {
  constructor(readonly config: Config, readonly input: undefined) {}

  static create(config: Config): ExtractStage {
    return new ExtractStage(config, undefined)
  }

  async scanDirectory(inputDirectory: string): Promise<Array<InputResource>> {
    return (
      await glob("**/*", {
        nodir: true,
        cwd: inputDirectory,
        ignore: this.config.skipPatterns,
      })
    ).map((relInputPath) => ({
      relInputPath,
      absInputPath: P.join(inputDirectory, relInputPath),
    }))
  }

  async execute(): Promise<ExtractStageOutput> {
    const inputResources = await Promise.all(
      this.config.inputDirectories.map((inputDirectory) =>
        this.scanDirectory(inputDirectory)
      )
    ).then((resourcesList) =>
      resourcesList.reduce(
        (allResources, directoryResources) => [
          ...allResources,
          ...directoryResources,
        ],
        [
          {
            relInputPath: "CHANGELOG.md",
            absInputPath: P.join(__dirname, "../../../", "CHANGELOG.md"),
          },
          {
            relInputPath: "SECURITY.md",
            absInputPath: P.join(__dirname, "../../../", "SECURITY.md"),
          },
        ]
      )
    )
    const sitemap = Sitemap.create(inputResources)
    return { inputResources, sitemap }
  }
}
