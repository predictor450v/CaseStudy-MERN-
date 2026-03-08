// --- Function Definitions ---

function displayMember(name: string, email?: string): void {
  const contact = email ?? "No email provided";
  console.log(`Member: ${name} | Contact: ${contact}`);
}

function calculateFines(...fines: number[]): number {
  return fines.reduce((total, fine) => total + fine, 0);
}

function computeMembershipFee(baseFee: number, discount: number = 0.1): number {
  return baseFee - baseFee * discount;
}

function vipGreet(name: string): string {
  return `Welcome, esteemed guest ${name}. Your VIP suite is ready.`;
}

function consoleGreet(name: string): void {
  console.log(`Hello, ${name}! Welcome to the library.`);
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

type ReportItem = { title: string; [key: string]: unknown };

function generateReport(items: ReportItem[], format: "text" | "json"): string {
  if (format === "json") {
    return JSON.stringify(items, null, 2);
  }
  return items.map((item, i) => `${i + 1}. ${item.title}`).join("\n");
}


// --- 1. displayMember ---
displayMember("Alice Johnson", "alice@example.com");
displayMember("Bob Smith");


// --- 2. calculateFines ---
const totalFines = calculateFines(5, 10, 2.5);
console.log(`Total fines: $${totalFines}`);


// --- 3. computeMembershipFee ---
console.log(`Fee (default 10% discount): $${computeMembershipFee(100)}`);
console.log(`Fee (20% discount): $${computeMembershipFee(100, 0.20)}`);


// --- 4. vipGreet and consoleGreet ---
for (const visitor of ["Alice", "Bob"]) {
  console.log(vipGreet(visitor));
  consoleGreet(visitor);
}


// --- 5. factorial(5) ---
console.log(`factorial(5) = ${factorial(5)}`);


// --- 6. Text and JSON reports ---
const books: ReportItem[] = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

console.log("--- Text Report ---");
console.log(generateReport(books, "text"));

console.log("--- JSON Report ---");
console.log(generateReport(books, "json"));