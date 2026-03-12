// --- Interface ---
interface PaymentGateway {
  processPayment(amount: number): boolean;
}

// --- PaymentProcessor ---
class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  process(amount: number): void {
    console.log(`\nAttempting to process payment of $${amount}...`);
    const success = this.gateway.processPayment(amount);
    if (success) {
      console.log(`Payment of $${amount} completed successfully.`);
    } else {
      console.log(`Payment of $${amount} failed. Please try another method.`);
    }
  }
}

// --- BankTransferGateway ---
class BankTransferGateway implements PaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`  [BankTransferGateway] Connecting to bank...`);
    console.log(`  [BankTransferGateway] Transferring $${amount} via bank transfer.`);
    return true;
  }
}

// --- MockFailingGateway ---
class MockFailingGateway implements PaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`  [MockFailingGateway] Simulating network failure for $${amount}.`);
    return false;
  }
}

// --- Test ---
const bankProcessor = new PaymentProcessor(new BankTransferGateway());
bankProcessor.process(250);

const failingProcessor = new PaymentProcessor(new MockFailingGateway());
failingProcessor.process(99);
