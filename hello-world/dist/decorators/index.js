"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => console.log("Inserting the component in the DOM");
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component1(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => console.log("Inserting the component in the DOM");
    };
}
class ProfileComponent1 {
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
class ProfileComponent2 {
}
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Person1 {
    say(message) {
        console.log(`Person says ${message}`);
    }
}
__decorate([
    Log
], Person1.prototype, "say", null);
let person = new Person1();
person.say("hello");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person2.prototype, "fullName", null);
let person2 = new Person2("Mbah", "Ejike");
console.log(person2.fullName);
//# sourceMappingURL=index.js.map