var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});