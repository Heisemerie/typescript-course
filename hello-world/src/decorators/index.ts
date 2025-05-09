//Intoduction
//What are decorators
//Class decorators
//Method decorators
//Property decorators
//Accessor decorators
//Parameter decorators

//What are decorators?
//Decorators are attributes you can add to classes and their members to change how they behave
//TS does not have any built-in decorators
//Under the hood decorators are functions that get called by the JS runtime, it passes the class to the function
//In that function we can modify the class; we can add new properties, methods or change the implementation of existing methods
//To create decorators, we have to enable a special compiler feature; "experimentalDecorators"

//Class decorators
function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () =>
    console.log("Inserting the component in the DOM");
}
@Component
class ProfileComponent {}

//Parameterized Decorators
//Sometimes we need to pass arguments to or decorators
type ComponentOptions = {
  selector: string;
};
//Decorator factory; creates decorators
function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () =>
      console.log("Inserting the component in the DOM");
  };
}
@Component1({ selector: "#my-profile" })
class ProfileComponent1 {}

//Decorator composition
//we can also apply multiple decorators to a class or its members
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}
@Component
@Pipe
class ProfileComponent2 {}
//the 'Pipe' decorator runs before the 'Component' decorator.
//the idea comes from math where in the expression f(g(x)), g(x) runs before f(x)

//Method Decorators
//let's see how we can enhance our methods using decorators
//here instead of the constructor, we pass three different parameters used below
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  //the decriptor has a special property called 'value' that refers to the method
  const original = descriptor.value as Function; //save the original method and use type assertion for intellisense
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  }; //when redefining classes, always use a function expression and not arrow functions
}
class Person1 {
  @Log
  say(message: string) {
    console.log(`Person says ${message}`);
  }
}
let person = new Person1();
person.say("hello");

//Accessor decorators
//let's see how we can enhance our accessors (getters & setters) using decorators
//accessors are methods under the hood and therefore their decorators take the same parameters
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person2 = new Person2("Mbah", "Ejike");
console.log(person2.fullName);

//Property decorators
//let's define a decorator for enhancing a property
//we use a paramaterized decorator
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at lease ${length} characters long`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}
class UseR {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

let user1 = new UseR("1234");
console.log(user1.password);
