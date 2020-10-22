const F = require('fs');
const P = require('path');
const rimraf = require('rimraf');
const {generatePkgExamples} = require('./example');
const {log} = require('../logger');
const {mutateConfig} = require('../config');
const {downloadPlantUML} = require('../plantuml');
const {getConfig} = require('./config');
const {generateBootstrap} = require('./bootstrap');
const {generateIcon} = require('./icon');
const {generateSprite} = require('./sprite');
const {generateSnippetSources, generateSnippetDestination} = require('./snippet');
const {generateElement} = require('./element');
const {generateElementDocumentation, generatePackageDocumentation, generateModuleDocumentation} = require('./documentation');

async function generateEntry(entry) {
    log.info('generate entry (%s)', entry.element.urn);
    await generateIcon(entry);
    await generateSprite(entry);
    await generateSnippetSources(entry);
    await generateElement(entry);
    await generateSnippetDestination(entry);
    await generateElementDocumentation(entry);
}

async function generateModule(moduleName, entries) {
    log.info('generate module (%s)', moduleName);
    for (const entry of entries) {
        await generateEntry(entry);
    }
    await generateModuleDocumentation(moduleName, entries)
}

async function generatePackage() {
    log.info('generate package (%s) in (%s)', getConfig().pkgName, getConfig().libDir);

    if (getConfig().clean.build) {
        log.info('clean (%s)', getConfig().techDir);
        rimraf.sync(getConfig().techDir);
    }
    F.mkdirSync(getConfig().techDir, {recursive: true});

    if (getConfig().clean.package) {
        log.info('clean (%s)', getConfig().pkgDir);
        rimraf.sync(getConfig().pkgDir);
    }
    F.mkdirSync(getConfig().pkgDir, {recursive: true});

    await downloadPlantUML();

    await generateBootstrap();

    const pkg = getConfig().pkg;

    const inventory = pkg.createInventory ? await pkg.createInventory() : [];

    const bootstrap = pkg.createBootstrap ? await pkg.createBootstrap(inventory) : '';
    mutateConfig(config => config.hasPkgBootstrap = !!bootstrap);

    const style = pkg.createStyle ? await pkg.createStyle(inventory) : '';
    mutateConfig(config => config.hasPkgStyle = !!style);

    const examples = pkg.createExamples ? await pkg.createExamples(inventory) : [];

    if (bootstrap) {
        log.info('generate the package bootstrap');
        F.writeFileSync(P.join(getConfig().pkgDir, 'bootstrap.puml'), bootstrap);
    }

    if (style) {
        log.info('generate the package style');
        F.writeFileSync(P.join(getConfig().pkgDir, 'style.puml'), style);
    }

    const moduleNames = Object.keys(inventory)
        .filter(modName => getConfig().modNames.length ? getConfig().modNames.indexOf(modName) >= 0 : true);
    for (const moduleName of moduleNames) {
        const entries = inventory[moduleName].sort((a, b) => a.element.urn.localeCompare(b.element.urn));
        await generateModule(moduleName, entries);
    }

    await generatePkgExamples(examples);

    const presentation = pkg.createPresentation ? await pkg.createPresentation() : '';

    await generatePackageDocumentation(presentation, inventory, examples);
}

module.exports = {generatePackage}