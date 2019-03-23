// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.
var geocoder = require('geocoder');
// console.log(geocoder);
// Geocoding
var city = process.argv[2];
var state = process.argv[3];
var address = city+state;
geocoder.geocode(address, function ( err, data ) {
    // do something with data
    var resp = data;
    console.log(resp);
   console.log(JSON.stringify(resp,null,2));
  });


   

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
