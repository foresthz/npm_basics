#!/usr/bin/env node

console.info('from simple_cli bin ..');

let test = require('../src/test');
console.info('test: ', test);

const {TestManager} = require('../src/test')

debugger;

console.info('after break point simple cli ..');