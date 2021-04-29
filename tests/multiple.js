const { Worker } = require('worker_threads');
const fs = require('fs');

const testScript = fs.readFileSync('./index.js').toString();

new Worker(testScript, {eval: true});
new Worker(testScript, {eval: true});
new Worker(testScript, {eval: true});
new Worker(testScript, {eval: true});