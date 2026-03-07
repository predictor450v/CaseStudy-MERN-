
// Declaring score with let and assigning a number
let score: number = 100;
console.log("Outside block, score is: " + score);

// Inside a block, declaring another score with a different value
if (true) {
  let score: number = 200; // this is a different score, only lives inside this block
  console.log("Inside block, score is: " + score);

  // Try to re-declare score in the same block - this will give a RED LINE error
  // let score: number = 300; // ERROR: Cannot redeclare block-scoped variable 'score'
}

// Back outside, score is still 100
console.log("Back outside block, score is still: " + score);

// Declaring a constant - convention is to use UPPER_CASE for constants
const COUNTRY: string = "India";
console.log("My favorite country is: " + COUNTRY);

// Try to change the value of COUNTRY - this will give a RED LINE error
// COUNTRY = "Japan"; // ERROR: Cannot assign to 'COUNTRY' because it is a constant