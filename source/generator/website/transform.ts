import { Stage } from "./stage"
import {
  BinaryCopyResource,
  BufferedResource,
  InputResource,
  MdtoHtmlResource,
  TransformedResource,
} from "./resource"
import { Sitemap } from "./sitemap"
import { Readable, Stream, Transform, TransformCallback } from "stream"
import P from "path"
import { ExtractStageOutput } from "./extract"
import { Config } from "./config"
import { ItemsSummaryAsJson } from "./summary"

export interface TransformStageInput {
  inputResources: Array<InputResource>
  sitemap: Sitemap
}

export interface TransformStageOutput {
  streamOfTransformedResources: Stream
}

export class TransformStage
  implements Stage<TransformStageInput, TransformStageOutput>
{
  constructor(readonly config: Config, readonly input: TransformStageInput) {}

  static create(
    config: Config,
    extractOutput: ExtractStageOutput
  ): TransformStage {
    return new TransformStage(config, {
      inputResources: extractOutput.inputResources,
      sitemap: extractOutput.sitemap,
    })
  }

  async execute(): Promise<TransformStageOutput> {
    const createResource = (inputResource: InputResource) => {
      switch (P.parse(inputResource.relInputPath).ext) {
        case ".md":
          return MdtoHtmlResource.create(
            this.config,
            this.input.sitemap,
            inputResource
          )
        default:
          return BinaryCopyResource.create(this.config, inputResource)
      }
    }

    const streamOfTransformedResources = Readable.from(
      [
        ...this.input.inputResources,
        BufferedResource.create(
          this.config,
          "items.json",
          Buffer.from(
            ItemsSummaryAsJson.create(this.input.sitemap).render(),
            "utf8"
          )
        ),
      ],
      {
        objectMode: true,
      }
    ).pipe(
      new Transform({
        objectMode: true,
        transform(
          resource: InputResource | TransformedResource,
          encoding: BufferEncoding,
          callback: TransformCallback
        ) {
          if (!(resource instanceof TransformedResource)) {
            callback(null, createResource(resource))
          } else if (resource) {
            callback(null, resource)
          }
        },
      })
    )

    return { streamOfTransformedResources }
  }
}
