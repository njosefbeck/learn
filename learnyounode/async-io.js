/*
Write a program that uses a single asynchronous filesystem operation
to read a file and print the number of newlines it contains to the
console (stdout), similar to running cat file | wc -l
*/
var fs = require('fs');
var contents = fs.readFile(process.argv[2], 'utf8', newLines);

function newLines (err, data) {
    if (err) {
        console.log(err);
    }
    var lines = data.split('\n').length - 1;
    console.log(lines);
}
