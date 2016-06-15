
require('node-jsx').install()
var React = require('react');
var reactDom = require('react-dom/server');
var express = require('express');
var router = express.Router();
var header = React.createFactory(require('./titlebar.jsx'));
console.log(require('./titlebar.jsx'));
console.log(header);
console.log(header({}));

router.get('/', function (req, res) {
	reactOutput = reactDom.renderToString(header({}));
	console.log(reactOutput);
	res.render('index.ejs', {reactOut: reactOutput});
});


module.exports = router;