/**
 * Name: Daniel Truong
 * Date1.11.19
 * FileName: read-demo.js
 */

 var fs = require('fs'); //Load filesystem core module, this was require because it was shipped with node.
 
 fs.readFile('./data1.json', 'utf-8', function (err, data) { //Use file, then use encoding since file was not specifed
     console.log(data); //Once done, call back to data
     data = JSON.parse(data); //This makes data as a JSON object, and reads the name on another file. Parse reads the file.
     console.log(data.name);
 });