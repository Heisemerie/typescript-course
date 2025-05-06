//Introduction to OOP
//Classes
//Constructors
//Properties and Methods
//Access control keywords
//Getters and Setters
//Static members
//Index signatures (creating dynamic properties)
//Inheritance (technique for reusing code)
//Polymorphism
//Abstract classes
//Interfaces

//OOP
//It is a programming paradigm. JS supports functional and OOP techniques
//In OOP objects are the building blocks of the application
//An object is a unit that contains Data (state) and Operations (behavior)
//For example you can have a person object with data 'name' and 'email' and operations 'talk()' and 'dance()'
//They are referred to as properties and methods respectfully

//Creating Classes
//To create an object, first you need to create a class
//A class is a blueprint for creating objects (it's like an object factory)
//Let's say we want to represent the concept of a bank account with properties; id, owner, balance & methods deposit(), withdraw()
class Account {
  //define properties (they are only for TS and don't exist in JS)
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number, nickname = "") {
    //method does not have a return type annotation because it always returns an instance of its constructor
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

//Creating Objects
let ejikeAccount = new Account(1, "Ejike", 0); //using the 'new' operator you can create an instance of a class
ejikeAccount.deposit(100); //call the method
console.log(ejikeAccount);

//remember 'typeof' operator used for narrowing in Union and Unknown types...
console.log(typeof ejikeAccount); //the 'typeof' always returns object no matter what the underlying class is

//whatif you want to check the type of an object and see whether it is an instance of a given class, we use the 'instanceof' operator
console.log(ejikeAccount instanceof Account); //returns a boolean (true)
//therefore if you're using a type guard to narrow down a type and you're dealing with a custom object, always use the 'instanceof' operator

//Read-only and Optional Properties
//In TS we have modifiers that we can apply to our properties to help us write robust code
//For example let's say the id of a bank account should never change, in the above implementation we can change the id of a bank account anywhere in our code (in the deposit() method or outside the class)
//we can solve this problem with the 'readonly' modifier
//Now let's define a new property 'nickname' of type string, TS shows a compilation error because it hasn't been initialized
//to make it optional by appending it with a question mark (?) and give it a default value in the constructor
