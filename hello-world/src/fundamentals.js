//The any Type
var sales = 123456789; //infers type number
var course = "typescript"; //infers type string
var isPublished = true; //infers type boolean
var level; //assumes type any
function render(document) {
    console.log(document);
}
//Arrays
var scores = [1, 2, 3]; //infers type number[]
scores.forEach(function (n) { return n.toExponential(2); }); //offers code completion
//Tuples
var user = [1, "Ejike"];
user[1].length; //offers code completion
