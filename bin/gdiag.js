#!/usr/bin/env node

const F = require('fs');
const P = require('path');
const moment = require('moment');
const glob = require('glob');
const fetch = require('node-fetch');
const winston = require('winston');
const util = require('util');
const CP = require('child_process');

const exec = util.promisify(CP.exec);

const log = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({})
    ]
});

const argv = require('yargs')
    .scriptName('gdiag')
    .option('working-directory', {
        alias: 'w',
        default: '.',
        describe: 'The directory where the PlantUML files will be discovered and rendered.',
        type: 'string'
    })
    .option('technical-directory', {
        alias: 't',
        default: '.gdiag',
        describe: 'The directory where technical resources will be stored.',
        type: 'string'
    })
    .option('library-directory', {
        alias: 'l',
        default: P.join(__dirname, '../'),
        describe: 'The directory where the library is located.',
        type: 'string'
    })
    .option('java-command', {
        alias: 'j',
        default: 'java',
        describe: 'The command of the java binary.',
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

const techDir = argv.t;
const latestRunFile = P.join(argv.t, 'LATEST_RUN');
const workDir = argv.w;
const libDir = argv.l;
const doCleaning = argv.c;
const javaCmd = argv.j;

async function plantuml(file) {
    await exec(`${javaCmd} -jar ${techDir}/plantuml.jar ${file}`, {
        stdio: process.stdout
    });
}

async function download(url, destination) {
    const directory = P.dirname(destination);
    if (!F.existsSync(directory)) {
        log.info('create destination directory [%s]', directory);
        F.mkdirSync(directory, {recursive: true});
    }
    if (!F.existsSync(destination)) {
        log.info('download [%s] to [%s]', url, destination);
        const resource = await fetch(url);
        const dest = F.createWriteStream(destination);
        resource.body.pipe(dest);
        return new Promise((resolve, reject) => {
            resource.body.on('end', resolve);
            resource.body.on('error', reject);
        });
    }
}

async function downloadPlantUML() {
    // https://sourceforge.net/projects/plantuml/files/1.2020.14
    const url = `https://sourceforge.net/projects/plantuml/files/1.2020.14/plantuml.1.2020.14.jar/download`;
    const destination = `${techDir}/plantuml.jar`;
    await download(url, destination);
}

async function cleanDirectory(directory) {
    log.info('clean directory [%s]', directory);
    const pictures = glob.sync(`**/*.png`, {
        cwd: directory
    });
    for (const picture of pictures) {
        const picturePath = P.join(directory, picture);
        log.info('delete [%s]', picturePath);
        F.unlinkSync(picturePath);
    }
}

async function getLatestRun() {
    if (F.existsSync(latestRunFile)) {
        const stat = F.statSync(latestRunFile);
        log.info('ran previously on [%s]', stat.mtime);
        return moment(stat.mtime);
    }
    log.info('never ran previously');
}

async function setLatestRun() {
    F.writeFileSync(latestRunFile, '');
}

async function cleanLatestRun() {
    if (F.existsSync(latestRunFile)) {
        F.unlinkSync(latestRunFile);
    }
}

async function parseDirectory(directory, latestRun) {
    log.info('parse directory [%s]', directory);
    const sources = glob.sync(`**/*.{puml,plantuml}`, {
        cwd: directory
    });
    for (const source of sources) {
        const file = P.join(directory, source);
        const stat = F.statSync(file);
        if (!latestRun || moment(stat.mtime).isAfter(latestRun)) {
            log.info('process source [%s]', source);
            await plantuml(file)
        }
    }
}

function linkPlantumlLibs() {
    const src = libDir;
    const dst = P.join(techDir, 'plantuml-libs');
    log.info('link plantuml-libs from [%s] to [%s]', src, dst);
    if (F.existsSync(dst)) {
        F.unlinkSync(dst);
    }
    F.symlinkSync(src, dst, 'dir');
}

(async function execute() {
    await downloadPlantUML();
    if (doCleaning) {
        await cleanLatestRun();
        await cleanDirectory(workDir);
    }
    linkPlantumlLibs();
    const latestRun = await getLatestRun();
    await parseDirectory(workDir, latestRun);
    await setLatestRun();
}()).catch(e => {
    log.error('gdiag failed');
    log.error(e);
});
