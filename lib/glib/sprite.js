const assert = require('assert');
const P = require('path');
const F = require('fs');
const sharp = require('sharp');
const {encodeSprite} = require('../plantuml');
const {log} = require('../logger');
const {getConfig} = require('./config');

async function toSpriteImage(source, destination, height) {
    F.mkdirSync(P.dirname(destination), {recursive: true});
    await sharp(source)
        .resize(height)
        .flatten({background: {r: 255, g: 255, b: 255}})
        .png({
            compressionLevel: 0
        })
        .toFile(destination);
}

async function generateSprite(entry) {
    if (entry.icon) {
        for (const sprite of (entry.sprites || [])) {
            if (!F.existsSync(sprite.destination) || getConfig().override.sprite) {
                log.debug('generate sprite for element (%s)', entry.element.urn);
                const source = entry.icon.source;
                assert(F.existsSync(source), `the source (${source}) must exist`)
                await toSpriteImage(source, sprite.source, getConfig().sizes[sprite.size]);
                await encodeSprite(sprite.source, sprite.destination);
            }
        }
    }
}

module.exports = {generateSprite};