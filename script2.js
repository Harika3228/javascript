// section 1:printing & user interaction

// 1. print your name and designation in the console 
console.log("Name: Kanagala Harika");
console.log("Designation: Associate software engineer");

// 2. show an alert message 
alert("Welcome to Javascript");

// 3. Ask user using confirm() and print the result 
let coding = confirm("Do you like Javascript?");
console.log("Do you like Javascript?"+coding);

// 4. Take input using prompt() and print it 
let favcoding = prompt("Enter your favourite programming language:");
console.log("programming language:"+favcoding);

// 5. Display message on UI using document.writeln() 
document.writeln("Hello, welcome to Javascript programming!");

// section 2: console Methods 

// 6. print a number using console.log() 
console.log(200);

//7. print a warning message 
console.warn("This is a warning message");

//8. print an error message 
console.error("something went wrong");

//9. clear the console after printing above 3 messages 
console.clear();

// section 3: Data Types 

// 10. Create a variable with your name and print its type
let name = "Kanagala Harika";
console.log(name);
console.log(typeof name); // string

// 11. Store your age and print the datatype
let age = 22;
console.log(age);
console.log(typeof age); // number

// 12. Store a boolean value and print it
let isemployee = true;
console.log(isemployee);
console.log(typeof isemployee); // boolean

// 13. Declare a variable without value and print it
let value;
console.log(value); // undefined
console.log(typeof value); // undefined

// 14. Assign null to a variable and print it
let data = null;
console.log(data); // null
console.log(typeof data); // object (JavaScript behavior)

// section 4: Arrays 

// 15. Create an array of 5 fruits and print it
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits Array:", fruits);

// 16. Print the first and last element of the array
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// 17. Add one more fruit dynamically and print updated array
fruits.push("Pineapple");
console.log("After Adding Fruit:", fruits);

// 18. Remove the last element and print array
fruits.pop();
console.log("After Removing Last Fruit:", fruits);

// 19. Find the length of the array
console.log("Array Length:", fruits.length);

// section 5 : objects 

// 20. Create an object for a student (name, age, course)
let student = {
    name: "Harika",
    age: 22,
    course: "B.Tech",
    // nested array 
    fruits: ["Apple", "Banana", "Mango"]
};

// 21. Print the student name
console.log("Student Name:", student.name);

// 22. Add a new property (college) dynamically
student.college = "KITS Engineering College";
console.log("After Adding College:", student);

// 23. Access nested array inside object
console.log("First Fruit:", student.fruits[0]);
console.log("All Fruits:", student.fruits);

// 24. Update a property value
student.age = 23;
console.log("Updated Age:", student.age);

// section 6 : operators 

// Declare two numbers
let a = 10;
let b = 5;

// 25. Add two numbers and print result
console.log("Addition:", a + b);

// 26. Subtract two numbers
console.log("Subtraction:", a - b);

// 27. Multiply two numbers
console.log("Multiplication:", a * b);

// 28. Divide two numbers
console.log("Division:", a / b);

// 29. Find remainder using %
console.log("Remainder:", a % b);

// 30. Use exponent operator (power)
console.log("Power:", a ** b);

// section 7: Increment and Decrement 

// 31. Post Increment
let num1 = 5;
console.log("Post Increment:", num1++); // prints 5, then increases
console.log("After Post Increment:", num1); // 6

// 32. Pre Increment
let num2 = 5;
console.log("Pre Increment:", ++num2); // increases first, then prints (6)

// 33. Difference between num++ and ++num
let x = 10;
console.log("num++:", x++); // 10 (then becomes 11)
console.log("Value after num++:", x); // 11

let y = 10;
console.log("++num:", ++y); // 11 (increments first)

// 34. Decrement Operator
let num3 = 8;
console.log("Post Decrement:", num3--); // 8 (then becomes 7)
console.log("After Post Decrement:", num3); // 7

let num4 = 8;
console.log("Pre Decrement:", --num4); // 7

// 35 . predict output 
let d = 5;
let e = d++; // b = 5, a becomes 6 
let f =++d;  // a becomes 7, c = 7

console.log("a:", a); //7 
console.log("b:", b); //5
console.log("c:", c); //7

// 8 . Real-Time Logic Tasks 

// 36. Ask user age and check if eligible to vote
let userage = prompt("Enter your age:");
if (userage >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// 37. Ask user name and greet
let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// 38. Store marks in array and print highest value
let marks = [85, 92, 78, 96, 88];
let highest = Math.max(...marks);
console.log("Marks:", marks);
console.log("Highest Marks:", highest);

// 39. Create object for fruits category and access values
let fruitsCategory = {
    tropical: ["Mango", "Pineapple"],
    citrus: ["Orange", "Lemon"],
    berries: ["Strawberry", "Blueberry"]
};

console.log("Tropical Fruits:", fruitsCategory.tropical);
console.log("First Citrus Fruit:", fruitsCategory.citrus[0]);

// 40. Combine prompt + array
let favFruits = [];

favFruits.push(prompt("Enter your 1st favorite fruit:"));
favFruits.push(prompt("Enter your 2nd favorite fruit:"));
favFruits.push(prompt("Enter your 3rd favorite fruit:"));

console.log("Your Favorite Fruits:", favFruits);