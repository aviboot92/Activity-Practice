console.log(process.argv[2]===process.argv[3]);
var x = process.argv[2];
var y = process.argv[3];

if (((x%7)==0) && ((y%7)==0)){
    console.log("true");
} else{
    console.log("false");
}