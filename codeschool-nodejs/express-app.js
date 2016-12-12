var express = require('express');
var app = express();

// DEFINE ENDPOINTS
app.get('/', function(request, response) { // root route
	response.sendFile(__dirname + "/index.html"); // reads in a file from our filesystem within the current directory 
});

app.listen(8080);