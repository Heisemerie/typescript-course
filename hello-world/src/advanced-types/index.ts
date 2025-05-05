//Type Aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}; //create a single reusable type

let employee2: Employee = {
  id: 2,
  name: "James",
  retire: (date: Date) => console.log(date),
};

//Union types
//allows you to give a variable or fn parameter more than one type
function kgToLbs(weight: number | string): number {
  //Narrowing is used to narrow down the union type to a specific type
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

//Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => console.log("drag"),
  resize: () => console.log("resize"),
};

//Literal Types
//allows only exact or specific values
type Quantity = 50 | 100; //can be numbers
let quantity: Quantity = 100;

type Metric = "cm" | "inch"; //can be strings

//Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else console.log("Hola");
}
greet(null); //TS compiler prevents passing 'null' or 'undefined' values

//Optional Chaining
//when working with nullable objects, you have to do null checks
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear()); //optional property access operator because customer and birthday can be null or undefined

let customers: Customer[] | undefined = undefined;
console.log(customers?.[0]); //optional element access operator

let log: any = null;
log?.("a"); //optional call

//Nullish Coalescing Operator
//when working with null or undefined values, sometimes you need to fall back to a default value
let speed: number | null = 50;
const ride = {
  //Falsy (undefined, null, '', false, 0)
  speed1: speed || 30, //but 0 could be a valid value
  speed2: speed ?? 30, //check speifically for null with the nullish coalescing operator (same as 'speed ==! ? speed : 30')
};

//Type Assertion
//sometimes we know more about the type than typescript, we use type assertion to inform typescript about the type
const phone = document.getElementById("phone") as HTMLInputElement; //the method returns HTMLElement or null. We tell TS that we are sure it is a HTMLElement
//HTMLElement is a base class in JS that represents any type of HTML element
//HTMLInputElement is a more specific type of element that has a specific property called 'value'
phone.value; //type assertion allows for intellisense. The program will crash if the object is of the wrong type and will not throw an error

// The Unkown Type
//let's assume we're converting JS code to TS and have a situation where we need to use the 'any' type. For example;
function render2(document: any) {
  document.move(); //the any type prevents the compiler from type checking
  document.fly(); //we can therefore call any method on the 'document' argument
}
function render3(document: unknown) {
  //the unknown type lets the compiler tell us that it is not aware of the type and its avalaible methods
  //We can use Narrowing to narrow down the type of the object
  if (typeof document === "string") document.toUpperCase; //'typeof' operator only works with primitive types
  if (document instanceof HTMLInputElement) document.value; //'instanceof' operator is used for custom types
}
//using 'unknown' is preferred to 'any' because the compiler forces us to perform type checking to make sure the methods we're calling exist on the target object