// Task 1: E-commerce Cart System

let cart1 = [
    {name: "Frock", price: 1500},
    {name: "crocks", price: 1000},
]

let cart2 = [
    {name: "Watch", price: 2000},
]

let finalCart = [...cart1, ...cart2];
console.log(finalCart);

finalCart.push({name: "Bag", price: 800});
console.log(finalCart);

finalCart.pop();
console.log(finalCart);

let totalPrice = finalCart.reduce((total, item) => total + item.price, 0);
console.log("Total Price: " + totalPrice);

// Task 2: User Profile Management

let user = {
    name : "Kanagala Harika",
    role : "Trainee",
    salary : 20000
}
let updateUser = {
    role : "Associate Software Engineer",
    salary : 30000
}

let updatedUser = {...user, ...updateUser};
console.log(updatedUser);

let {name, role, salary} = updatedUser;
console.log(`${name} is now a ${role} earning ${salary}.`);

// Task 3: Function with Rest Operator

function teamScore(teamName,...scores) {
    console.log("Team:" + teamName);
    console.log("Scores:" + scores);

    let totalScore = scores.reduce((total, score) => total + score, 0);
    console.log("Total Score:" + totalScore);

    let highestScore = Math.max(...scores);
    console.log("Highest Score:" + highestScore);
}

teamScore("CSK", 100, 120, 150);

// Task 4: Nested Data Extraction (API Response Simulation)
// Concepts: nested destructuring

let apiData = {
    user: {
        name : "Kanagala Harika",
        address: {
            city: "Kodad",
            pincode: 508206
        }
    }
}
let {
    user: {
        name : userName,
        address: {
            city,
            pincode
        }
    }
} = apiData;

console.log(`${userName} lives in ${city} - ${pincode}.`);

//Task 5: Array Dashboard (Admin Panel)
//Concepts: splice, slice, includes, indexOf

let users = ["A", "B", "C", "D", "E"];

// Remove "C" and "D" using splice
users.splice(2, 2);
console.log(users);

//Add "X", "Y" in same place
users.splice(2, 0, "X", "Y");
console.log(users);

//Get only first 3 users using slice
let firstThreeUsers = users.slice(0, 3);
console.log(firstThreeUsers);

//Check if "B" exists
let hasB = users.includes("B");
console.log("Contains B: " + hasB);

//Find index of "E"
let indexOfE = users.indexOf("E");
console.log("Index of E: " + indexOfE);

// Task 6: Data Cleaning Tool
//Concepts: flat, filter, type handling

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]

// Flatten the array
let flattenedData = messyData.flat(Infinity);
console.log(flattenedData);

//Remove null and undefined
let cleanedData = flattenedData.filter(item => item !== null && item !== undefined);
console.log(cleanedData);

//Output clean array
console.log("Cleaned Data: " + cleanedData);

//Task 7: Sorting Bug Fix 
//Concepts: sort()

let prices = [500, 2000, 50, 5000]

//Sort correctly in ascending order
prices.sort((a, b) => a - b); // the default sort fails beacause it sorts elements as strings, not numbers
console.log("Sorted Prices: " + prices);

//Task 8: Analytics Report Generator
// Concepts: reduce 

let order = [
    {id: 1,amount: 1000},
    {id: 2,amount: 2000},
    {id: 3,amount: 3000}
]

let totalAmount = order.reduce((total, item ) => total + item.amount, 0);
console.log("Total Order Amount: " + totalAmount);

let avgAmount = totalAmount / order.length;
console.log("Average Order Amount: " + avgAmount);

//Task 9: Inventory System (Advanced)
//Concepts: combine everything

let inventory1 = ["Laptop", "Phone", "Tablet"];
let inventory2 = ["Monitor", "Keyboard", "Mouse"];

inventory2.push("Headphones");
console.log(inventory2);

inventory1.pop();
console.log(inventory1);

inventory2.splice(2, 1, "Smartphone");
console.log(inventory2);

console.log("Laptop in inventory1: " + inventory1.includes("Laptop"));

let combinedInventory = [...inventory1, ...inventory2];
console.log("Combined Inventory: " + combinedInventory);

// Task 10: 

function processData(...data) {
    let flatData = data.flat(Infinity);
    let uniqueData = [...new Set(flatData)];
    uniqueData.sort((a, b) => a - b);
    return uniqueData;
}

console.log(processData(1,2,[3,4],[5,[6]]))