'use strict';

const fs = require('fs');

/* Change the owner and group of a file */
/* Example changes cats.html's user and group to be root */
fs.chown('files/cats.html', 0, 0, (err) => {
  if (err) {
    console.log('Could not change the user and group of cats.html');
  }
  console.log('Cats.html user and group have been changed.');
});