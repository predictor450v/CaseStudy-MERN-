type TransactionType = "checkout" | "return" | "priority" | "cancelled";

const transactions: TransactionType[] = [
  "checkout", "return", "priority", "checkout",
  "cancelled", "return", "checkout", "priority"
];

// 1. Count each transaction type using a for loop
const transactionCounts: Record<TransactionType, number> = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0,
};

for (const tx of transactions) {
  transactionCounts[tx]++;
}
console.log("Transaction counts:", transactionCounts);


// 2. while(true) with break when a priority transaction arrives
const incomingTransactions: TransactionType[] = ["checkout", "return", "checkout", "priority", "cancelled"];
let index = 0;

while (true) {
  const current = incomingTransactions[index++];
  console.log(`Processing: ${current}`);
  if (current === "priority") {
    console.log("Priority transaction detected — halting queue.");
    break;
  }
}


// 3. do...while loop with a dynamic return queue
const returnQueue: string[] = ["order-101", "order-202"];

let queueIndex = 0;
do {
  const item = returnQueue[queueIndex];
  console.log(`Handling return for: ${item}`);

  if (queueIndex === 0) {
    returnQueue.push("order-303");
  }

  queueIndex++;
} while (queueIndex < returnQueue.length);


// 4. for...in to reset all inventory counts to zero
const inventory: Record<string, number> = {
  apples: 42,
  bananas: 17,
  oranges: 8,
  grapes: 25,
};

for (const item in inventory) {
  inventory[item] = 0;
}
console.log("Inventory after reset:", inventory);


// 5. Display visitor names in reverse order using for...of
const visitors: string[] = ["Alice", "Bob", "Carol", "David", "Eve"];

console.log("Visitors in reverse:");
for (const name of [...visitors].reverse()) {
  console.log(name);
}