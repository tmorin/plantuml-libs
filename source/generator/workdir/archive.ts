import P from "path"
import F from "fs"
import { pipeline } from "stream/promises"
import fetch from "node-fetch"
import extractZip from "extract-zip"
import { PackageContext } from "./factories"

export async function download(
  context: PackageContext,
  url: string,
  zipFile: string,
) {
  F.mkdirSync(P.dirname(zipFile), { recursive: true })
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
    F.mkdirSync(destDir, { recursive: true })
    await extractZip(zipFile, { dir: P.resolve(destDir) })
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
