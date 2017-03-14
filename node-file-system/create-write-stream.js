'use strict';
const fs = require('fs');

/* 
  Use createWriteStream to create a new file and write to that file 
  http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html
*/
let writeStream = fs.createWriteStream('files/dogs.html');
writeStream.write('<h1>I love dogs!</h1>\n');
writeStream.write('<h2>I really really love dogs!</h2>\n');
writeStream.end();