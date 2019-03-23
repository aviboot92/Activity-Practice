
var fs = require("fs");
console.log(fs);

// We then store the textfile filename given to us from the command line
var actionBank = process.argv[2];
var money = process.argv[3];
var moneyValue;
if (actionBank == "withdraw") {
    moneyValue = (-1) * money;
} else if (actionBank == "deposit") {
    moneyValue = money;
}

fs.appendFile("bankSol.txt", ","+moneyValue, function (err) {
    if (err) {
        console.log(err);
    }

    else {
        console.log("Content Added!");
    }
});
if (actionBank == "total") {
    fs.readFile("bankSol.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr+" is DataArr");
        var total = 0;
        var z;
        for (var i = 0; i < dataArr.length; i++) {
            z = parseFloat(dataArr[i]);
            total = total + z;
        }
        console.log(total+" is total");

    });
}