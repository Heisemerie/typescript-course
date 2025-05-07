//Introduction
//Generic classes
//Generic functions
//Generic interfaces
//Generic constraints
//Type mapping

//Understanding the problem
//let's say we want to represent a key-value pair
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}
let pair = new KeyValuePair(1, "Apple"); 
//what if somewhere else in our application, we wanted to use a different value type for our key
//Option 1: use any and lose type checking and intellisense
//Option 2: duplicate the class but it's redundant
//Option 3: generic classes (common and reusable class)
