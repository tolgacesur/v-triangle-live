var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);