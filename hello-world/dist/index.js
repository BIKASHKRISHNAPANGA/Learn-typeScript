"use strict";
let age = 20;
let a = "bikash";
console.log(a + " " + age);
if (age < 50) {
    age += 10;
}
console.log(a + " " + age);
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(5), getUpper("apppa"));
let loginUser = (name, email, isPaid = false) => { return 55; };
console.log(loginUser("hhhh", "hjhjhdd"));
function getValue(myVal) {
    if (myVal > 5) {
        return myVal * 2;
    }
    else {
        return "200 OK";
    }
}
function consoleError(errmsg) {
    console.error(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
const user = {
    name: "bikash",
    email: "pangsbikashkrishna@gmail.com",
    isActive: true
};
function createUser({ name, isPaid }) { }
createUser({ name: "bikash", isPaid: false });
function createCource() {
    return { name: "bikash", price: 1000 };
}
let b = {
    name: "bikash",
    age: 25,
    email: "pangsbikashkrishna@gmail.com",
};
function createus(u) {
    console.log(u);
    return u;
}
createus({ name: "", email: "", isActive: true });
let myAb = {
    id: "adbs",
    name: "bikash",
    email: "@gmail.com",
    isActive: true,
};
myAb.name = "pratyush";
let k = (info) => {
    return info;
};
console.log(k(myAb));
//# sourceMappingURL=index.js.map