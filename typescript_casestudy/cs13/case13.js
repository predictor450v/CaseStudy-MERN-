function describePerson(name, age) {
    var ageDisplay = age !== undefined ? age : "Unknown";
    console.log("Name: ".concat(name, ", Age: ").concat(ageDisplay));
}
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
}
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100)); // 90
console.log(calculatePrice(100, 0.2)); // 80
