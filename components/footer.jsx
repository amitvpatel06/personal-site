var React = require('react');


var Footer = React.createClass({
    render: function() {
        return (
           <footer>
				<div className="container">
					<div className="row">
					    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
					        <ul className="list-inline text-center">
					            <li>
					                <a href="../Amit_Resume">
					                    <span className="fa-stack fa-lg">
					                        <i className="fa fa-circle fa-stack-2x"></i>
					                        <i className="fa fa-file-text fa-stack-1x fa-inverse"></i>
					                    </span>
					                </a>
					            </li>
					            <li>
					                <a href='https://www.linkedin.com/in/amit-patel-8b4a7334'>
					                    <span className="fa-stack fa-lg">
					                        <i className="fa fa-circle fa-stack-2x"></i>
					                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
					                    </span>
					                </a>
					            </li>
					            <li>
					                <a href="https://github.com/amitvpatel06">
					                    <span className="fa-stack fa-lg">
					                        <i className="fa fa-circle fa-stack-2x"></i>
					                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
					                    </span>
					                </a>
					            </li>
					        </ul>
					    </div>
					</div>
				</div>		
			</footer>
        );
    }
});

module.exports = Footer;