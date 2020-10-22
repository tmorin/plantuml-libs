#!/usr/bin/env node

const {execute} = require('../lib/gdiag/cli');
const {log} = require('../lib/logger');

execute().catch(e => {
    log.error('gdiag failed');
    console.error(e)
});
