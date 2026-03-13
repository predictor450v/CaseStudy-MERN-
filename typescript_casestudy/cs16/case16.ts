// --- Observer Interface ---
interface Observer {
  update(drinkName: string): void;
}

// --- Subject Interface ---
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notify(drinkName: string): void;
}

// --- DrinkOrder (Subject) ---
class DrinkOrder implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(drinkName: string): void {
    for (const observer of this.observers) {
      observer.update(drinkName);
    }
  }

  serveDrink(drinkName: string): void {
    console.log(`\nServing: ${drinkName}`);
    this.notify(drinkName);
  }
}
// --- CustomerNotifier Observer ---
class CustomerNotifier implements Observer {
  constructor(private customerName: string) {}

  update(drinkName: string): void {
    console.log(`  [CustomerNotifier] ${this.customerName} notified: "${drinkName}" is ready!`);
  }
}

// --- PromotionSystem Observer ---
class PromotionSystem implements Observer {
  private promotions: Record<string, string> = {
    Latte: "Buy 2 Lattes, get 1 free!",
    Espresso: "Double shot Espresso — 20% off today!",
    Smoothie: "Add a muffin to your Smoothie for only $1!",
  };

  update(drinkName: string): void {
    const offer = this.promotions[drinkName] ?? "No current promotion for this drink.";
    console.log(`  [PromotionSystem] Special offer: ${offer}`);
  }
}

// --- Test ---
const drinkOrder = new DrinkOrder();

const alice = new CustomerNotifier("Alice");
const bob = new CustomerNotifier("Bob");
const promotionSystem = new PromotionSystem();

drinkOrder.addObserver(alice);
drinkOrder.addObserver(bob);
drinkOrder.addObserver(promotionSystem);

drinkOrder.serveDrink("Latte");
drinkOrder.serveDrink("Espresso");

drinkOrder.removeObserver(bob);
drinkOrder.serveDrink("Smoothie");