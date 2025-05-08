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
  url
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

//Generic Constraints
//sometimes we need to constrin generic type arguments
function echo<T extends number | string | { name: string }>(value: T): T {
  //we can constrain by primitive values, object shapes, interfaces and classes
  return value;
}
echo(1); //by default we can call the function with any value type
//what if we want to constrain or limit the type of value we can pass to the function
//we use the 'extends' keyword

//Extending Generic Classes
//let's talk about generic classes and inheritance
//let's say we're building an ecommerce application with object like products, categories, shopping carts...
interface ProDuct {
  name: string;
  price: number;
}
//let's say we need a mechanism for storing these objects
//we want to be able to store different kinds of objects; products, categories, shopping carts...
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  //T is ProDuct
  //keyof T is name | price
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
//to extend this class we can;

//pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let store = new CompressibleStore<ProDuct>();
store.compress();

//restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findSearch(name: string): T | undefined {
    //added 'Search' during 'The keyof operator' section
    return this._objects.find((obj) => obj.name === name);
  }
}

//fix the generic type parameter
class ProductStore extends Store<ProDuct> {
  filterByCategory(category: string): Product[] {
    category
    return [];
  }
}

//The keyof operator
//implementing the find method in the Store class from the previous example
let store2 = new Store<ProDuct>();
store2.add({
  name: "a",
  price: 1,
});
store2.find("name", "a");
// store2.find('nonExistingProperty', 1) //this will crash the program because there is no property by this name in the ProDuct interface
//the 'keyof' operator returns a union of properties of a given type

//Type Mapping
//sometimes we need to base a type on another type
//what if somewhere in our application we need a ProDuct with readonly properties
//One solution is to duplicate the 'ProDuct' interface with readonly properties
interface ReadOnlyProperties {
  readonly name: string;
  readonly price: number;
}
//this is very repetitive
//and everytime we add a new property to the first interface, we have to remember to add it to the second one
//rather use type mapping (a new type based on an existing type)
//we add the properties dynamically and make them readonly
type ReadOnlyProDuct = {
  //we use two familiar techniques;
  //Index signature
  //keyof
  readonly [Property in keyof ProDuct]: ProDuct[Property];
};
//if we need another type of readonly property
type ReadOnly<T> = {
  readonly [Property in keyof T]?: T[Property]; //you can add ? to make them optional in one go 
};

//you can get more details googling TS utility types on typescriptlang.org 
