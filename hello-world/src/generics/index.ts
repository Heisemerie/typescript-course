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

//Generic Interfaces
//we can also make our interfaces generic
//let's say we have a website with endpoints for getting a list of users and products
// http://mywebsite.com/users
// http://mywebsite.com/products
//let's define an interface for the return type of the URL
interface Result<T> {
  data: T | null;
  error: string | null; //add error if request fails
}
//let's define a function for calling the API endpoint
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}
//now let's define the interfaces for the user and product
interface User {
  username: string;
}
interface Product {
  title: string;
}
//let's see how we can use the fetch() function along with these interfaces
let result = fetch<User>("url"); //supply the appropriate type to the function
result.data?.username; //intellisense is available
