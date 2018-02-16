var express = require('express');
var app = new express();


var path = require('path');
app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});





app.listen(8080,() => console.log('Live on http://localhost:8080'));
