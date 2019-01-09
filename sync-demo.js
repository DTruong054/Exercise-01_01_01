/*
    Author: Daniel Truong
    Date: 1.9.19
    FileName: sync-demo.js
*/

var fs = require('fs'); //Loads in file system
var data = fs.readdirSync('/'); //Reads the directory synchronously
console.log("Data: ", data); //Seeing the output
console.log("Last execution");