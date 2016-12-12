'use strict';
var http = require('http'); // how we require modules

http.createServer(function(request, response) {
	response.writeHead(200); // status code in header; this is a successful status
	response.write("Hello, this is dog."); // response body
	response.end(); // close the connection, so the client knows that it has received all of the data
}).listen(8080); // listen for connections on this port
console.log('Listening on port 8080...');

// In terminal, run the server with: node hello.js
// In different terminal window, if type 'curl http://localhost:8080' will see 'Hello, this is dog.'