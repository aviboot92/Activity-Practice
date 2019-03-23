// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
  
    case "/":
      return displayRoot(path, req, res);
  
    case "/portfolio":
      return displayPortfolio(path, req, res);
  
    default:
      return display404(path, req, res);
    }
  }