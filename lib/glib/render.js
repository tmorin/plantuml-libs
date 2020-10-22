const {getConfig} = require('./config');
const P = require('path');
const F = require('fs');
const doT = require('dot');

const fnMap = new Map();

doT.templateSettings.strip = false;

function render(template, data, options = {}) {
    const defTplDir = P.join(__dirname, 'template')
    const srcPath = P.join(options.tplDir || defTplDir, template)
    if (!fnMap.has(srcPath)) {
        const content = F.readFileSync(srcPath).toString('UTF-8');
        const fn = doT.template(content);
        fnMap.set(srcPath, fn);
    }
    const config = getConfig();
    const result = fnMap.get(srcPath)({config, ...data});
    if (options.trim) {
        return result.trim()
            .replace(/(\n)\1+/g, '$1')
    }
    return result;
}

module.exports = {render}