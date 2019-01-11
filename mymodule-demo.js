/**
 * Name: Daniel Truong
 * Date: 1.11.19
 * FileName: mymodule-demo.js
 */

 var myModule = require('./my-module.js'); //How to bring in something from another file. "." means the current directory and "/" means the subdirectory.
 console.log("Text from the external module: ", myModule.myText);