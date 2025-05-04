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

