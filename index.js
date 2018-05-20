var express = require('express');
var app = express();


var port = 8080;

app.get('/', function (req, res) {
res.sendFile(__dirname+'/index.html');
});

var server = app.listen(process.env.PORT || port, function () {
    console.log('Server started successfully');
});
