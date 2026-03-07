// Single-line comment

/*
  Multi-line comment:
  This file covers:
  - Variables with types
  - Functions with typed parameters
  - Classes with methods
*/

// 1️ Favorite Fruit Variable
let favoriteFruit: string = "Mango";
console.log("My favorite fruit is: " + favoriteFruit);

// 2️ Function that doubles a number
function doubleNumber(num: number): void {
  console.log("Double of " + num + " is: " + num * 2);
}

doubleNumber(5);
doubleNumber(12);

// 3️ Class with a sayHello method
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): void {
    console.log("Hello! My name is " + this.name);
  }
}

const person1 = new Person("Ayushman");
person1.sayHello();
