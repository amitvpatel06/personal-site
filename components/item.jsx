var React = require('react');

var postItem = React.createClass({
	getDefaultProps: function() {
		return {
			id: -1,
			title: 'No title yet!',
			subtitle: 'No subtitle yet!',
			date: 'No date yet!'
		}
	},
	render: function() {
	    return (
	       <div class="post-preview">
                    <a href="post/" + this.props.id>
                    	<h2 class="post-title">
                            {this.props.title}
                        </h2>
                        <h2 class="post-title">
                            {this.props.subtitle}
                        </h2>
                    </a>
                    <p class="post-meta">Posted on {this.props.date}</p>
                </div>
            <hr>
	    );
  	}
});

module.exports.postItem = postItem