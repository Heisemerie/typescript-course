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

//Generic classes
//T is used because the idea comes from C++ called 'template' classes
class KeyValuePair2<T, U> {
  constructor(public key: T, public value: U) {}
}
let pair2 = new KeyValuePair2<string, string>("1", "Mango");
//there is type safety, intellisense and no redundancy or duplication
//the compiler can still infer the types if not supplied

//Generic Functions
//we can also create generic functions or methods. for example;
function wrapInArray<T>(value: T) {
  return [value];
}
let numbers = wrapInArray("1");
//the function could also be a function inside a class
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let numbers2 = ArrayUtils.wrapInArray(1);
