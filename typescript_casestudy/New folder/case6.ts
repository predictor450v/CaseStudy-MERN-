// The return type is "never" when the function always throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// description is optional so we use "string | undefined"
function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {

  // If amount is negative, throw an error using the never function
  if (amount < 0) {
    throwError("Amount cannot be negative: " + amount);
  }

  // If description is missing, use a default message
  if (description === undefined) {
    description = "No description provided";
  }

  // Print a summary of the transaction
  console.log("Transaction Summary:");
  console.log("Amount: " + amount);
  console.log("Description: " + description);
  console.log("Type: " + (isCredit ? "Credit" : "Debit"));
  console.log("-------------------");
}

// Valid transaction with all details
processTransaction(500, "Salary received", true);

// Valid transaction with no description (undefined)
processTransaction(200, undefined, false);

// Wrapped in try-catch so the program does not crash
try {
  processTransaction(-100, "Invalid payment", true);
} catch (error) {
  console.log("Caught an error: " + (error as Error).message);
}