function describePerson(name: string, age?: number): void {
  const ageDisplay = age !== undefined ? age : "Unknown";
  console.log(`Name: ${name}, Age: ${ageDisplay}`);
}

function calculatePrice(basePrice: number, discount: number = 0.1): number {
  return basePrice - basePrice * discount;
}

describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80