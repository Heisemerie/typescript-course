//The any type
//Arrays
//Tuples
//Enums
//Functions
//Objects

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

//Enums
const small = 1;
const meduim = 2;
const large = 3;
//it represents a group of related constants
const enum Size {
  Small = 1,
  Meduim,
  Large,
}
let mySize: Size = Size.Meduim;
console.log(mySize);

//Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

//Objects
let employee1: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John",
  retire: (date: Date) => console.log(date),
}; //infers the shape of the object
//readonly prevents accidental modification of properties
