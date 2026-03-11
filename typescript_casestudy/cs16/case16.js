// --- DrinkOrder (Subject) ---
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    DrinkOrder.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    DrinkOrder.prototype.notify = function (drinkName) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(drinkName);
        }
    };
    DrinkOrder.prototype.serveDrink = function (drinkName) {
        console.log("\nServing: ".concat(drinkName));
        this.notify(drinkName);
    };
    return DrinkOrder;
}());
// --- CustomerNotifier Observer ---
var CustomerNotifier = /** @class */ (function () {
    function CustomerNotifier(customerName) {
        this.customerName = customerName;
    }
    CustomerNotifier.prototype.update = function (drinkName) {
        console.log("  [CustomerNotifier] ".concat(this.customerName, " notified: \"").concat(drinkName, "\" is ready!"));
    };
    return CustomerNotifier;
}());
// --- PromotionSystem Observer ---
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
        this.promotions = {
            Latte: "Buy 2 Lattes, get 1 free!",
            Espresso: "Double shot Espresso — 20% off today!",
            Smoothie: "Add a muffin to your Smoothie for only $1!",
        };
    }
    PromotionSystem.prototype.update = function (drinkName) {
        var _a;
        var offer = (_a = this.promotions[drinkName]) !== null && _a !== void 0 ? _a : "No current promotion for this drink.";
        console.log("  [PromotionSystem] Special offer: ".concat(offer));
    };
    return PromotionSystem;
}());
// --- Test ---
var drinkOrder = new DrinkOrder();
var alice = new CustomerNotifier("Alice");
var bob = new CustomerNotifier("Bob");
var promotionSystem = new PromotionSystem();
drinkOrder.addObserver(alice);
drinkOrder.addObserver(bob);
drinkOrder.addObserver(promotionSystem);
drinkOrder.serveDrink("Latte");
drinkOrder.serveDrink("Espresso");
drinkOrder.removeObserver(bob);
drinkOrder.serveDrink("Smoothie");
