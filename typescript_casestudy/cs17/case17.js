var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// --- Base Content Class ---
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.title = title;
        this.author = author;
        this.isPublished = false;
    }
    Content.prototype.publish = function () {
        this.isPublished = true;
        console.log("\"".concat(this.title, "\" has been published."));
    };
    return Content;
}());
// --- Assignment Class ---
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dueDate = null;
        return _this;
    }
    Assignment.prototype.setDueDate = function (date, role) {
        if (this.isPublished) {
            console.log("Cannot update due date \u2014 \"".concat(this.title, "\" is already published."));
            return;
        }
        if (role !== "instructor") {
            console.log("Access denied. Only instructors can set the due date.");
            return;
        }
        this.dueDate = date;
        console.log("Due date set to: ".concat(date.toDateString()));
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate ? this.dueDate.toDateString() : "No due date set";
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
// --- Test ---
var assignment = new Assignment("TypeScript Generics Lab", "Dr. Carter");
console.log("Type: ".concat(assignment.getType()));
assignment.setDueDate(new Date("2025-07-01"), "student"); // denied
assignment.setDueDate(new Date("2025-07-01"), "instructor"); // allowed
console.log("Due date: ".concat(assignment.getDueDate()));
assignment.publish();
assignment.setDueDate(new Date("2025-08-01"), "instructor"); // blocked — already published
console.log("Due date: ".concat(assignment.getDueDate()));
