/*
    Author: Daniel Truong
    Date: 1.10.19
    FileName: async-demo.js
*/

var fs = require('fs'); //Loads in file system

function phoneNumber(err, data) {
    console.log("Data: ", data); //Seeing the output
}

fs.readdir('/', phoneNumber); //Reads the directory asynchronously, then tells the function to callback to
/*  fs.readdir('fileToRead', functionCallBack)*/

console.log("Last execution"); //Does not really execute last

/**Notes
 * This code was executed Async. This shows that the code does no to have to wait for the readdir to finish. The console.log can happen before readdie beacuse it did not have to wait.
 */