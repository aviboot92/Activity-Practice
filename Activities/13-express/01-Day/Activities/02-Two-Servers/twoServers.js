var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function goodPeople(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }
  var server1 = http.createServer(goodPeople);
  server1.listen(PORT1, function() {
    // Log (server-side) when our server has started
    console.log("Good Server" + PORT1);
  });

  function badPeople(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("Bad People" + request.url);
  }
  var server2 = http.createServer(badPeople);
  server2.listen(PORT2, function() {
    // Log (server-side) when our server has started
    console.log("Bad Server" + PORT2);
  });