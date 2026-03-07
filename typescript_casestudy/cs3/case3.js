// Variable with explicit string type
var city = "Kolkata";
// Variable with explicit number type
var temperature = 32;
// Variable with inferred type (TypeScript figures out it is boolean)
var isRaining = true;
// Function that takes all three as parameters and prints a weather report
function weatherReport(city, temperature, isRaining) {
    console.log("In " + city + ", it is " + temperature + "C. Is it raining? " + isRaining);
}
// Calling the function with our variables
weatherReport(city, temperature, isRaining);
