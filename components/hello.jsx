var React = require('react');
var reactDOM = require('react-dom');
var $ = require('jquery');

var Hello = React.createClass({
	handleClick() {
		console.log('hi');
	},
	render: function() {
	    return (
	        <div className="jumbotron">
		    	<h1>Hello, world!</h1>
				<p>...</p>
				<p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			</div>
	    );
  	}
}); 

var NavBar = React.createClass({
	render: function() {
	    return (
	       <ul className="nav nav-tabs">
				<li role="presentation" className="active"><a href="/">Home</a></li>
				<li role="presentation"><a href="projects">Projects</a></li>
				<li role="presentation"><a href="#">Account</a></li>
			</ul>
	    );
  	}
});
module.exports.Hello = Hello;
module.exports.NavBar = NavBar