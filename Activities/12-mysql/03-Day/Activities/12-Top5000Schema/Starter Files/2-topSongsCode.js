var mysql = require("mysql");
var inquirer = require("inquirer");


// Establish a connection to the database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  // Once we know we have a connection, call chooseSearchOption
  chooseSearchOption();
});


function chooseSearchOption() {

  // Use Inquirer to prompt for one of these...
  //   - "Find songs by artist"
  //   - "Find all artists who appear more than once"
  //   - "Find data within a specific range"
  //   - "Search for a specific song"
  // When we get the answers from Inquirer, let's switch our way to what to do next...
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;
      
      case "Exit":
        console.log("Goodbye!")
        connection.end();
      }
    });





}

function artistSearch() {

  console.log("In artistSearch");


  // We'll have to use inquirer to prompt the user for the artist they want to find

  // When we get the answer back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...
  chooseSearchOption();
}

function multiSearch() {

  console.log("In multiSearch");

  // No need to ask any more questions, we know we just want the # of artists with more
  // than one song in the top 5000.  We have all the info we need. 
  // We can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...
  chooseSearchOption();

}

function rangeSearch() {

  console.log("In rangeSearch");

  // We'll have to use inquirer to figure out what position range they want to search between

  // When we get the answers back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...
  chooseSearchOption();
}

function songSearch() {

  console.log("In songSearch");
  // We'll have to use inquirer to figure out what song they want to look for.

  // When we get the answers back, we can query the database for the result

  // Console log the result to the screen

  // Bring up the search options again to let them keep searching...
  chooseSearchOption();

}

