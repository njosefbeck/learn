'use strict';

const fs = require('fs');

/* Use createReadStream to open up a read stream to open up a file and read it */

const readableStream = fs.createReadStream('files/cats.html', 'utf8');
readableStream.on('data', (chunk) => {
  console.log(chunk);
}).on('end', () => {
  console.log('We have streamed the entire document! It\'s done!');
});

