'use strict';
const fs = require('fs');
fs.writeFile('target.txt', 'I love dogs, not cats!', (err) => {
  if (err) {
    throw err;
  }

  console.log('File saved!');
});