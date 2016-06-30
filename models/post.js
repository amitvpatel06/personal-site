"use strict";
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  id: {
  	type: Number,
  	index: true
  }, 
  title: String,
  author: String,
  content: String,	
  date: String,
  author: String
});

module.exports = mongoose.model('Post', PostSchema);