/**
 * Name: Daniel Truong
 * Date: 1.15.19
 * FileName: expressEndpoint-demo.js
 */

 var express = require('express');
 var app = express();
 var fs = require('fs');
 var port = 8080; //The port to run on

 app.use('/message', function (req, res) {
     console.log("The user has requeted an endpoint!");
     res.send("<h2>Hello from the server endpoint!</h2>"); //If gotten a response(res), send a message
 })

 app.use('/users', function (req, res) { //Can use any 2 params, first one is always the request, and second is response
     fs.readFile('./data2.json', 'utf8' , function (err, data) {
         res.send(data);
     });
 })

app.listen(port, function () {
    console.log("Serving listening on localhost:%s", port);
});