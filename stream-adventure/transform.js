/*
Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.
*/
'use strict';
var through = require('through2');
var tr = through(function (buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);