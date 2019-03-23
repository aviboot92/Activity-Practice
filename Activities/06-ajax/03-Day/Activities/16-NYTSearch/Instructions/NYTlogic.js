// 1) Setup Variables
// ==============
var queryTerm 	=	"Obama";
var numRecords 	=	5;
var sartYear 	=	0;
var endYear		=	0;	
var apiKey		=	"b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURL;
var respData = "";

// Functions

// 2) Building the URL
function urlBuild(){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  	'api-key': apiKey,
  	'q': queryTerm
	});
	queryURL = url;
	// console.log(queryURL+" is queryURL");
	console.log(url+"is URL");
}

// 3)Function to pull the data
function dataCall(){
	urlBuild();
	console.log(queryURL+" is queryURL");
		$.ajax({
			url 	: queryURL,
			method 	: 'GET'
		}).then(function(data){
			//Storing value in respData
			var dataObject = data;
			console.log(dataObject);
			respData = dataObject;
		});
}

// 4) Joining Search Buttons
$("#run-search").on("click", function(respData){
	alert("text");
	dataCall();
	console.log(respData);
	return false;
})





// MAin Process

// 1. Retrieve user Inputs and convert to Variables



// 2. Use those variables to run a AJAX call to the New York Times
// 3. Break down the NYT Object into usable fields
// 4. Dynamically generate html content.

