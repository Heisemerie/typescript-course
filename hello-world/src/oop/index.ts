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
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  //   nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname = ""
  ) {
    //method does not have a return type annotation because it always returns an instance of its constructor
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
    // this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
    this.calculateTax();
  }

  private calculateTax() {
    //...
  }

  getBalance(): number {
    return this._balance;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid Amount");
    this._balance = amount;
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

//Access Control Keywords
//In TS we have other modifiers for controlling access to properties and methods and use these properties to write more robust code
//For example, in our current implementation, we have the deposit method for updating the balance
//Let's say in the future we also want to record transactions in this account, so everytime we deposit or withdraw money, we want to record the transaction so we know who paid, how much and when
//so we are going to have a new property in this class called 'transactions', which is going to be an array of transaction objects
//then everytime we want to update the balance, just before doing so, we record a transaction object
//the problem with this implementation is that once we have an account object we can directly update its balance (inside or outside the class) because it is not readonly
//this is a problem because it bypasses the method to update the transaction
//this is where we can use access modifiers/control keywords to solve this problem
//There are three access modifiers in TS; public, private and protected
//Properties are public by default
//Private properties cannot be accessed from outside the account class only from within the class
//By convention we prefix private properties with an underscore (use F2 to update all instances at once)
//If we want to show a private property (_balance) to a user use a method to return it
console.log(ejikeAccount.getBalance());
//access modifiers can also be applied to methods
//let's say we want a 'calculateTax' method that is only called in the deposit method we can use the private keyword

//Parameter Properties
//To write more concise code, you can add the modifiers in the constructor parameter declaration, this tells the compiler to create the parameter and initalize it in one go
//this prevents separate declaration and initialization in the constructor and type declaration in the class (I commented them out)
//these are called parameter properties

//Getters and Setters
//the 'getBalance' method is perfectly fine but there is a better way using getters and setters
//getters and setters enforce uniform syntax for properties and methods
console.log(ejikeAccount.balance);
//getters also prevent you from assigning (setting) a new value
//let's assume we want to update the balance outside depositing or withdrawing money, we can implement a setter where we get a value and validate it
//setters help enforce validation with the uniform syntax which prevents bypass unlike normal methods
ejikeAccount.balance = 50;

//Index Signatures
//In JS you can create an object and add properties to it dynamically, this is not possible in TS as it is strict about the shape of objects
//In situations where we need to add properties dynamically, we use index signatures
//Let's say we're building a ticketing application for concerts and for each concert we want to know who is sitting where, we create a class called 'SeatAssignment'
//In a venue you can have seats like A1, A2, ... and we want to know who is sitting on each seat, rather than creating individual seat properties or what if the seats are numbered differently with a different numbering system
class SeatAssignment {
  //   A1: string; //'John Smith'
  //   A2: string; //'Ejike Mbah'
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "John Smith";
seats.A2 = "Ejike Mbah";
seats["A3"] = "James Dick"; //access with square bracket notation
//so using index signatures we can create properties dynamically and still have type safety

//Static Members
//let's imagine we're building a ride sharing application like uber so people can use their phones and request a ride
//let's say we ignore other listed properties and want to keep track of the active rides
class Ride {
  // passenger
  // pickupLocation
  // dropOffLocation
  private static _activeRides: number = 0;

  start() {
    // this.activeRides++;
    Ride._activeRides++;
  }
  stop() {
    // this.activeRides--;
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// console.log(ride1.activeRides); //logs 1
// console.log(ride2.activeRides); //logs 1

//they both log 1 because they are independent objects in memory tracking their individual 'activeRides' rather than the total active rides
//the solution is a single global place to store the 'activeRides' this is where we use static members

//A static member (property or method) is a member that belongs to a class and not an object, so we only have one instance of that member in memory
//we add the static keyword in front of the member
//replace 'this' with the classname (ie 'Ride') in the method definition in the class
console.log(Ride.activeRides); //the property belongs to the 'Ride' class
//use access modifiers to make 'activeRides' private and define a public getter to read its value to prevent external modification
//set the getter to static to add it to the class and not the object instance

//Inheritance
//Sometimes we deal with classes that have some commnality
//Student and Teacher class can have common properties like firstName, lastName and fullName then walk() and talk() methods
//Rather than write the code (properties) twice in the Student and Teacher class respectively, we write it once and reuse in different places
//We extract these common properties and methods and put them in a separate class like Person and have Student and Teacher inherit these common properties
//Inheritance is a mechanism that allows us to reuse code
//The Person class is the Parent/Base/Super class
//The Teacher and Student class are Child/Derived/Sub class
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking...");
  }
}

//use the extends keyword to create the inheritance
class Student extends Person {
  //avoid using Parameter Properties for inherited members as they will be initialized in the super() constructor
  constructor(public studentId: number, firstName: string, lastName: string) {
    //use 'super()' to call the constructor of the parent class and pass the required parameters to initalize the inherited properties
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test...");
  }
}

let student1 = new Student(1, "James", "Bower");
student1.walk(); //student inherits members of the parent class
//as a best practice, you should implement each class in a separate file

//Method Overriding
//sometimes you want to change something in the inherited code
//for example take the fullName getter in the Person class
//Let's say we want to implement the teacher class and when getting the fullname of a teacher, we want to prefix their fullname with 'Professor'
//So in the Teacher class we want to change the implementation of the fullName getter (ie method overriding)
class Teacher extends Person {
  //the override keyword tells the TSC that we are overriding/changing the implementation of the method
  override get fullName() {
    return `Professor ${super.fullName}`; //call the method usng the super keyword to avoid rewriting the method's logic
  }
}
let teacher1 = new Teacher("John", "Smith");
console.log(teacher1.fullName);
//always use the override keyword. enable the compiler option to remind you to use it 'noImplicitOverride: true'