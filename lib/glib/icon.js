const util = require('util');
const assert = require('assert');
const {getConfig} = require('./config');
const CP = require('child_process');
const {log} = require('../logger');
const P = require('path');
const F = require('fs');
const sharp = require('sharp');

const exec = util.promisify(CP.exec);

async function inkscape(source, destination, height, args = '') {
    await exec(`${getConfig().inkscapeCmd} "${source}" --export-png="${destination}" -h${height} ${args}`, {
        stdio: process.stdout
    }).catch(error => log.warn(error.message));
}

async function generateIcon(entry) {
    if (entry.icon && entry.icon.source) {
        const source = entry.icon.source;
        const destination = P.join(getConfig().libDir, entry.icon.destination);
        if (!F.existsSync(destination) || getConfig().override.icon) {
            log.debug('generate icon for element (%s)', entry.element.urn);
            assert(F.existsSync(source), `the source (${source}) must exist`);
            F.mkdirSync(P.dirname(destination), {recursive: true});
            if (P.extname(source) === '.svg') {
                await inkscape(source, destination, entry.icon.height);
            } else {
                await sharp(source).resize(entry.icon.height).toFile(destination);
            }
        }
    }
}

module.exports = {generateIcon};