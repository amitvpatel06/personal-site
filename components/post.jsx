var React = require('react');
var babel = require('babel-core'); 


var Paragraph = React.createClass({
	getDefaultProps: function() {
		return {
			text: "<div></div>"
		}
	},
	rawMarkup: function() {
		return{
			__html: this.props.text
		}
	},
	render: function() {
		let text = this.rawMarkup();
		return (
			<div dangerouslySetInnerHTML={text} />
		);
	}
});

var PostHeading = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'No title yet!',
			subtitle: 'No subtitle yet!',
			date: 'No date yet!',
			author: 'Amit Patel'
		}
	},
	render: function() {
	    return (
		    <div className="container">
	            <div className="row">
	                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	                    <div className="post-heading">
	                        <h1>{this.props.title}</h1>
	                        	<h2 className="subheading">{this.props.subtitle}</h2>
	                        	<span className="meta">Posted by {this.props.author} on {this.props.date}</span>
	                    </div>
	                </div>
	            </div>
	        </div>
	    );
  	}
});

var Post = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'No title yet!',
			subtitle: 'No subtitle yet!',
			date: 'No date yet!',
			author: 'Amit Patel',
			paragraphs: []
		}
	},
	render: function() {
		var paragraphs = this.props.paragraphs
	    return (
	        <article>
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                    {this.props.paragraphs.map(function(para) {
					          return <Paragraph text={para}/>;
					        })}
		                </div>
		            </div>
		        </div>
		    </article>
	    );
  	}
});

module.exports = Post;