const extractZip = require('extract-zip')
const F = require('fs');
const P = require('path');
const fetch = require('node-fetch');
const glob = require('glob');
const {log} = require('./logger');
const kebabcase = require('lodash.kebabcase');
const camelcase = require('lodash.camelcase');
const snakecase = require('lodash.snakecase');

async function inspectDirectory(directory) {
    const directories = [];
    const files = [];
    const openedDir = F.opendirSync(directory);
    let child = openedDir.readSync();
    while (child != null) {
        const entryPath = P.join(directory, child.name);
        if (child.isDirectory()) {
            directories.push(entryPath);
        } else if (child.isFile()) {
            files.push(entryPath);
        }
        child = openedDir.readSync();
    }
    openedDir.closeSync();
    return {directories, files}
}

async function extract(source, destination) {
    if (!F.existsSync(destination)) {
        log.info('extract (%s) in (%s)', source, destination)
        F.mkdirSync(destination, {recursive: true});
        await extractZip(source, {dir: P.resolve(destination)});
    }
}

async function download(url, destination) {
    F.mkdirSync(P.dirname(destination), {recursive: true});
    if (!F.existsSync(destination)) {
        log.info('download (%s) to (%s)', url, destination);
        const resource = await fetch(url);
        const dest = F.createWriteStream(destination);
        resource.body.pipe(dest);
        return new Promise((resolve, reject) => {
            resource.body.on('end', resolve);
            resource.body.on('error', reject);
        });
    }
}

async function cleanDirectory(directory, ...patterns) {
    log.info('clean directory (%s) with (%s)', directory, patterns);
    for (const pattern of patterns) {
        const files = glob.sync(pattern, {
            cwd: directory
        });
        for (const file of files) {
            const filePath = P.join(directory, file);
            log.info('delete (%s)', filePath);
            F.unlinkSync(filePath);
        }
    }
}

function unifyEntries(entries) {
    const newEntries = {};
    return entries.filter(entry => {
        if (newEntries[entry.element.urn]) {
            return false;
        }
        return newEntries[entry.element.urn] = true;
    })
}

function toCamelCase(value) {
    const result = camelcase(value);
    if (result && result.length) {
        return result[0].toUpperCase() + (result.substr(1) || '');
    }
    return camelcase(value);
}

function toKebabCase(value) {
    return kebabcase(value);
}

function toSnakeCase(value) {
    return snakecase(value);
}

module.exports = {
    download,
    extract,
    cleanDirectory,
    toKebabCase,
    toCamelCase,
    toSnakeCase,
    unifyEntries,
    inspectDirectory
};
