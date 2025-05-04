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

