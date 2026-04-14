//Task-1 E-commerce Cart Total

let cart = [
  { name: "Frock", price: 500, qty: 2 },
  { name: "Crocks", price: 1500, qty: 1 },
  { name: "Ear Rings", price: 300, qty: 3 }
];

// Calculate total price using reduce
let totalPrice = cart.reduce((total, item) => {
  return total + (item.price * item.qty);
}, 0);

console.log("Total Price:", totalPrice);

// Print products above 1000 price using filter
let expensiveProducts = cart.filter(item => item.price > 1000);

console.log("Products above 1000:", expensiveProducts);

//  Get all product names in uppercase using map
let productNamesUpper = cart.map(item => item.name.toUpperCase());

console.log("Product Names in Uppercase:", productNamesUpper);

// Task-2 Student Result System 

let students = [
  { name: "Harika", marks: 85 },
  { name: "Kavya", marks: 45 },
  { name: "Bhabitha", marks: 60 },
  { name: "Unnathi", marks: 30 }
];

// Find failed students (marks < 50)
let failedStudents = students.filter(student => student.marks < 50);
console.log("Failed Students:", failedStudents);

// Check if any student got distinction (>80)
let hasDistinction = students.some(student => student.marks > 80);
console.log("Any Distinction:", hasDistinction);

// Check if all students passed (>35)
let allPassed = students.every(student => student.marks > 35);
console.log("All Students Passed:", allPassed);

// Find first student who failed
let firstFailed = students.find(student => student.marks < 50);
console.log("First Failed Student:", firstFailed);

// Task-3 Employee Salary Analysis 

let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 50000 }
];

//  Increase salary by 10% using map
let increasedSalary = employees.map(emp => {
  return {
    ...emp,
    salary: emp.salary * 1.10
  };
});
console.log("After 10% Increase:", increasedSalary);

// Get employees with salary > 30000
let highSalaryEmployees = employees.filter(emp => emp.salary > 30000);
console.log("Salary > 30000:", highSalaryEmployees);

// Calculate total salary expense
let totalSalary = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);
console.log("Total Salary Expense:", totalSalary);

// Sort employees by highest salary
let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Highest Salary:", sortedEmployees);

// Task-4 String Real Use Case(Search System) 

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

//  Check if "Mobile" exists using includes
let hasMobile = products.includes("Mobile");
console.log("Mobile exists:", hasMobile);

// Convert all to lowercase
let lowerCaseProducts = products.map(product => product.toLowerCase());
console.log("Lowercase Products:", lowerCaseProducts);

// Find index of "Tablet"
let tabletIndex = products.indexOf("Tablet");
console.log("Index of Tablet:", tabletIndex);

//  Convert array to string using join("-")
let productString = products.join("-");
console.log("Joined String:", productString);

// Task-5 Date Real-Time Task(Age Calculator) 

//  Take DOB (hardcoded here)
let dob = new Date("2004-03-02"); // YYYY-MM-DD format

// Calculate current age
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();

// Adjust if birthday not yet occurred this year
let monthDiff = today.getMonth() - dob.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
  age--;
}

//  Print result
console.log(`You are ${age} years old`);

// Task-6 Login Validation System 

let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "abcd" }
];

let inputUsername = "admin"; // hardcoded for testing
let inputPassword = "1234"; // hardcoded for testing

// Check if user exists using find
let foundUser = users.find(user => user.username === inputUsername);

// 2 & 3. Validate username & password
if (foundUser && foundUser.password === inputPassword) {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

// Task-7 Even Number Analyzer 

let numbers = [10, 15, 20, 25, 30];

// 1. Get all even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 2. Check if any odd number exists
let hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Any Odd Number Exists:", hasOdd);

// 3. Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log("All Numbers Are Even:", allEven);

// 4. Find first number > 20
let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First Number > 20:", firstGreaterThan20);

// Task-8 Bonus Challange 

let orders = [
  { id: 1, amount: 500, status: "delivered" },
  { id: 2, amount: 1500, status: "pending" },
  { id: 3, amount: 2000, status: "delivered" }
];

// 1. Total revenue of delivered orders
let totalDeliveredRevenue = orders
  .filter(order => order.status === "delivered")
  .reduce((total, order) => total + order.amount, 0);

console.log("Total Delivered Revenue:", totalDeliveredRevenue);

// 2. Get all pending orders
let pendingOrders = orders.filter(order => order.status === "pending");
console.log("Pending Orders:", pendingOrders);

// 3. Check if any order > 1000
let hasHighValueOrder = orders.some(order => order.amount > 1000);
console.log("Any Order > 1000:", hasHighValueOrder);

// 4. Sort orders by amount (ascending)
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Orders (Ascending):", sortedOrders);