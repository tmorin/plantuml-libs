import F from "fs/promises"
import P from "path"
import Fe from "fs-extra"
import { Sitemap } from "./sitemap"
import { renderSimplePage } from "./templates"
import { marked } from "marked"
import { SideSummaryAsHtml } from "./summary"
import { Config } from "./config"

export interface InputResource {
  absInputPath: string
  relInputPath: string
}

export abstract class TransformedResource {
  protected constructor(
    readonly absOutputPath: string,
    readonly relOutputPath: string,
  ) {}

  abstract load(): Promise<void>
}

export class BufferedResource extends TransformedResource {
  readonly content: Buffer

  private constructor(data: {
    absOutputPath: string
    relOutputPath: string
    content: Buffer
  }) {
    super(data.absOutputPath, data.relOutputPath)
    this.content = data.content
  }

  public static create(
    config: Config,
    relOutputPath: string,
    content: Buffer,
  ): BufferedResource {
    return new BufferedResource({
      absOutputPath: P.join(config.outputDirectory, relOutputPath),
      relOutputPath,
      content,
    })
  }

  async load(): Promise<void> {
    await Fe.writeFile(this.absOutputPath, this.content)
  }
}

export class BinaryCopyResource extends TransformedResource {
  readonly inputResource: InputResource

  private constructor(data: {
    inputResource: InputResource
    absOutputPath: string
    relOutputPath: string
  }) {
    super(data.absOutputPath, data.relOutputPath)
    this.inputResource = data.inputResource
  }

  public static create(
    config: Config,
    inputResource: InputResource,
  ): BinaryCopyResource {
    const parsedInputPath = P.parse(inputResource.relInputPath)
    const outputFilename = `${parsedInputPath.name}${parsedInputPath.ext}`
    const relOutputPath = P.join(
      P.dirname(inputResource.relInputPath),
      outputFilename,
    )
    const absOutputPath = P.join(config.outputDirectory, relOutputPath)
    return new BinaryCopyResource({
      inputResource,
      absOutputPath,
      relOutputPath,
    })
  }

  async load(): Promise<void> {
    await F.mkdir(P.dirname(this.absOutputPath), {
      recursive: true,
    })
    await Fe.copy(this.inputResource.absInputPath, this.absOutputPath, {
      overwrite: true,
    })
  }
}

export class MdtoHtmlResource extends TransformedResource {
  readonly inputResource: InputResource
  readonly absOutputPath: string
  readonly relOutputPath: string
  config: Config
  readonly sitemap: Sitemap

  private constructor(data: {
    inputResource: InputResource
    absOutputPath: string
    relOutputPath: string
    config: Config
    sitemap: Sitemap
  }) {
    super(data.absOutputPath, data.relOutputPath)
    this.inputResource = data.inputResource
    this.config = data.config
    this.sitemap = data.sitemap
  }

  public static create(
    config: Config,
    sitemap: Sitemap,
    inputResource: InputResource,
  ): MdtoHtmlResource {
    const parsedInputPath = P.parse(inputResource.relInputPath)
    const outputFilename =
      parsedInputPath.name === "README"
        ? "index.html"
        : `${parsedInputPath.name}.html`
    const relOutputPath = P.join(
      P.dirname(inputResource.relInputPath),
      outputFilename,
    )
    const absOutputPath = P.join(config.outputDirectory, relOutputPath)
    return new MdtoHtmlResource({
      inputResource,
      relOutputPath,
      absOutputPath,
      config,
      sitemap,
    })
  }

  async load(): Promise<void> {
    const contentAsMd = await Fe.readFile(
      this.inputResource.absInputPath,
      "utf8",
    )
    await F.mkdir(P.dirname(this.absOutputPath), {
      recursive: true,
    })

    const contenteAsHtml = await renderSimplePage(this.config, {
      gTagId: this.config.tracking.gTagId,
      relHrefToRoot: P.relative(
        P.dirname(this.absOutputPath),
        this.config.outputDirectory,
      ),
      relHrefToItemsJson: P.relative(
        P.dirname(this.absOutputPath),
        P.join(this.config.outputDirectory, "items.json"),
      ),
      title: P.join(
        P.dirname(this.inputResource.relInputPath),
        P.basename(this.absOutputPath, ".html"),
      ).replace(/\/index$/g, ""),
      content: marked
        .parse(contentAsMd, {})
        .replace(/README\.md/g, "")
        .replace(/\.md/g, ".html"),
      summary: SideSummaryAsHtml.create(
        this.sitemap.contextualize(this.relOutputPath),
      ).render(),
    })
    await Fe.writeFile(this.absOutputPath, contenteAsHtml)
  }
}
