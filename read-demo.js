/**
 * Name: Daniel Truong
 * Date1.11.19
 * FileName: read-demo.js
 */

 var fs = require('fs'); //Load filesystem core module, this was reqired because it was shipped with node.
 
 fs.readFile('./data1.json', function (err, data) {
     console.log(data); //Once done, call back to data
 });