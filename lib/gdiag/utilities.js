const F = require('fs');
const P = require('path');
const moment = require('moment');
const glob = require('glob');
const {getConfig} = require('./config');
const {log} = require('../logger');
const {renderPuml} = require('../plantuml');

async function getLatestRun() {
    const latestRunFile = getConfig().latestRunFile;
    if (F.existsSync(latestRunFile)) {
        const stat = F.statSync(latestRunFile);
        log.info('ran previously on (%s)', stat.mtime);
        return moment(stat.mtime);
    }
    log.info('never ran previously');
}

async function setLatestRun() {
    const latestRunFile = getConfig().latestRunFile;
    F.writeFileSync(latestRunFile, '');
}

async function cleanLatestRun() {
    const latestRunFile = getConfig().latestRunFile;
    if (F.existsSync(latestRunFile)) {
        F.unlinkSync(latestRunFile);
    }
}

async function parseDirectory(directory, latestRun) {
    log.info('parse directory (%s)', directory);
    const sources = glob.sync(`**/*.{puml,plantuml}`, {
        cwd: directory
    });
    for (const source of sources) {
        const file = P.join(directory, source);
        const stat = F.statSync(file);
        if (!latestRun || moment(stat.mtime).isAfter(latestRun)) {
            log.info('process source (%s)', source);
            await renderPuml(file)
        }
    }
}

function linkPlantumlLibs() {
    const src = getConfig().libDir;
    const dst = P.join(getConfig().techDir, 'plantuml-libs');
    log.info('link plantuml-libs from (%s) to (%s)', src, dst);
    if (F.existsSync(dst)) {
        F.unlinkSync(dst);
    }
    F.symlinkSync(src, dst, 'dir');
}

module.exports = {getLatestRun, setLatestRun, cleanLatestRun, parseDirectory, linkPlantumlLibs};