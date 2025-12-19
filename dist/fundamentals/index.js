"use strict";
let sales = 123456789;
let course = "typescript";
let isPublished = true;
let level;
function render(document) {
    console.log(document);
}
let scores = [1, 2, 3];
scores.forEach((n) => n.toExponential(2));
let user = [1, "Ejike"];
user[1].length;
user.push(1);
const small = 1;
const meduim = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let employee1 = {
    id: 1,
    name: "John",
    retire: (date) => console.log(date),
};
//# sourceMappingURL=index.js.map