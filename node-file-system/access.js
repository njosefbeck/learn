'use strict';
const fs = require('fs');

/**
 * The path can either be a string or a Buffer. 
 * The mode, an integer, is used to specify which accessibility checks should be performed.
 *    - fs.constants.F_OK determines if the file exists, but says nothing about read, write, or executable permissions. Default if no mode is specified.
 *    - fs.constants.R_OK checks if the file can be read.
 *    - fs.constants.W_OK checks if the file can be written to.
 *    - fs.constants.X_OK checks if the file can be executed. This has no effect on Windows, and instead X_OK will behave like F_OK.
 *  The mode can also be a combination of two or more values, as in the example below.
 */

fs.access('files/cats.html', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(err ? 'cats.html is NOT readable/writeable.' : 'cats.html is readable/writeable.');
});