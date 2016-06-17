require('babel-register');
var React = require('react');

var express = require('express');
var path = require('path');

var app = express();
var router = require('./router.js');

app.set('port', process.env.PORT || 3000);
app.use('/', router);

app.set('view engine', 'ejs');

app.use("/", express.static("public"));

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});
