var React = require('react');
var reactDomServer = require('react-dom/server');
var express = require('express');
var router = express.Router();
var header = React.createFactory(require('./components/hello.jsx'));

router.get('/', function (req, res) {
	var reactOutput = reactDomServer.renderToString(header({}));
	console.log(reactOutput);
	res.render('index', {reactOut: reactOutput});
});


module.exports = router;