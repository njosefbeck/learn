var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

// Route definition -- the :username means we have a dynamic username
app.get('/tweets/:username', function(req, response) {

	// Grab the username out of the request parameters 
	var username = req.params.username;

	var options = {	// get the last ten tweets for screen_name
		protocol: 'http:',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name: username, count: 10}
	}

	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response); // Pipe the request to response

});