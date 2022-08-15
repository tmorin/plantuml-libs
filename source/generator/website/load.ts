import { Stage } from "./stage"
import Fe from "fs-extra"
import { Stream, Writable } from "stream"
import { TransformedResource } from "./resource"
import { TransformStageOutput } from "./transform"
import { Config } from "./config"

export interface LoadStageInput {
  streamOfTransformedResources: Stream
}

export class LoadStage implements Stage<LoadStageInput, void> {
  constructor(readonly config: Config, readonly input: LoadStageInput) {}

  static create(
    config: Config,
    transformOutput: TransformStageOutput
  ): LoadStage {
    return new LoadStage(config, {
      streamOfTransformedResources:
        transformOutput.streamOfTransformedResources,
    })
  }

  async execute(): Promise<void> {
    Fe.rmSync(this.config.outputDirectory, {
      recursive: true,
      force: true,
    })
    Fe.mkdirSync(this.config.outputDirectory, {
      recursive: true,
    })
    return new Promise((resolve, reject) => {
      this.input.streamOfTransformedResources
        .on("close", () => resolve())
        .on("error", (error) => reject(error))
        .pipe(
          new Writable({
            objectMode: true,
            write: function (
              resource: TransformedResource,
              encoding: BufferEncoding,
              callback: (error?: Error | null) => void
            ) {
              // console.debug(
              //   "resource",
              //   resource.relInputPath,
              //   resource.absOutputPath
              // )
              resource
                .load()
                .catch((error) => {
                  console.error(
                    "transformer - unable to the load resource",
                    resource
                  )
                  callback(error)
                })
                .then(() => callback(null))
            },
          })
        )
    })
  }
}
