var React = require('react');
var reactDomServer = require('react-dom/server');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Post = require('./models/post.js');
var nav = React.createFactory(require('./components/nav.jsx').NavBar);
var postlist = React.createFactory(require('./components/postlist.jsx'));
var footer = React.createFactory(require('./components/footer.jsx'));
var postpage = React.createFactory(require('./components/post.jsx'))
var posts; 



router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (req, res) {
	Post.find(function(err, posts){
		console.log(posts);
		res.render('index', {
							NavBar: reactDomServer.renderToString(nav({})),
							PostList: reactDomServer.renderToString(postlist({previews: posts})),
							Footer: reactDomServer.renderToString(footer({}))
						}
					);
	});
});


router.get('/post/:id', function (req, res) {
	var post = {};
	Post.find({id:req.params.id}, function(err, posts) {
		console.log(posts);
		if(err) {
			res.render("couldn't find that post!");
		}
		else {
			var post = posts[0];
			res.render('post', {
								NavBar: reactDomServer.renderToString(nav({})),
								Post: reactDomServer.renderToString(postpage({
										title: post.title,
										author: post.author,
										subtitle: post.subtitle,
										date: post.date,
										paragraphs:post.content.split("|")
									})
								)
							}
						);
		}
	});	
});

module.exports = router;