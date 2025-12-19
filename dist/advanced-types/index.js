"use strict";
var _a;
let employee2 = {
    id: 2,
    name: "James",
    retire: (date) => console.log(date),
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => console.log("drag"),
    resize: () => console.log("resize"),
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log("Hola");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = undefined;
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = 50;
const ride = {
    speed1: speed || 30,
    speed2: speed !== null && speed !== void 0 ? speed : 30,
};
const phone = document.getElementById("phone");
phone.value;
function render2(document) {
    document.move();
    document.fly();
}
function render3(document) {
    if (typeof document === "string")
        document.toUpperCase;
    if (document instanceof HTMLInputElement)
        document.value;
}
function processEvents() {
    while (true) {
    }
}
function reject(message) {
    throw new Error(message);
}
console.log("hello world");
//# sourceMappingURL=index.js.map