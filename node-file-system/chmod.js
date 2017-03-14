'use strict';
const fs = require('fs');

/* Change permissions on a file */
/* 
  The second paramter is the 'mode', and it's an integer. In ES6, you can use octal notation to specify the permissions value.

  Ex: 0o666

  The first number after the 0o represents the user permissions for the file; the second number = the group permissions, and the third number represents the permissions for everyone else. 

  OCTAL DIGIT    PERMISSIONS
  -----------    -----------
  0              No access at all ---
  1              Can run the file --x
  2              Can write to the file -w-
  3              Can write to and run the file -wx
  4              Can read the file r--
  5              Can read and run the file r-x
  6              Can read and write the file rw-
  7              Can read, write to, and run the file rwx

  755 rwxr-xr-x  I can change, read and execute; everyone else can only read and execute

  http://www.2ality.com/2015/04/numbers-math-es6.html
*/
fs.chmod('files/cats.html', 0o755, (err) => {
  if (err) {
    console.log('Could not change permissions on cats.html');
  }
  console.log('Successfully changed the permissions of cats.html');
});