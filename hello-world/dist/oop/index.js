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
        Ride.activeRides++;
    }
    stop() {
        Ride.activeRides--;
    }
}
Ride.activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map