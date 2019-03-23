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
  // We'll have to use inquirer to prompt the user for the artist they want to find
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer) {
          
      // When we get the answer back, we can query the database for the result
      console.log("Will query for artist = " + answer.artist);

      // Query Here
      connection.query( answer.artist, function (error, results, fields) {
        console.log("Entered Query connection");
        if (error) throw error;
        console.log('The solution is: ', fields);
      });
            
      // Console log the result to the screen
      
      // Bring up the search options again to let them keep searching...
      chooseSearchOption();

    });    
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

  // We'll have to use inquirer to figure out what position range they want to search between
  inquirer
    .prompt([
      {
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {

      // When we get the answer back, we can query the database for the result
      console.log("Will query for positions between " + answer.start + " and " + answer.end);

      // Query Here

      // Console log the result to the screen
      
      // Bring up the search options again to let them keep searching...
      chooseSearchOption();
    });  

}

function songSearch() {


  // We'll have to use inquirer to figure out what song they want to look for.
  inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function(answer) {
      
      // When we get the answers back, we can query the database for the result
      console.log("Will query for song " + answer.song);

      // Query Here

      // Console log the result to the screen

      // Bring up the search options again to let them keep searching...
      chooseSearchOption();

    });



}

