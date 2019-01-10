/*
    Author: Daniel Truong
    Date: 1.10.19
    FileName: async-demo.js
*/

var fs = require('fs');

fs.readdir('/', function(err, data) {
    console.log("Data: ", data);
}); //Callback to unnamed function

console.log("Last execution");