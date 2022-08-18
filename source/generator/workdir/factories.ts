import {Library, Package} from "./manifest";
import P from 'path';
import F from 'fs';
import merge from 'lodash/merge';

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

    debug(message?: any, ...optionalParams: any[]): void;

    info(message?: any, ...optionalParams: any[]): void;

    warn(message?: any, ...optionalParams: any[]): void;

    error(message?: any, ...optionalParams: any[]): void;

    time(label?: string): void;

    timeEnd(label?: string): void;
}

export class DefaultPackageContext implements PackageContext {
    tmpDirPath: string
    tplDirPath: string
    cleanPkgTmpDir: boolean
    dstYamlPath: string;
    absoluteDstYamlDirPath: string;
    packages: Array<string>

    constructor(
        libraryContext: FactoryContext,
        readonly packageUrn: string,
        readonly pkgTmpDirPath = P.join(libraryContext.tmpDirPath, packageUrn),
    ) {
        merge(this, libraryContext);
    }

    doCleanPackageTmpDirectory() {
        if (F.existsSync(this.pkgTmpDirPath)) {
            F.rmSync(this.pkgTmpDirPath, {recursive: true, force: true});
        }
    }

    private delegateToConsole(level: string, message?: any, ...optionalParams: any[]) {
        if (typeof message === "string") {
            console[level].apply(console, [`${this.packageUrn}: ${message}`, ...optionalParams]);
        } else {
            console[level].apply(console, [`${this.packageUrn}:`, message, ...optionalParams]);
        }
    }

    debug(message?: any, ...optionalParams: any[]): void {
        this.delegateToConsole.apply(this, ["debug", message, ...optionalParams]);
    }

    info(message?: any, ...optionalParams: any[]): void {
        this.delegateToConsole.apply(this, ["info", message, ...optionalParams]);
    }

    warn(message?: any, ...optionalParams: any[]): void {
        this.delegateToConsole.apply(this, ["warn", message, ...optionalParams]);
    }

    error(message?: any, ...optionalParams: any[]): void {
        this.delegateToConsole.apply(this, ["error", message, ...optionalParams]);
    }

    time(label?: string): void {
        console.time.apply(console, [`${this.packageUrn}: ${label}`]);
    }

    timeEnd(label?: string): void {
        console.timeEnd.apply(console, [`${this.packageUrn}: ${label}`]);
    }
}


export interface PackageFactory {

    getUrn(): string

    create(context: PackageContext): Promise<Package>

}
