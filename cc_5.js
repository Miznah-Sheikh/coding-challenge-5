// Task 1: Customer Profile
const customer = {
    name: "Musa Malhi",
    age: 35,
    email: "musamalhi@email.com"
};
console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);

// Task 2: Order Details
const order = {
    orderId: 29780,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();

// Task 3: Shopping Cart
let cartItems = ["Laptop", "Mouse", "Keyboard"];
cartItems.push("Headphones");
cartItems.pop();
cartItems.unshift("Monitor");
cartItems.shift();
console.log("Final Cart Items:", cartItems);

// Task 4: Price Adjustments
const prices = [200, 300, 400];
const discountedPrices = prices.map(price => price * 0.8);
console.log("Discounted Prices:", discountedPrices);

// Task 5: Product Availability
const inventory = [5, 0, 10, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log("Available Products:", availableProducts);

// Task 6: Revenue Calculation
const sales = [600, 400, 200, 300];
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);
console.log("Total Revenue:", totalRevenue);

// Task 7: Customer Search
const customers = ["Alice", "Bobby", "Charles", "Davis"];
const foundCustomer = customers.find(customer => customer === "Charles");
console.log("Customer Found:", foundCustomer);

// Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    console.log(`Tax on $${amount} at ${taxRate * 100}% rate: $${tax}`);
    return tax;
}
calculateTax(1000, 0.07);

// Task 9: Discount Application
const applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
};
applyDiscount(200, 0.15);

// Task 10: Loyalty Points
const calculatePoints = purchaseAmount => {
    const points = Math.floor(purchaseAmount / 9);
    console.log(`Loyalty Points Earned: ${points}`);
    return points;
};
calculatePoints(275);
