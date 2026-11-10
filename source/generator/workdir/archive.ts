import P from "path"
import F from "fs"
import { pipeline } from "stream/promises"
import fetch from "node-fetch"
import extractZip from "extract-zip"
import { PackageContext } from "./factories"

// the signature of a zip local file header, which every non-empty archive starts with
const ZIP_MAGIC = Buffer.from([0x50, 0x4b, 0x03, 0x04])

function isZip(file: string): boolean {
  const fd = F.openSync(file, "r")
  try {
    const head = Buffer.alloc(ZIP_MAGIC.length)
    const read = F.readSync(fd, head, 0, head.length, 0)
    return read === head.length && head.equals(ZIP_MAGIC)
  } finally {
    F.closeSync(fd)
  }
}

export async function download(
  context: PackageContext,
  url: string,
  zipFile: string,
) {
  F.mkdirSync(P.dirname(zipFile), { recursive: true })
  if (F.existsSync(zipFile) && !isZip(zipFile)) {
    context.info("discard the cached (%s), it is not a zip", zipFile)
    F.rmSync(zipFile, { force: true })
  }
  if (!F.existsSync(zipFile)) {
    context.info("download (%s) to (%s)", url, zipFile)
    const resource = await fetch(url)
    if (!resource.ok) {
      throw new Error(
        `unexpected response status (${resource.status} ${resource.statusText}) for (${url})`,
      )
    }
    const body = resource.body
    if (!body) {
      throw new Error(`no response body for (${url})`)
    }
    // write to a temporary file first, so that a failed or empty download
    // never leaves a file at `zipFile` that a later run would treat as cached
    const partFile = `${zipFile}.part`
    try {
      await pipeline(body, F.createWriteStream(partFile))
      if (F.statSync(partFile).size === 0) {
        throw new Error(`empty response body for (${url})`)
      }
      if (!isZip(partFile)) {
        throw new Error(`response body is not a zip archive for (${url})`)
      }
      F.renameSync(partFile, zipFile)
    } catch (e) {
      F.rmSync(partFile, { force: true })
      throw e
    }
  }
}

export async function extractArchive(
  context: PackageContext,
  zipFile: string,
  destDir: string,
) {
  if (!F.existsSync(destDir)) {
    context.info("extract (%s) in (%s)", zipFile, destDir)
    // extract aside, then rename, so that `destDir` only exists once complete
    const partDir = `${destDir}.part`
    F.rmSync(partDir, { recursive: true, force: true })
    F.mkdirSync(partDir, { recursive: true })
    try {
      await extractZip(zipFile, { dir: P.resolve(partDir) })
      F.renameSync(partDir, destDir)
    } catch (e) {
      F.rmSync(partDir, { recursive: true, force: true })
      throw e
    }
  }
}

export async function fetchArchive(
  context: PackageContext,
  url: string,
  zipSrc: string,
  zipDst: string,
) {
  await download(context, url, zipSrc)
  await extractArchive(context, zipSrc, zipDst)
}
