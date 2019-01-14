/**
 * Name: Daniel Truong
 * Date: 1.14.19
 * FileName: read-directory-demo.js
 */

 var fs = require('fs');

 fs.readdir("/", function (err, data) { //This read the root directory
     console.log(data);
 });