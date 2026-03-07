// Object to store all answers - key is string (question ID), value is any type
let answers: { [key: string]: any } = {};

// Function that takes a question ID and an answer of any type
function recordAnswer(questionId: string, answer: any): void {
  answers[questionId] = answer;
}

// Adding three answers: a string, a number, and an array
recordAnswer("q1", "Ayushman");           // string answer
recordAnswer("q2", 25);                   // number answer
recordAnswer("q3", ["red", "blue", "green"]); // array answer

// Printing all recorded answers
console.log("All recorded answers:");
console.log(answers);

// Printing each answer individually
console.log("Answer to q1: " + answers["q1"]);
console.log("Answer to q2: " + answers["q2"]);
console.log("Answer to q3: " + answers["q3"]);
