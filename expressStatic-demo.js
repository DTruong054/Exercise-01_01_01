/**
 * Name: Daniel Truong
 * Date: 1.14.19
 * FileName: expressStatic-demo.js
 */

var express = require('express');
var app = express(); //Best practes is to call express that they are running "app"

var port = 8080; //Use 8080 as a port

app.use( express.static(__dirname)); //Mount the middleware function at the specifed path

app.listen(port, function (err, data) { //listen method: binds and listen for a port
    console.log("Server list on localhost:%s", port);
});