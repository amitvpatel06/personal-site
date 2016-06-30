var React = require('react');


var PostItem = React.createClass({
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
	       <div className="post-preview">
                    <a href={"post/" + this.props.id}>
                    	<h2 className="post-title">
                            {this.props.title}
                        </h2>
                        <h3 className="post-subtitle">
                            {this.props.subtitle}
                        </h3>
                    </a>
                    <p className="post-meta"> Posted on {this.props.date}</p>
                <hr/>
            </div>
	    );
  	}
});

var PostList = React.createClass({
	getDefaultProps: function() {
		return {
			previews: []
		}
	},
	render: function() {
	    return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
						{this.props.previews.map(function(preview) {
					          return <PostItem 
					          			id={preview.id}
					          			title={preview.title}
					          			subtitle={preview.subtitle}
					          			date={preview.date}/>;
					    })}
					</div>
				</div>
			</div>
	    );
  	}
});

module.exports = PostList