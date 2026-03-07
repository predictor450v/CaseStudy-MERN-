// Variable with explicit string type
let city: string = "Kolkata";

// Variable with explicit number type
let temperature: number = 32;

// Variable with inferred type (TypeScript figures out it is boolean)
let isRaining = true;

// Function that takes all three as parameters and prints a weather report
function weatherReport(city: string, temperature: number, isRaining: boolean): void {
  console.log("In " + city + ", it is " + temperature + "C. Is it raining? " + isRaining);
}

// Calling the function with our variables
weatherReport(city, temperature, isRaining);