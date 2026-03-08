// --- Function Definitions ---
function displayMember(name, email) {
    var contact = email !== null && email !== void 0 ? email : "No email provided";
    console.log("Member: ".concat(name, " | Contact: ").concat(contact));
}
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    return fines.reduce(function (total, fine) { return total + fine; }, 0);
}
function computeMembershipFee(baseFee, discount) {
    if (discount === void 0) { discount = 0.1; }
    return baseFee - baseFee * discount;
}
function vipGreet(name) {
    return "Welcome, esteemed guest ".concat(name, ". Your VIP suite is ready.");
}
function consoleGreet(name) {
    console.log("Hello, ".concat(name, "! Welcome to the library."));
}
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
function generateReport(items, format) {
    if (format === "json") {
        return JSON.stringify(items, null, 2);
    }
    return items.map(function (item, i) { return "".concat(i + 1, ". ").concat(item.title); }).join("\n");
}
// --- 1. displayMember ---
displayMember("Alice Johnson", "alice@example.com");
displayMember("Bob Smith");
// --- 2. calculateFines ---
var totalFines = calculateFines(5, 10, 2.5);
console.log("Total fines: $".concat(totalFines));
// --- 3. computeMembershipFee ---
console.log("Fee (default 10% discount): $".concat(computeMembershipFee(100)));
console.log("Fee (20% discount): $".concat(computeMembershipFee(100, 0.20)));
// --- 4. vipGreet and consoleGreet ---
for (var _i = 0, _a = ["Alice", "Bob"]; _i < _a.length; _i++) {
    var visitor = _a[_i];
    console.log(vipGreet(visitor));
    consoleGreet(visitor);
}
// --- 5. factorial(5) ---
console.log("factorial(5) = ".concat(factorial(5)));
// --- 6. Text and JSON reports ---
var books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];
console.log("--- Text Report ---");
console.log(generateReport(books, "text"));
console.log("--- JSON Report ---");
console.log(generateReport(books, "json"));
