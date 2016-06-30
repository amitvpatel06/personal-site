var React = require('react');


var NavBar = React.createClass({
	render: function() {
	    return (
	       <ul className="nav nav-tabs">
				<li role="presentation"><a href="/">Home</a></li>
				<li role="presentation"><a href="projects">Projects</a></li>
				<li role="presentation"><a href="about">About</a></li>
			</ul>
	    );
  	}
});

module.exports.NavBar = NavBar