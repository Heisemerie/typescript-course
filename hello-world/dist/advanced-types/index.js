"use strict";
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
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map