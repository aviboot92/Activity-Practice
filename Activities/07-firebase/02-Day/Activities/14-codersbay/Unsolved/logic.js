// Initialize Firebase in html

// Assign the reference to the database to a variable named 'database'
var config = {
    apiKey: "AIzaSyCUYuYXN16sIIV0GKrF7NTxG5VhXwYtQVc",
    authDomain: "codersbay-40ee0.firebaseapp.com",
    databaseURL: "https://codersbay-40ee0.firebaseio.com",
    projectId: "codersbay-40ee0",
    storageBucket: "codersbay-40ee0.appspot.com",
    messagingSenderId: "147487223837"
  };
  firebase.initializeApp(config);

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
// data variable to store snapshot value
var database = firebase.database();
// --------------------------------------------------------------

database.ref().on("value", function(snapshot){

  // If Firebase has a highPrice and highBidder stored, update our client-side variables
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
    // Set the variables for highBidder/highPrice equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = parseInt(snapshot.val().highPrice);
  }

  console.log(highBidder);
  console.log(highPrice);
  $("#highest-bidder").text(highBidder);
  $("#highest-price").text(highPrice);
});

// Whenever a user clicks the submit-bid

$("#submit-bid").on("click", function(event) {
  event.preventDefault();
  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = parseInt($("#bidder-price").val().trim());

  // Log the Bidder and Price (Even if not the highest)
  console.log(bidderName);
  console.log(bidderPrice);

  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase. This will cause our "value" callback above to fire and update
    // the UI.
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

    // Log the new High Price
    console.log("New High Price!");
    console.log(bidderName);
    console.log(bidderPrice);
  }

  else {

    // Alert
    alert("Sorry that bid is too low. Try again.");
  }
});
