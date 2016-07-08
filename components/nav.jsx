var React = require('react');



var Heading = React.createClass({
	getDefaultProps: function() {
		return {
			heading: "SDAS",
			subheading: "asdf",
			img: 'img/post-bg.jpg',
			pagetype: 'site'
		}
	},
	render: function() {
		var headstyle = {
			backgroundImage: "url('" + this.props.img + "')",
			pagetype: this.props.pagetype
		};
				
	    return (
	    <header className="intro-header" style={headstyle}>
	        <div className="container">
	            <div className="row">
	                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	                    <div className={this.props.pagetype + "-heading"}>
	                        <h1>{this.props.heading}</h1>
	                        <h2 className="subheading">{this.props.subheading}</h2>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </header>
	    );
  	}
})

var NavBar = React.createClass({
	render: function() {
	    return (
	       <ul className="nav nav-tabs">
				<li role="presentation"><a href="/">Home</a></li>
				<li role="presentation"><a href="../contact">Contact</a></li>
				<li role="presentation"><a href="../about">About</a></li>
			</ul>
	    );
  	}
});



module.exports.NavBar = NavBar;
module.exports.PageHeading = Heading;