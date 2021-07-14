#!/usr/bin/env node

const P = require('path');
const F = require('fs');
const CP = require('child_process');
const fetch = require('node-fetch')
const moment = require('moment');
const glob = require('glob');

/**
 * @typedef Args
 * @type {object}
 * @property {string} wd
 * @property {string} td
 * @property {string} ld
 * @property {number} jc
 * @property {number} pv
 * @property {boolean} c
 */

/**
 * @type Args
 */
const ARGS = getArgs();

function getArgs() {
    return require('yargs')
        .scriptName('gdiag')
        .env("GDIAG_")
        .option('work-directory', {
            alias: 'wd',
            default: '.',
            describe: 'The directory where the PlantUML files will be discovered and rendered.',
            type: 'string'
        })
        .option('tech-directory', {
            alias: 'td',
            default: '.gdiag',
            describe: 'The directory where technical resources will be stored.',
            type: 'string'
        })
        .option('lib-directory', {
            alias: 'ld',
            default: P.join(__dirname, '../distribution'),
            describe: 'The directory where the library is located.',
            type: 'string'
        })
        .option('java-command', {
            alias: 'jc',
            default: "java",
            describe: 'The command of the java binary.',
            type: 'string'
        })
        .option('plantuml-version', {
            alias: 'pv',
            default: "1.2021.7",
            describe: 'The version of PlantUML to use.',
            type: 'string'
        })
        .option('clean', {
            alias: 'c',
            default: false,
            describe: 'Delete recursively the pictures located in the working directory.',
            type: 'boolean'
        })
        .help()
        .usage('$0', 'Render PlantUML diagrams discovered (*.{puml,plantuml}) in the working directory.')
        .argv;
}

function getLatestRunFile() {
    return P.join(ARGS.td, 'LAST_RUN')
}

async function getLatestRun() {
    const latestRunFile = getLatestRunFile()
    if (F.existsSync(latestRunFile)) {
        const stat = F.statSync(latestRunFile);
        console.info('ran previously on (%s)', stat.mtime);
        return moment(stat.mtime);
    }
    console.info('never ran previously');
}

async function setLatestRun() {
    const latestRunFile = getLatestRunFile()
    F.writeFileSync(latestRunFile, '');
}

async function cleanLatestRun() {
    const latestRunFile = getLatestRunFile()
    if (F.existsSync(latestRunFile)) {
        F.unlinkSync(latestRunFile);
    }
}

async function cleanDirectory(directory, ...patterns) {
    console.info('clean directory (%s) with (%s)', directory, patterns);
    for (const pattern of patterns) {
        const files = glob.sync(pattern, {
            cwd: directory
        });
        for (const file of files) {
            const filePath = P.join(directory, file);
            console.info('delete (%s)', filePath);
            F.unlinkSync(filePath);
        }
    }
}

async function parseDirectory(directory, latestRun) {
    console.info('parse directory (%s)', directory);
    const sources = glob.sync(`**/*.{puml,plantuml}`, {
        cwd: directory
    });
    for (const source of sources) {
        const file = P.join(directory, source);
        const stat = F.statSync(file);
        if (!latestRun || moment(stat.mtime).isAfter(latestRun)) {
            console.info('process source (%s)', source);
            await renderPuml(file)
        }
    }
}

function linkPlantumlLibs() {
    const src = ARGS.ld;
    const dst = P.join(ARGS.td, 'plantuml-libs');
    console.info('link plantuml-libs from (%s) to (%s)', src, dst);
    if (F.existsSync(dst)) {
        F.unlinkSync(dst);
    }
    F.symlinkSync(src, dst, 'dir');
}

function getPlantumlJarPath() {
    return P.join(ARGS.td, `plantuml-${ARGS.pv}.jar`)
}

async function downloadPlantUML() {
    const plantumlVersion = ARGS.pv
    const plantumlJarPath = getPlantumlJarPath()
    // https://sourceforge.net/projects/plantuml/files
    const url = `https://sourceforge.net/projects/plantuml/files/${plantumlVersion}/plantuml.${plantumlVersion}.jar/download`;
    F.mkdirSync(P.dirname(plantumlJarPath), {recursive: true});
    if (!F.existsSync(plantumlJarPath)) {
        console.info('download (%s) to (%s)', url, plantumlJarPath);
        const resource = await fetch(url);
        const dest = F.createWriteStream(plantumlJarPath);
        resource.body.pipe(dest);
        return new Promise((resolve, reject) => {
            resource.body.on('end', resolve);
            resource.body.on('error', reject);
        });
    }
}

async function renderPuml(source) {
    const plantumlJarPath = getPlantumlJarPath()
    CP.spawnSync(ARGS.jc, ['-jar', plantumlJarPath, source, source], {
        stdio: 'inherit'
    })
}

async function execute() {
    await downloadPlantUML();
    if (ARGS.c) {
        await cleanLatestRun();
        await cleanDirectory(ARGS.wd, '**/*.png');
    }
    linkPlantumlLibs();
    const latestRun = await getLatestRun();
    await parseDirectory(ARGS.wd, latestRun);
    await setLatestRun();
}

execute().catch(e => console.error('The generation failed', e))
