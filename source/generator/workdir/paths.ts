import P from "path"
import Fe from "fs-extra"
import { PackageContext } from "./factories"
import template from "lodash/template"

const TPL_SRC_PATH = P.join(__dirname, "..", "..", "..", "source", "templates")

export function getTplDirPath(workDirPath: string) {
  const relativeTemplateSrc = P.relative(process.cwd(), TPL_SRC_PATH)
  return P.join(workDirPath, relativeTemplateSrc)
}

export function getTmpDirPath(workDirPath: string) {
  return P.join(workDirPath, ".tmp")
}

export function getDstYamlPath(workDirPath: string) {
  return P.join(workDirPath, "library.yaml")
}

export function getAbsoluteImagePath(
  context: PackageContext,
  cwd: string,
  relativeImagePathToGlob: string
) {
  return P.isAbsolute(context.dstYamlPath)
    ? P.join(cwd, relativeImagePathToGlob)
    : P.join(process.cwd(), cwd, relativeImagePathToGlob)
}

export function getAbsoluteDstYamlDirPath(workDirPath: string) {
  const dstYamlPath = getTmpDirPath(workDirPath)
  return P.dirname(
    P.isAbsolute(dstYamlPath) ? dstYamlPath : P.join(process.cwd(), dstYamlPath)
  )
}

export async function copyTemplates(workDirPath: string) {
  const tplDirPath = getTplDirPath(workDirPath)
  await Fe.ensureDir(tplDirPath)
  await Fe.copy(TPL_SRC_PATH, tplDirPath, {
    overwrite: true,
  })
}

const TEMPLATES = {}

export async function render(
  source: string,
  destination: string,
  data: object
) {
  if (!TEMPLATES[source]) {
    const content = await Fe.readFile(source)
    TEMPLATES[source] = template(content.toString("utf-8"))
  }
  const result = TEMPLATES[source](data)
  await Fe.ensureDir(P.dirname(destination))
  await Fe.writeFile(destination, result)
}
