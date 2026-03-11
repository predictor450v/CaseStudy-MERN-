type Instructor = {
  name: string;
  coursesTaught: string[];
};

type Admin = {
  name: string;
  permissions: string[];
};

// 1. Union type
type InstructorOrAdmin = Instructor | Admin;

// 2. Readonly utility type
type Assignment = { title: string; dueDate: Date; points: number };

type ReadonlyAssignment = Readonly<Assignment>;

// 3. Mapped type with string values
type LearnerStats = { quizzes: number; videos: number; assignments: number };

type StatsAsStrings = { [K in keyof LearnerStats]: string };

// --- Usage ---

const user: InstructorOrAdmin = { name: "Dr. Carter", coursesTaught: ["TypeScript 101"] };

const assignment: ReadonlyAssignment = {
  title: "Generics Lab",
  dueDate: new Date("2025-06-01"),
  points: 100,
};

// assignment.points = 50; // Error: cannot assign to 'points' because it is a read-only property

const stats: StatsAsStrings = {
  quizzes: "8 completed",
  videos: "12 watched",
  assignments: "5 submitted",
};

console.log(user);
console.log(assignment);
console.log(stats);