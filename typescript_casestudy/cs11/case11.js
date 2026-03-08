var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var transactions = [
    "checkout", "return", "priority", "checkout",
    "cancelled", "return", "checkout", "priority"
];
// 1. Count each transaction type using a for loop
var transactionCounts = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0,
};
for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
    var tx = transactions_1[_i];
    transactionCounts[tx]++;
}
console.log("Transaction counts:", transactionCounts);
// 2. while(true) with break when a priority transaction arrives
var incomingTransactions = ["checkout", "return", "checkout", "priority", "cancelled"];
var index = 0;
while (true) {
    var current = incomingTransactions[index++];
    console.log("Processing: ".concat(current));
    if (current === "priority") {
        console.log("Priority transaction detected — halting queue.");
        break;
    }
}
// 3. do...while loop with a dynamic return queue
var returnQueue = ["order-101", "order-202"];
var queueIndex = 0;
do {
    var item = returnQueue[queueIndex];
    console.log("Handling return for: ".concat(item));
    if (queueIndex === 0) {
        returnQueue.push("order-303");
    }
    queueIndex++;
} while (queueIndex < returnQueue.length);
// 4. for...in to reset all inventory counts to zero
var inventory = {
    apples: 42,
    bananas: 17,
    oranges: 8,
    grapes: 25,
};
for (var item in inventory) {
    inventory[item] = 0;
}
console.log("Inventory after reset:", inventory);
// 5. Display visitor names in reverse order using for...of
var visitors = ["Alice", "Bob", "Carol", "David", "Eve"];
console.log("Visitors in reverse:");
for (var _a = 0, _b = __spreadArray([], visitors, true).reverse(); _a < _b.length; _a++) {
    var name_1 = _b[_a];
    console.log(name_1);
}
