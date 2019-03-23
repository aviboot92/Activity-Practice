var mysql = require("mysql");
var inquirer = require("inquirer");


// Establish a connection to the database.
// Once we know we have a connection, call chooseSearchOption


function chooseSearchOption() {

  // Use Inquirer to prompt for one of these...
  //   - "Find songs by artist"
  //   - "Find all artists who appear more than once"
  //   - "Find data within a specific range"
  //   - "Search for a specific song"
  //   - "Exit the app"

  // When we get the answers from Inquirer, let's switch our way to what to do next...

}

function artistSearch() {


  // We'll have to use inquirer to prompt the user for the artist they want to find

  // When we get the answer back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...

}

function multiSearch() {

  // No need to ask any more questions, we know we just want the # of artists with more
  // than one song in the top 5000.  We have all the info we need. 
  // We can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...


}

function rangeSearch() {

  // We'll have to use inquirer to figure out what position range they want to search between

  // When we get the answers back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...

}

function songSearch() {

  // We'll have to use inquirer to figure out what song they want to look for.

  // When we get the answers back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...

}

