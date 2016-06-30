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
			__html: this.props.text;
		}
	},
	render: function() {
		return {
			<div dangerouslySetInnerHTML={this.rawMarkup()} />
		}
	}
});

var PostHeading = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'No title yet!',
			subtitle: 'No subtitle yet!',
			date: 'No date yet!',
			author: 'Amit Patel',
		}
	},
	render: function() {
	    return (
		    <div class="container">
	            <div class="row">
	                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	                    <div class="post-heading">
	                        <h1>{this.props.title}</h1>
	                        <h2 class="subheading">{this.props.subtitle}</h2>
	                        <span class="meta">Posted by {this.props.author} on {this.props.date}</span>
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
			background: '',
			paragraphs: []
		}
	},
	render: function() {
		var paragraphs = this.props.paragraphs
	    return (
	        <article>
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
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

module.exports.postItem = postItem