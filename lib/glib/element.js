const {log} = require('../logger');
const P = require('path');
const F = require('fs');
const {render} = require('./render');
const {getConfig} = require('./config');

async function generateElement(entry) {
    log.debug('generatePackage element for (%s)', entry.element.urn);
    const destination = P.join(getConfig().libDir, entry.element.destination)
    F.mkdirSync(P.dirname(destination), {recursive: true});
    const sprites = (entry.sprites || []).map(sprite => F.readFileSync(sprite.destination).toString());
    const data = {entry, sprites};
    if (entry.icon) {
        F.writeFileSync(destination, render('element.icon.puml', data, {trim: true}))
    }
    if (entry.group) {
        F.writeFileSync(destination, render('element.group.puml', data, {trim: true}))
    }
    if (entry.template) {
        F.writeFileSync(destination, render(entry.template.name, data, {trim: true, tplDir: entry.template.directory}))
    }
}

module.exports = {generateElement};