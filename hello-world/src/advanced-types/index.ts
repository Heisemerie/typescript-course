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
