import { Library, Package } from "./manifest"
import P from "path"
import F from "fs"
import merge from "lodash/merge"

export interface FactoryContext {
  dstYamlPath: string
  tplDirPath: string
  tmpDirPath: string
  absoluteDstYamlDirPath: string
  cleanPkgTmpDir: boolean
  packages: Array<string>
}

export interface LibraryFactory {
  (context: FactoryContext): Promise<Library>
}

export interface PackageContext extends FactoryContext {
  pkgTmpDirPath: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(message?: any, ...optionalParams: any[]): void

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(message?: any, ...optionalParams: any[]): void

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(message?: any, ...optionalParams: any[]): void

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(message?: any, ...optionalParams: any[]): void

  time(label?: string): void

  timeEnd(label?: string): void
}

export class DefaultPackageContext implements PackageContext {
  tmpDirPath: string
  tplDirPath: string
  cleanPkgTmpDir: boolean
  dstYamlPath: string
  absoluteDstYamlDirPath: string
  packages: Array<string>

  constructor(
    libraryContext: FactoryContext,
    readonly packageUrn: string,
    readonly pkgTmpDirPath = P.join(libraryContext.tmpDirPath, packageUrn)
  ) {
    merge(this, libraryContext)
  }

  doCleanPackageTmpDirectory() {
    if (F.existsSync(this.pkgTmpDirPath)) {
      F.rmSync(this.pkgTmpDirPath, { recursive: true, force: true })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(message?: any, ...optionalParams: any[]): void {
    this.delegateToConsole.apply(this, ["debug", message, ...optionalParams])
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(message?: any, ...optionalParams: any[]): void {
    this.delegateToConsole.apply(this, ["info", message, ...optionalParams])
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(message?: any, ...optionalParams: any[]): void {
    this.delegateToConsole.apply(this, ["warn", message, ...optionalParams])
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(message?: any, ...optionalParams: any[]): void {
    this.delegateToConsole.apply(this, ["error", message, ...optionalParams])
  }

  time(label?: string): void {
    console.time.apply(console, [`${this.packageUrn}: ${label}`])
  }

  timeEnd(label?: string): void {
    console.timeEnd.apply(console, [`${this.packageUrn}: ${label}`])
  }

  private delegateToConsole(
    level: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...optionalParams: any[]
  ) {
    if (typeof message === "string") {
      console[level].apply(console, [
        `${this.packageUrn}: ${message}`,
        ...optionalParams,
      ])
    } else {
      console[level].apply(console, [
        `${this.packageUrn}:`,
        message,
        ...optionalParams,
      ])
    }
  }
}

export interface PackageFactory {
  getUrn(): string

  create(context: PackageContext): Promise<Package>
}
