const {levels, log} = require('../logger');
const {getConfig, computeMissingConfig} = require('./config');
const {generatePackage} = require('./package');

function updateConfig() {
    const argv = require('yargs')
        .scriptName('glib')
        .option('package-name', {
            alias: 'pn',
            default: false,
            demandOption: true,
            choices: getConfig().packages,
            describe: 'The name of the package to generate.',
            type: 'string'
        })
        .option('package-source', {
            alias: 'ps',
            default: getConfig().pkgSrcDir,
            describe: 'The path to the source directory of the package.',
            type: 'string'
        })
        .option('module-name', {
            alias: 'mn',
            default: [],
            describe: 'Generate only the matching modules.',
            type: 'array'
        })
        .option('tech-directory', {
            alias: 'td',
            default: getConfig().techDir,
            describe: 'The directory where additional resources are generated/stored.',
            type: 'string'
        })
        .option('lib-directory', {
            alias: 'ld',
            default: getConfig().libDir,
            describe: 'The directory where generated artifacts package will be stored.',
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
        .option('inkscape-command', {
            alias: 'ic',
            default: getConfig().inkscapeCmd,
            describe: 'The command of the inkscape binary.',
            type: 'string'
        })
        .option('clean', {
            alias: 'c',
            default: [],
            describe: 'Clean the provided target directories.',
            choices: ['build', 'package'],
            type: 'array'
        })
        .option('override', {
            alias: 'o',
            default: [],
            describe: 'Force the generation of the provided artifacts.',
            choices: ['icon', 'snippetSrc', 'snippetDst', 'sprite', 'element', 'documentation', 'example'],
            type: 'array'
        })
        .option('log-level', {
            alias: 'll',
            default: getConfig().logLevel,
            describe: 'The level of the logs.',
            choices: Object.keys(levels),
            type: 'string'
        })
        .option('remote-url', {
            alias: 'ru',
            default: getConfig().remoteUrl,
            describe: 'Set the remote URL.',
            type: 'string'
        })
        .help()
        .usage('$0', 'Render a package of the PlantUML library.')
        .argv;

    getConfig().pkgName = argv.pn;
    getConfig().pkgSrcDir = argv.ps;
    getConfig().modNames = argv.mn;
    getConfig().techDir = argv.td;
    getConfig().remoteUrl = argv.ru;

    getConfig().libDir = argv.ld;
    getConfig().javaCmd = argv.jc;
    getConfig().plantumlVersion = argv.pv;
    getConfig().inkscapeCmd = argv.ic;

    log.level = getConfig().logLevel = argv.ll;

    argv.o.forEach(key => getConfig().override[key] = true);
    argv.c.forEach(key => getConfig().clean[key] = true);
}

async function execute() {
    updateConfig();
    computeMissingConfig();
    await generatePackage()
}

module.exports = {execute};