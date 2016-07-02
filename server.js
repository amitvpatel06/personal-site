'use strict'
require('babel-register');

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router.js');
var Post = require('./models/post.js')
var postStore;



Post.collection.drop();
postStore = require('./data/posts');
console.log(postStore);
for(let item in postStore){
	let content = postStore[item]
	let post = new Post(content);
	post.save(function(err, post){
		if(err){
			return console.error(err);
		}
	});
	console.log(item);
}



app.set('port', process.env.PORT || 3000);
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