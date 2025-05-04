//The any Type
let sales = 123_456_789; //infers type number
let course = "typescript"; //infers type string
let isPublished = true; //infers type boolean
let level; //assumes type any

function render(document: any) {
  console.log(document);
}

//Arrays
let scores: number[] = [1, 2, 3]; //infers type number[]
scores.forEach((n) => n.toExponential(2)); //offers code completion

//Tuples
let user: [number, string] = [1, "Ejike"];
user[1].length; //offers code completion
user.push(1); //doesn't throw errors
