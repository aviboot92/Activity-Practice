// Initialize Firebase (YOUR OWN APP)

// Set Initial Counter
var initialValue = 10;

var clickCounter = initialValue;
var data;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
  // Initialize Firebase
	var config = {
		    apiKey: "AIzaSyD4A0rYRCCVchek7rqg1Pr1KmwmOOBEJCc",
		    authDomain: "clickbutton-bdcf3.firebaseapp.com",
		    databaseURL: "https://clickbutton-bdcf3.firebaseio.com",
		    projectId: "clickbutton-bdcf3",
		    storageBucket: "clickbutton-bdcf3.appspot.com",
		    messagingSenderId: "596317189543"
  };
	  firebase.initializeApp(config);

// Print the initial data to the console.
	var database = firebase.database();
	console.log(database);
	   database.ref().set({
	    clicks: clickCounter
	  });


// Change the html to reflect the initial value.
	database.ref().on("value", function(snapshot){
		console.log(snapshot.val());
		data = snapshot.val();
		// Change the clickCounter to match the data in the database
		clickCounter = data.clicks;
		// Log the value of the clickCounter
		console.log(clickCounter+" is updated clickCounter");
		// Change the HTML Value
		$("#click-value").text(clickCounter);
// If any errors are experienced, log them to console.
	},  function(errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

	console.log("This is Data Variable value = "+data);
	console.log("Click Counter outside"+clickCounter);




	










// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter == 0) {
  	clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
  	clicks: clickCounter
  });


  // Log the value of clickCounter
  console.log(clickCounter);


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
 	clickCounter = initialValue;

  // Save new value to Firebase
  	database.ref().set({
  		clicks : clickCounter
  	});

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);

});
