var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.items = [];
    }
    FeedbackBox.prototype.add = function (item) {
        this.items.push(item);
    };
    FeedbackBox.prototype.getAll = function () {
        return this.items;
    };
    return FeedbackBox;
}());
function getFirstItem(arr) {
    return arr[0];
}
// --- Usage ---
var stringBox = new FeedbackBox();
stringBox.add("Great service!");
stringBox.add("Loved the experience.");
console.log(stringBox.getAll());
var numberBox = new FeedbackBox();
numberBox.add(5);
numberBox.add(3);
console.log(numberBox.getAll());
console.log(getFirstItem(["apple", "banana", "cherry"])); // "apple"
console.log(getFirstItem([10, 20, 30])); // 10
console.log(getFirstItem([])); // undefined
