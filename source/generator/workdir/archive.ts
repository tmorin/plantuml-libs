import P from "path"
import F from "fs"
import fetch from "node-fetch"
import extractZip from "extract-zip"
import { PackageContext } from "./factories"

async function download(context: PackageContext, url: string, zipFile: string) {
  F.mkdirSync(P.dirname(zipFile), { recursive: true })
  if (!F.existsSync(zipFile)) {
    context.info("download (%s) to (%s)", url, zipFile)
    const resource = await fetch(url)
    const body = resource.body
    if (!body) {
      throw new Error(`no response body for (${url})`)
    }
    const dest = F.createWriteStream(zipFile)
    body.pipe(dest)
    return new Promise((resolve, reject) => {
      body.on("end", resolve)
      body.on("error", reject)
    })
  }
}

export async function extractArchive(
  context: PackageContext,
  zipFile: string,
  destDir: string
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
  zipDst: string
) {
  await download(context, url, zipSrc)
  await extractArchive(context, zipSrc, zipDst)
}
