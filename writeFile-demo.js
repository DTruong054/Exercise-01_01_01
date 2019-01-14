/**
 * Name: Daniel Truong
 * Date: 1.14.19
 * FileName: writeFile-demo.js
 */

 var fs = require('fs');

 var jsonString = {
     "name": "Slackless", //to write this, just JSON.stringify(jsonString)
     "age": "21" //You need to add a comma after a line, instead of a semi-colon
 }

 fs.writeFile('./data2.json', JSON.stringify(jsonString), function (err) { //Error Trapping
     if (err) {
         console.log("Error Num: ", err); //If there is an error...
     }
 });
 