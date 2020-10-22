const P = require('path');
const {downloadPlantUML} = require('../plantuml');
const {setLatestRun} = require('./utilities');
const {parseDirectory} = require('./utilities');
const {getLatestRun} = require('./utilities');
const {linkPlantumlLibs} = require('./utilities');
const {cleanDirectory} = require('../utilities');
const {cleanLatestRun} = require('./utilities');
const {computeMissingConfig} = require('./config');
const {levels, log} = require('../logger');
const {getConfig} = require('./config');

function updateConfig() {
    const argv = require('yargs')
        .scriptName('gdiag')
        .option('work-directory', {
            alias: 'wd',
            default: getConfig().workDir,
            describe: 'The directory where the PlantUML files will be discovered and rendered.',
            type: 'string'
        })
        .option('tech-directory', {
            alias: 'td',
            default: getConfig().techDir,
            describe: 'The directory where technical resources will be stored.',
            type: 'string'
        })
        .option('lib-directory', {
            alias: 'ld',
            default: getConfig().libDir,
            describe: 'The directory where the library is located.',
            type: 'string'
        })
        .option('java-command', {
            alias: 'jc',
            default: getConfig().javaCmd,
            describe: 'The command of the java binary.',
            type: 'string'
        })
        .option('plantuml-version', {
            alias: 'pv',
            default: getConfig().plantumlVersion,
            describe: 'The version of PlantUML to use.',
            type: 'string'
        })
        .option('log-level', {
            alias: 'll',
            default: getConfig().logLevel,
            describe: 'The level of the logs.',
            choices: Object.keys(levels),
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

    getConfig().workDir = argv.wd;
    getConfig().techDir = argv.td;
    getConfig().libDir = argv.ld;
    getConfig().javaCmd = argv.jc;
    getConfig().plantumlVersion = argv.pv;
    getConfig().clean = argv.c;
    log.level = getConfig().logLevel = argv.ll;
}

async function execute() {
    updateConfig();
    computeMissingConfig();
    await downloadPlantUML();
    if (getConfig().clean) {
        await cleanLatestRun();
        await cleanDirectory(getConfig().workDir, '**/*.png');
    }
    linkPlantumlLibs();
    const latestRun = await getLatestRun();
    await parseDirectory(getConfig().workDir, latestRun);
    await setLatestRun();
}

module.exports = {execute};