'use strict';
const fs = require('fs');
const filename = process.argv[2];
let copiedFileName = process.argv[3];

if (!filename) {
  throw Error('Please specify a filename to be copied.');
}

if (!copiedFileName) {
  // If no new file name is provided for the copy,
  // just use the original filename and append a timestamp
  const [name, extension] = filename.split('.');
  copiedFileName = `${name}-${Date.now()}.${extension}`;
}

const reportStatus = (err) => {
  if (err) throw err;
  console.log(`${filename} has been copied successfully to ${copiedFileName}`);
}

fs.copyFile(filename, copiedFileName, reportStatus);

