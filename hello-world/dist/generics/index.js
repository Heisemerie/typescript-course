"use strict";
var _a;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "Apple");
class KeyValuePair2 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair2 = new KeyValuePair2("1", "Mango");
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray("1");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers2 = ArrayUtils.wrapInArray(1);
function fetch(url) {
    url;
    return { data: null, error: null };
}
let result = fetch("url");
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
function echo(value) {
    return value;
}
echo(1);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
class SearchableStore extends Store {
    findSearch(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        category;
        return [];
    }
}
let store2 = new Store();
store2.add({
    name: "a",
    price: 1,
});
store2.find("name", "a");
//# sourceMappingURL=index.js.map