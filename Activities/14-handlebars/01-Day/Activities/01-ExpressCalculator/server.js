var express = require("express");
var app = express();
var PORT = 3000;

app.get("/:operation/:num1/:num2",function(req,res){
    var n1 = parseInt(req.params.num1);
    var n2 = parseInt(req.params.num2);
    var operation =req.params.operation.toString();
    var result;
    switch(operation) {
        case "add":
            
                result = num1+num2;
            
            break;
        case "subtraction":
        {
            result = num1-num2;
        }
            break;
        default:
        {
            result = num1*num2;
        }
        return result;
    }
    res.send(result.toString());
});

// app.listen(3000);

app.listen(PORT, function () {
    console.log("Server Started at localhost:" + PORT);
});

