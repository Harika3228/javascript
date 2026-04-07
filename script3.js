// Taking user inputs
let name = prompt("Enter your Name:");
let age = Number(prompt("Enter your Age:"));
let salary = Number(prompt("Enter your Monthly Salary:"));
let loanAmount = Number(prompt("Enter Loan Amount:"));

// Display input values
console.log("Name:", name);
console.log("Age:", age);
console.log("Monthly Salary:", salary);
console.log("Loan Amount:", loanAmount);


// 2. Eligibility Check
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible ✅");
} else {
    console.log("Not Eligible ❌");
}

// 3. EMI Calculation
let emi = loanAmount;
emi /= 12;  // Assignment operator

console.log("EMI:", emi);

// 4. Loan Category (If-Else)
let loanCategory;

if (loanAmount > 500000) {
    loanCategory = "High Loan";
} else if (loanAmount > 200000) {
    loanCategory = "Medium Loan";
} else {
    loanCategory = "Low Loan";
}

console.log("Loan Category:", loanCategory);

// 5. Risk Level (Ternary Operator)
let riskLevel = (salary > 50000) ? "Low Risk" : "High Risk";

console.log("Risk Level:", riskLevel);

// 6. Customer Type (Switch)
let customerType;

switch (true) {
    case (emi > 40000):
        customerType = "Premium Customer";
        break;
    case (emi > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

console.log("Customer Type:", customerType);

// 7. Type conversion 

// Taking input
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Salary:");
let loanInput = prompt("Enter Loan Amount:");

// Before Conversion
console.log("Before conversion:", typeof ageInput);   // string
console.log("Before conversion:", typeof salaryInput); // string
console.log("Before conversion:", typeof loanInput);   // string


// Convert to Number
let Age = Number(ageInput);
let Salary = Number(salaryInput);
let LoanAmount = Number(loanInput);

// After Conversion
console.log("After conversion:", typeof Age);        // number
console.log("After conversion:", typeof Salary);     // number
console.log("After conversion:", typeof LoanAmount); // number