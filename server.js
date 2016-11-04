// Implementing http server
var http = require("http"); // 'http' ships with Node.js
// The function that's passed in to createServer is called once for every HTTP request that's
// made against that server, so it's called the request handler. In fact, the Server object
// returned by createServer is an EventEmitter
// http.createServer(function(request, response) {
	// createServer method is offered by module 'http' module of Node.js
	//we can define and pass a function as a parameter to another function in-place
	// This way, we don't even need to give the function a name, which is why this 
	//is called an ANONYMOUS FUNCTION
  
var url = require("url");// to check which url path the browser requested


// dependency injection
function start(route, handle){

	function onRequest(request, response) {
		 var postData = "";
		 var pathname = url.parse(request.url).pathname;
		 console.log("Request for " + pathname + " received.");

		 route(handle, pathname, response, request);
		 // request.setEncoding("utf8"); REQUIRED for TEXT UPLOAD not file

		 //REQUIRED for TEXT UPLOAD not file
		 // request.addListener("data", function(postDataChunk) {
			//  postData += postDataChunk;
			//  console.log("Received POST data chunk '"+
			//  postDataChunk + "'.");
		 // });

		 // REQUIRED for TEXT UPLOAD not file
		 // request.addListener("end", function() {
		 //   route(handle, pathname, response, postData);
		 // });
		 // route(handle, pathname, response); // To solve blocking and non-blocking problem

		 // response.writeHead(200, {"Content-Type": "text/plain"})
		 // response.write("Hello World");
		 // response.end();
		 }
		 http.createServer(onRequest).listen(3000);

		 console.log("Server has started.");

}

exports.start = start; // To export the start functionality
 

// createServer function returns an object, and this object has a method named listen, and 
//takes a numeric value which indicates the port number our HTTP server is going to listen on