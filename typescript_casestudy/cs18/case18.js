// --- PaymentProcessor ---
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(gateway) {
        this.gateway = gateway;
    }
    PaymentProcessor.prototype.process = function (amount) {
        console.log("\nAttempting to process payment of $".concat(amount, "..."));
        var success = this.gateway.processPayment(amount);
        if (success) {
            console.log("Payment of $".concat(amount, " completed successfully."));
        }
        else {
            console.log("Payment of $".concat(amount, " failed. Please try another method."));
        }
    };
    return PaymentProcessor;
}());
// --- BankTransferGateway ---
var BankTransferGateway = /** @class */ (function () {
    function BankTransferGateway() {
    }
    BankTransferGateway.prototype.processPayment = function (amount) {
        console.log("  [BankTransferGateway] Connecting to bank...");
        console.log("  [BankTransferGateway] Transferring $".concat(amount, " via bank transfer."));
        return true;
    };
    return BankTransferGateway;
}());
// --- MockFailingGateway ---
var MockFailingGateway = /** @class */ (function () {
    function MockFailingGateway() {
    }
    MockFailingGateway.prototype.processPayment = function (amount) {
        console.log("  [MockFailingGateway] Simulating network failure for $".concat(amount, "."));
        return false;
    };
    return MockFailingGateway;
}());
// --- Test ---
var bankProcessor = new PaymentProcessor(new BankTransferGateway());
bankProcessor.process(250);
var failingProcessor = new PaymentProcessor(new MockFailingGateway());
failingProcessor.process(99);
