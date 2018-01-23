'use strict';
const fs = require('fs');
const { Transform } = require('stream');
const [
  node,
  processFile,
  filename,
  textToFind,
  replacementText
] = process.argv;

if (!filename) {
  throw Error('Please specify a filename to search.');
}

if (!textToFind) {
  throw Error('Please specify the text you want to find in the file.');
}

if (!replacementText) {
  throw Error('Please specify the replacement text.');
}

const findAndReplace = new Transform({
  transform(chunk, encoding, callback) {
    const chunkString = chunk.toString();
    const regex = new RegExp(textToFind, 'g');
    const replaced = chunkString.replace(regex, replacementText);
    this.push(replaced);
    callback();
  }
});

const src = fs.createReadStream(filename);
const dest = fs.createWriteStream(`new-${filename}`);
src
  .pipe(findAndReplace)
  .pipe(dest);