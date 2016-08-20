'use strict'

console.log("hi");
require('babel-register');

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router.js');
var Post = require('./models/post.js')
var postStore;

var reReadDB = function() {
	var postStore = require('./data/posts');
	for(var item in postStore) {
		Post.collection.drop();
		var content = postStore[item]
		console.log(content.id);
		var post = new Post(content);
		post.save(function(err, post){
			if(err){
				return console.error(err);
			}
		});
	}
	postStore = {};
	console.log("Updated posts!");
};
reReadDB(); 

app.use('/Amit_Resume', express.static(__dirname + '/public/data/Amit_Resume.pdf'));
app.set('port', process.env.PORT || 8090);
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use("/", express.static("public"));
app.use("/post", express.static("public"));
	
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});


mongoose.connect('mongodb://localhost');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Database connected!');
});