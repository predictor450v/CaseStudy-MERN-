// --- Usage ---
var user = { name: "Dr. Carter", coursesTaught: ["TypeScript 101"] };
var assignment = {
    title: "Generics Lab",
    dueDate: new Date("2025-06-01"),
    points: 100,
};
// assignment.points = 50; // Error: cannot assign to 'points' because it is a read-only property
var stats = {
    quizzes: "8 completed",
    videos: "12 watched",
    assignments: "5 submitted",
};
console.log(user);
console.log(assignment);
console.log(stats);
