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
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    //method does not have a return type annotation because it always returns an instance of its constructor
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}
