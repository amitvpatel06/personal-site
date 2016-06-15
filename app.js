
var React = require('react');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
var router = require('./router.js');

app.set('port', process.env.PORT || 3000);
app.use('/', router);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('components', path.join(__dirname, 'components'));

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});