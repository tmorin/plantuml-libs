const P = require('path');
const assert = require('assert');
const root = require('../config');

const PACKAGES = [
    'aws-20200430',
    'aws-20200911',
    'aws-20210131',
    'azure-v2',
    'c4model',
    'eventstorming',
    'fontawesome-5.15',
    'gcp',
    'homecloud',
    'material-4.0',
    'simpleicons-4'
];

const INKSCAPE_CMD = 'inkscape';

const TECH_DIR = 'build';
const LIB_DIR = 'dist';

const XS_SIZE = 10;
const SM_SIZE = 12;
const MD_SIZE = 14;
const LG_SIZE = 20;

const SIZES = {
    xs: XS_SIZE,
    sm: SM_SIZE,
    md: MD_SIZE,
    lg: LG_SIZE
}

const BRANCH = 'master';
const REMOTE_URL = `https://raw.githubusercontent.com/tmorin/plantuml-libs/${BRANCH}`;

const CLEAN_BUILD = false;
const CLEAN_PACKAGE = false;

const OVERRIDE_ICONS = false;
const OVERRIDE_SNIPPET_SRC = false;
const OVERRIDE_SNIPPET_DST = false;
const OVERRIDE_SPRITES = false;
const OVERRIDE_ELEMENTS = false;
const OVERRIDE_DOCUMENTATION = false;
const OVERRIDE_EXAMPLE = false;

const glibConfig = {
    packages: PACKAGES,
    pkgName: '',
    pkgDir: '',
    pkgtechDir: '',
    pkgSrcDir: undefined,
    pkg: undefined,
    hasPkgBootstrap: false,
    hasPkgStyle: false,
    modNames: [],
    inkscapeCmd: INKSCAPE_CMD,
    techDir: TECH_DIR,
    libDir: LIB_DIR,
    sizes: SIZES,
    branch: BRANCH,
    remoteUrl: REMOTE_URL,
    clean: {
        build: CLEAN_BUILD,
        package: CLEAN_PACKAGE
    },
    override: {
        icon: OVERRIDE_ICONS,
        snippetSrc: OVERRIDE_SNIPPET_SRC,
        snippetDst: OVERRIDE_SNIPPET_DST,
        sprite: OVERRIDE_SPRITES,
        element: OVERRIDE_ELEMENTS,
        documentation: OVERRIDE_DOCUMENTATION,
        example: OVERRIDE_EXAMPLE
    }
};
root.mergeConfig(glibConfig);

function computeMissingConfig() {
    root.mutateConfig(config => {
        assert(config.libDir, 'libDir is missing');
        assert(config.techDir, 'techDir is missing');
        assert(config.pkgName, 'pkgName is missing');

        config.pkgDir = P.join(config.libDir, config.pkgName)
        config.pkgtechDir = P.join(config.techDir, config.pkgName)

        let pkgSrcDir = config.pkgSrcDir ? config.pkgSrcDir : P.join('../', config.pkgName);
        config.pkg = require(pkgSrcDir);

        assert(config.pkg, 'unable to load the package source');
    })
}

function getConfig() {
    return root.getConfig();
}

module.exports = {getConfig, computeMissingConfig};
