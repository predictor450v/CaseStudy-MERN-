// --- Roles ---
type Role = "instructor" | "student";

// --- Base Content Class ---
abstract class Content {
  protected isPublished: boolean = false;

  constructor(public readonly title: string, public readonly author: string) {}

  publish(): void {
    this.isPublished = true;
    console.log(`"${this.title}" has been published.`);
  }

  abstract getType(): string;
}

// --- Assignment Class ---
class Assignment extends Content {
  private dueDate: Date | null = null;

  setDueDate(date: Date, role: Role): void {
    if (this.isPublished) {
      console.log(`Cannot update due date — "${this.title}" is already published.`);
      return;
    }
    if (role !== "instructor") {
      console.log(`Access denied. Only instructors can set the due date.`);
      return;
    }
    this.dueDate = date;
    console.log(`Due date set to: ${date.toDateString()}`);
  }

  getDueDate(): string {
    return this.dueDate ? this.dueDate.toDateString() : "No due date set";
  }

  getType(): string {
    return "Assignment";
  }
}

// --- Test ---
const assignment = new Assignment("TypeScript Generics Lab", "Dr. Carter");

console.log(`Type: ${assignment.getType()}`);

assignment.setDueDate(new Date("2025-07-01"), "student");    // denied
assignment.setDueDate(new Date("2025-07-01"), "instructor"); // allowed
console.log(`Due date: ${assignment.getDueDate()}`);

assignment.publish();

assignment.setDueDate(new Date("2025-08-01"), "instructor"); // blocked — already published
console.log(`Due date: ${assignment.getDueDate()}`);
