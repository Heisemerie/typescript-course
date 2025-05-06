"use strict";
class Account {
    constructor(id, owner, _balance, nickname = "") {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
        this.calculateTax();
    }
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0)
            throw new Error("Invalid Amount");
        this._balance = amount;
    }
}
let ejikeAccount = new Account(1, "Ejike", 0);
ejikeAccount.deposit(100);
console.log(ejikeAccount);
console.log(typeof ejikeAccount);
console.log(ejikeAccount instanceof Account);
console.log(ejikeAccount.getBalance());
console.log(ejikeAccount.balance);
ejikeAccount.balance = 50;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "John Smith";
seats.A2 = "Ejike Mbah";
seats["A3"] = "James Dick";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test...");
    }
}
let student1 = new Student(1, "James", "Bower");
student1.walk();
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher1 = new Teacher("John", "Smith");
console.log(teacher1.fullName);
function printNames(people) {
    for (const person of people) {
        console.log(person.fullName);
    }
}
printNames([new Student(1, "James", "Brown"), new Teacher("John", "Smith")]);
class Principal extends Person {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
printNames([
    new Student(1, "James", "White"),
    new Teacher("John", "Doe"),
    new Principal("Mary", "Love"),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("rendering a cirlce");
    }
}
class Calendar {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=index.js.map