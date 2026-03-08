class FeedbackBox<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

// --- Usage ---

const stringBox = new FeedbackBox<string>();
stringBox.add("Great service!");
stringBox.add("Loved the experience.");
console.log(stringBox.getAll());

const numberBox = new FeedbackBox<number>();
numberBox.add(5);
numberBox.add(3);
console.log(numberBox.getAll());

console.log(getFirstItem(["apple", "banana", "cherry"])); // "apple"
console.log(getFirstItem([10, 20, 30]));                  // 10
console.log(getFirstItem([]));                            // undefined