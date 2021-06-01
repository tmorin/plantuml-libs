import P from 'path';
import F from 'fs';
import fetch from 'node-fetch';
import extractZip from 'extract-zip';
import {PackageContext} from "./factories";

async function download(context: PackageContext, url: string, zipFile: string) {
    F.mkdirSync(P.dirname(zipFile), {recursive: true});
    if (!F.existsSync(zipFile)) {
        context.info('download (%s) to (%s)', url, zipFile);
        const resource = await fetch(url);
        const dest = F.createWriteStream(zipFile);
        resource.body.pipe(dest);
        return new Promise((resolve, reject) => {
            resource.body.on('end', resolve);
            resource.body.on('error', reject);
        });
    }
}

export async function extractArchive(context: PackageContext, zipFile: string, destDir: string) {
    if (!F.existsSync(destDir)) {
        context.info('extract (%s) in (%s)', zipFile, destDir)
        F.mkdirSync(destDir, {recursive: true});
        await extractZip(zipFile, {dir: P.resolve(destDir)});
    }
}

export async function fetchArchive(context: PackageContext, url: string, zipSrc: string, zipDst: string) {
    await download(context, url, zipSrc);
    await extractArchive(context, zipSrc, zipDst);
}
