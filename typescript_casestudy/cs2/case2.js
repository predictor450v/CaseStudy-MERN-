// Single-line comment
/*
  Multi-line comment:
  This file covers:
  - Variables with types
  - Functions with typed parameters
  - Classes with methods
*/
// 1️ Favorite Fruit Variable
var favoriteFruit = "Mango";
console.log("My favorite fruit is: " + favoriteFruit);
// 2️ Function that doubles a number
function doubleNumber(num) {
    console.log("Double of " + num + " is: " + num * 2);
}
doubleNumber(5);
doubleNumber(12);
// 3️ Class with a sayHello method
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello! My name is " + this.name);
    };
    return Person;
}());
var person1 = new Person("Ayushman");
person1.sayHello();
