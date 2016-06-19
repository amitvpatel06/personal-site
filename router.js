var React = require('react');
var reactDomServer = require('react-dom/server');
var express = require('express');
var router = express.Router();
var header = React.createFactory(require('./components/hello.jsx').Hello);
var nav = React.createFactory(require('./components/hello.jsx').NavBar);

router.get('/', function (req, res) {
	res.render('index', {reactOut:  reactDomServer.renderToString(header({})),
							NavBar: reactDomServer.renderToString(nav({}))});
});

router.get('/projects', function (req, res) {
	res.render('index', {reactOut:  reactDomServer.renderToString(header({})),
							NavBar: reactDomServer.renderToString(nav({}))});
});

router.get('/post', function (req, res) {
	res.render('post');
});

module.exports = router;