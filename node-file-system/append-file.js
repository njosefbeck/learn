'use strict';
const fs = require('fs');

/* Append data to a file, creating the file if it does not yet exist. */
const data = `\n<h2>I really really love cats!</h2>`;
fs.appendFile('files/cats.html', data, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`${data} was appended to cats.html`);
});