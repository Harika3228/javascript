// 1
var a = 10;
a = 20;
var a = 30;
console.log(a); // output: 30 var allows redeclaration so final value is 30

// 2
var a = 5;
var a = 15;
console.log(a); // output: 15 redeclared and updated value is 15

// 3
var a = 1;
a = 2;
a = 3;
console.log(a); // output: 3 last assigned value is 3 so printed 3

// 4
var a = 7;
a = 14;
var a = 21;
a = 28;
console.log(a); //output:28 keeps updating so final value is 28

// 5
var a = 100;
var a = 200;
a = 300;
console.log(a); //output: 300 var allows redeclaration and reassignment so final value is 300

// 6
var a = 9;
console.log(a); //output:9 

// 7
var a = 11;
a = 22;
console.log(a); //output:22 


// 8
var a = 50;
var a = 60;
var a = 70;
console.log(a); //output:70 var allows multiple redeclarations 

// 9
var a = 2;
a = 4;
a = 6;
var a = 8;
console.log(a); //output:8

// 10
var a = 99;
a = 88;
console.log(a); //output:88


// 11
let b = 10;
b = 20;
console.log(b);//output:20 let allows reassignment so value becomes 20

// 12
let b = 5;
b = 15;
b = 25;
console.log(b); //output:25

// 13
let b = 1;
console.log(b);//output:1 let allows declaration and assignment, so value is 1

// 14
let b = 7;
b = 14;
console.log(b); //output:14

// 15
let b = 100;
b = 200;
b = 300;
console.log(b);//output:300 let allows reassignment so value becomes 300

// 16
let b = 9;
let b = 18;
console.log(b);//syntaxError: Identifier 'b' has already been declared. let does not allow redeclaration in the same scope

// 17
let b = 50;
b = 60;
let b = 70;
console.log(b);//SyntaxError: Identifier 'b' has already been declared.

// 18
let b = 2;
b = 4;
console.log(b);//output:4 let allows reassignment, so value becomes 4

// 19
let b = 99;
b = 88;
b = 77;
console.log(b);//output:77 

// 20
let b = 11;
b = 22;
console.log(b); //output:22


// 21
const c = 10;
console.log(c); //output:10

// 22
const c = 5;
c = 15;
console.log(c); //TypeError: Assignment to constant variable.

// 23
const c = 1;
const c = 2;
console.log(c); //SyntaxError: Identifier 'c' has already been declared.

// 24
const c = 7;
console.log(c); //output:7

// 25
const c = 100;
console.log(c); //output:100

// 26
const c = 50;
c = 60;
console.log(c); //TypeError: Assignment to constant variable.

// 27
const c = 9;
console.log(c); //output:9

// 28
const c = 20;
const c = 30;
console.log(c); //SyntaxError: Identifier 'c' has already been declared.

// 29
const c = 99;
console.log(c); //output:99

// 30
const c = 11;
c = 22;
console.log(c); //TypeError: Assignment to constant variable.


// 31
var a = 1;
var a = 2;
var a = 3;
console.log(a); //output: 3

// 32
var a = 10;
a = 20;
a = 30;
var a = 40;
console.log(a); //output: 40

// 33
var a = 5;
a = 15;
console.log(a); //output: 15

// 34
var a = 100;
var a = 200;
var a = 300;
a = 400;
console.log(a); //output: 400

// 35
var a = 7;
console.log(a); //output: 7

// 36
let b = 3;
b = 6;
b = 9;
console.log(b);//output: 9

// 37
let b = 12;
let b = 24;
console.log(b); //SyntaxError: Identifier 'b' has already been declared.

// 38
let b = 8;
b = 16;
console.log(b); //output: 16

// 39
const c = 2;
console.log(c); //output: 2

// 40
const c = 4;
c = 8;
console.log(c); //TypeError: Assignment to constant variable.
   