const P = require('path');
const F = require('fs');
const {getConfig} = require('./config');
const {renderPuml} = require('../plantuml');
const {log} = require('../logger');

async function generatePkgExamples(examples) {
    log.info('generate package examples');
    for (const example of examples) {
        log.info('generate package example (%s)', example.name);
        const srcPath = P.join(getConfig().libDir, example.source);
        const dstPath = P.join(getConfig().libDir, example.destination);
        F.mkdirSync(P.dirname(srcPath), {recursive: true});
        F.writeFileSync(srcPath, example.content);
        if (!F.existsSync(dstPath) || getConfig().override.example) {
            await renderPuml(srcPath);
        }
    }
}

module.exports = {generatePkgExamples};