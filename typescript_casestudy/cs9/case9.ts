// 1. Define a CustomerID alias for string
type CustomerID = string;

// 2. Create a Customer object alias
type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

// 3. Define OrderStatus and processOrder function type alias
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

// 4. Container<T> generic wrapping a Customer object
type Container<T> = {
  value: T;
  createdAt: Date;
};

// --- Usage Examples ---

const customerId: CustomerID = "cust-001";

const customer: Customer = {
  id: customerId,
  name: "Alice Johnson",
  email: "alice@example.com",
};

const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order #${orderId}`);
  callback("processing");
};

processOrder(42, (status) => {
  console.log(`Order status: ${status}`);
});

const customerContainer: Container<Customer> = {
  value: customer,
  createdAt: new Date(),
};

console.log(customerContainer);