#!/usr/bin/env node

const {execute} = require('../lib/glib/cli');
const {log} = require('../lib/logger');

execute().catch(e => {
    log.error('glib failed');
    console.error(e)
});
