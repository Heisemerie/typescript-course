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
//# sourceMappingURL=index.js.map