
var React = require('react');
var reactDOM = require('react-dom');
var PostList = require('./components/postlist.jsx');
var NavBar = require('./components/nav.jsx').NavBar;
var $ = require('jquery');

var nav = React.createElement(NavBar);
React.renderComponent(nav, document.getElementById('nav'));
var posts = React.createElement(PostList);
React.renderComponent(posts, document.getElementById('postlist'));
