var React = require('react');
//var ReactDOM = require('react-dom');

var hello = React.createClass({
	handleClick(){
		console.log('Button Clicked');
	},
	render: function(){
		return <button onClick={this.handleClick}> Hello World </button>;
	}
});

module.exports = hello;