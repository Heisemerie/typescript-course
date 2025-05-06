"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let ejikeAccount = new Account(1, "Ejike", 0);
ejikeAccount.deposit(100);
console.log(ejikeAccount);
console.log(typeof ejikeAccount);
console.log(ejikeAccount instanceof Account);
//# sourceMappingURL=index.js.map