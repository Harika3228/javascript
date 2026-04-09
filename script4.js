//Task-1 E-Commerce Discount System 
function calculateDiscount(productName, price) {
    let discount;
    if(price > 100000){
        discount = 0.20; //20%
    } else {
        discount = 0.10; //10%
    }
    let finalprice = price - (price*discount);

    return `product: ${productName} Final price: ${finalprice}`;
}
console.log(calculateDiscount("Laptop", 15000));

//Task-2 Order Processing using Callback 

function placeOrder(callback) {
    console.log("Order placed");
    callback(1500); // calling payment with amount
}

function payment(amount, successCallback) {
    console.log("Payment of " + amount + " successful");
    successCallback(); // calling order success
}

function orderSuccess() {
    console.log("Order delivered");
}

// Flow execution
placeOrder(function(amount) {
    payment(amount, orderSuccess);
});

//Task-3 Employee Data Loop System 
let employees = [
    { name: "Harika", salary: 50000 },
    { name: "Kavya", salary: 70000 }
];

for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];

    if (emp.salary > 60000) {
        console.log(emp.name + " → High Salary");
    } else {
        console.log(emp.name + " → Normal Salary");
    }
}

//Task-4 Login Attempts(While Loop) 
let password = "Harika123";
let attempts = 0;
let maxAttempts = 3;

while(attempts < maxAttempts) {
    let userInput = prompt("Enter your password:");

    attempts++;
    console.log("Attempt " + attempts);

    if(userInput === password) {
        console.log("Login success");
        break;
    }
}

//Task-5  Coupon Generator 
function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}


const generator = couponGenerator();

console.log(generator.next().value); // 10% OFF
console.log(generator.next().value); // 20% OFF
console.log(generator.next().value); // Free Delivery
console.log(generator.next().value); // Cashback
console.log(generator.next().value); // undefined (no more offers)

//Task-6 Shopping Cart Total 
let cart = [100, 200, 300, 400];
let total = 0;
for(let price of cart) {
    total += price;
}
console.log("Total Bill:", total);

//Task-7 User Profile System 
let user = {
    name: "Kanagala Harika",
    role: "Associate Software Engineer",
    location: "Hyderabad"
};
for(let key in user) {
    console.log(key + " : " + user[key]);
}

//Task-8 Factory Pattern 
function createPhone() {
    return "Phone";
}

function createBattery() {
    return "Battery";
}

function createCharger() {
    return "Charger";
}

// Combine all parts
function createOrder() {
    let phone = createPhone();
    let battery = createBattery();
    let charger = createCharger();

    return `Your Order: ${phone} + ${battery} + ${charger}`;
}

console.log(createOrder());

//Task-9 College Form With Default Values 
function collegeForm(name, department = "Not Assigned") {
    return `Name: ${name}, Department: ${department}`;
}

// Example usage
console.log(collegeForm("Harika", "ECE"));
console.log(collegeForm("Kavya"));

//Task-10 Currying-EMI Calculator
function emi(principal) {
    return function(rate) {
        return function(time) {
            let result = (principal * rate * time) / 100;
            return result;
        };
    };
}

let calculateEMI = emi(10000)(2)(12);
console.log("EMI:", calculateEMI);


//Task-11 Even/Odd Analyzer 
for(let a=1;a<=10;a++){
    if(a%2==0){
        console.log(a + " is even.");
    } else {
        console.log(a + " is odd.");
    }
}

//Task-12 Function Scope Debugging 
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:");
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log("Outside block:");
    console.log(a); //

    console.log(b); // 
    console.log(c); // 
}

testScope();

//Task-13 Real-Time Alert System 
(function () {
    console.log("Flash Sale: 50% OFF on Shirts");
})();


//Task-14 Marks Calculator With Return 
function marks(m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return `Total: ${total} Average: ${average}`;
}

console.log(marks(80, 90, 70));

//Task-15 Retry Offer System 
function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

// Create generator instance
const offers = offerGenerator();

// Function to get offers
function getOffer() {
    const result = offers.next();

    if (!result.done) {
        console.log(result.value);
    } else {
        console.log("All offers expired");
    }
}

// Simulating multiple attempts
getOffer(); // 10% OFF
getOffer(); // 20% OFF
getOffer(); // Free Delivery
getOffer(); // Cashback
getOffer(); // All offers expired
