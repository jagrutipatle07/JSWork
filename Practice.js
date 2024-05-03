// console.log("hello"); //text or String
// console.log(5); //number

// alert("Hello World");

// // Variable

// let firstname;
// let lastname; // ; is used to terminate the line

// firstname = "Jhon"; // "", '' used for Text / String
// lastname = "Cena";

// lastname = "Mark";
// console.log("Name = " ,firstname,lastname);

// const firstNumber = 8; //decleared + Assigned

// firstNumber = 10; // Can not Reassign

// console.log("Number - ", firstNumber);

// // let button = document.getElementById('btn'); // button
// // let text = document.getElementById('text'); //text

// // button.addEventListener('click', function(){  //change text on button click
// //     text.innerHTML = "Hii";
// // });

// // Variable - A variable is a container for storing data values.

// // let and const are used to declare a variable. (ES6) - 2015

// // var is also used to declare a variable but it is not recommended.

// // let firstname; //variable declearation
// // let lastname; //variable declearation

// // firstname = "Jhon"; //variable assignment  
// // firstname = "Mark"; //variable reassignment
 
// //  = is used to assign value to a variable , assignment operator
// // = "" , '' used for Text / String

// // let fullname = "Punam" //variable declearation + assignment

// // fullname = "Punam Singh" //variable reassignment

// // let fullname = 9 //variable redeclaration

// // We can not redeclare a variable using let keyword.

// // identifier - name of the variable

// // console.log(fullname);

// // const firstNumber = 9; //variable declearation + assignment
// // firstNumber = 10; //variable reassignment

// // const firstNumber = 10; //variable redeclaration

// // in const , we can not reassign a variable and we can not redeclare a variable.

// // console.log("first", firstNumber);

// // let firstNumber = 10;

// // Hoisting- JavaScript hoisting is the process of moving all the declarations to the top of the current scope (block scope / functional scope).

// // const firstNumber = 10; //variable redeclaration

// // console.log(firstname); //output - Jhon
// // console.log(lastname); //output - undefined

// //  var - global scope / functional scope
// // let and const - block scope

// // var - hositing
// // let and const - no hositing

// // Rule for naming JS variable:

// // 1. Variable names can only contain letters, numbers, $ and _.\
// // 2. Variable names can not start with a number.
// // 3. Variable names are case sensitive.
// // 4. Variable names can not contain spaces.
// // 5. Variable names should be descriptive.
// // 6. Variable names can not contain reserved words.


// // MultipleWords - camelCase,

// // namingConvention
// // camelCase; - JS
// // PascalCase; - React
// // snake_case; - Python
// // kebab-case, dash-case; - CSS



// // firstname = "Punam"; //valid

// // firstName;
// // fullname;
// // goingToShopping;


// // let name@name = "Punam"; //invalid

// // let 9name = "Punam"; //invalid

// // Varibale Types / Data Types

// // 1. String - Text
// // 2. Number - 1, 2, 3, 4, 5
// // 3. Boolean - true / false
// // 4. Object - {}
// // 5. Array - []
// // 6. Null - null
// // 7. Undefined - undefined

// //  String - Collection of characters
// let name = "Punam";
// let name2 = 'Sangeeta';

// const sentence = "I'm going to the market";
// const quotes = "He Said 'I am Learning JS'";

// let num1 = 10;
// const num2 = 20;
// var num3 = 30;

// let result = false;

// let test = 10 > 5;

// // console.log(test);

// // Array - Collection of data of same type or different type

// const array = [10, 5, "Punam", "Sangeeta", true];

// // console.log(array);
// // index based locations - index statrs from 0

// // console.log(array[5]);

// // object - Collection of key value pairs

// let student = {
//     name:"Punam",
//     age: 25,
//     location: "Pune",
//     phone: {
//         mobile: 1234567890,
//         landline: 1234567890
//     } 
// }

// // console.log(student.phone.mobile);

// // undefined - variable is declared but not assigned any value.

// let box;

// // console.log(box);

// // null - variable is declared and assigned null value.

// let box2 = null; // empty

// // console.log(box2);

// // Dynamically type language - JS

// let test1 = "10.7";

// // typeof - that returns its data type

// // console.log(typeof test1);

// // integer - 1, 2, 3
// // float - decimal number ( 1.3 , 1.4556)

// // Convert Number to String , String to Number

// let num4 = String(3);
// console.log(typeof num4);

// let num5 = Number("5");
// console.log(typeof num5);

// Arithmatic Operators

// + // Addition
// - // Subtraction
// * // Multiplication
// / // Division
// % // Modulus - returns reminder
// ** // Exponentiation - power

// let num6 = 10;
// let num7 = 3;


// console.log(Math.pow(num6,2))

// console.log(num6 ** 2);

// Calulate the  total second of March month;

// let days = 31;
// let hours = 24;
// let minutes = 60;
// let seconds = 60;

// let totalSeconds = days * hours * minutes * seconds;

// console.log(totalSeconds)

// Calculate total hours in a year.

// Increment and Decrement Operators

// Post Increment
// ++ // Increment
// -- // Decrement

// let num8 = 10;

// post increment - first return then increment
// pre increment - first increment then return

// console.log(num8--,"first");

// console.log(num8,"second");

// console.log(num8 -- ,"first"); // 10

// console.log(num8,"second"); // 9


// BODMAS

// console.log(9+9-5*5); 

// console.log(10 + 8 + "8") = 18 + "8" = "188";

// console.log(10 + 5 + "Hello" + 9 + 9);  // 10 + 5 = 15 + "Hello" = 15Hello + 9 = 15Hello9 + 9 = 15Hello99
// left to right

// let num10 = 10;
// let num11 = 20;
// let word = "ten";

// console.log(num10 + num11 + word);

// String + Number = String

//  + concatenation operator


// Assignment Operators --> =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x = x + 10;
// console.log(x);

// x += 10; // same as x = x + 10;
// console.log(x);

// let a = "JavaScipt";
// a += " is Awesome";
// console.log(a);

// x -= 2; // same as x = x - 2;
// console.log(x);

// x *= 2; // same as x = x * 2;
// console.log(x);

// x /= 2; // same as x = x / 2;
// console.log(x);

// x %= 2; // same as x = x % 2;
// console.log(x);

// x **= 2; // same as x = x ** 2;
// console.log(x);



// Comparison Operators --> ==, ===, !=, !==, >, <, >=, <=

// let a = 5;
// let b = "5";

// console.log(a == b); // checks only value
// console.log(a === b); // checks value and datatype
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// let a = "Java";
// let b = "Script";
// let output  = a < b;
// console.log(output);

// let x = "A";
// let y = "B";
// let output = x < y;
// console.log(output);

// let a = "Amit";
// let b = "Kumar";
// let z = a + " " + b;
// console.log(z);

// let x = 5;
// let y = "10" + x;
// console.log(y);



// Logical Operators --> &&, ||, !

// let a = 5;
// let b = 10;
// console.log(a == b && a < b);
// console.log(a == b || a < b);
// console.log(!(a == b));

// let a = 5;
// let b = 2;
// console.log(a**b);
// console.log(Math.pow(a,b));

// Primitive Data Types --> Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Reference / Non-Primitive Data Types --> Object, Array, Function


// Template literals - backticks(``)

// let fName = "Punam";
// let lName = "Kumari";
// console.log("My Name is " + fName + " " + lName);
// console.log(`My Name is ${fName} ${lName}`);

// let a = 5;
// let b = 10;
// let total = "Total amount is " + (a + b) + " only";
// let total = `Total amount is ${a + b} only`;
// console.log(total);

// let fName = "Punam";
// console.log(`Hello ${fName}`);

// let a = 10;
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a);
// console.log(a--);
// console.log(a);

// Conditional branching - if, else, else if

// let age = 19;
// if (age >= 18) {
//     console.log("You are eligible to vote");
// }

// let year = 2024;
// if (year % 4 == 0) {
//     console.log("This is a leap year");
//     console.log("I can vote");
// }

// let age = 15;
// if (age < 18) {
//     console.log("You are not eligible to vote");
// }
// else {
//     console.log("You are eligible to vote");
// }

// let speed = 60;
// if (speed < 20) {
//     console.log("You are driving too slow");
// }
// else if (speed >= 20 && speed <= 60) {
//     console.log("You are driving at a moderate speed");
// }
// else {
//     console.log("You are driving too fast");
// }


// Conditional operator "?:" or Ternary operator

// Syntax ----> let result = condition ? value1 : value2;

// let age = 15;
// let canVote = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(canVote);

// let speed = 80;
// let message = (speed < 20) ? "You are driving too slow" : (speed >= 20 && speed <= 60) ? "You are driving at a moderate speed" : "You are driving too fast";
// console.log(message);

// Switch statement

// let day = 8;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// Nullish Coalescing Operator - "??"

// The result of a ?? b is:
// A. if a is defined, then a,
// B. if a is undefined, then b.

// let a = 5;
// console.log(a ?? "Hello");

// let b = undefined;
// console.log(b ?? "Hello");

// let firstName;
// let lastName;
// let nickName = "SuperCoder";
// console.log(firstName ?? lastName ?? "Anonymous");
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// let height = 0;
// console.log(height ?? 100);
// console.log(height || 100);

// let height = 10;
// let width;
// let area = (height ?? 100) * (width ?? 50);
// console.log(area);

// let height;
// let width = 10;
// let area = (height ?? 100) * (50 ?? width ?? 100 ?? 10);
// console.log(area);


// Truthy and Falsy values

// Falsy values - false, 0, "", null, undefined, NaN

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let height = 0;
// console.log(height ?? 100);
// console.log(height || false || NaN);

// let a = "";
// let b = "";
// console.log(a ?? 5);
// console.log(b || 10);


// Falsy values - false, 0, "", null, undefined, NaN

// let isOpen = false;

// if (isOpen) {
//     console.log("The door is open");
// } else {
//     console.log("The door is closed");
// }

// let apples = 0;

// if (apples) {
//     console.log("We have apples");
// } else {
//     console.log("We have no apples");
// }

// let input = "";
// // let message = input || "Hello!";
// let message = "Hello!" || input;
// console.log(message);

// let fname = null;
// if (fname) {
//     console.log("We have a name");
// } else {
//     console.log("We have no name");
// }

// let fname;
// if(fname) {
//     console.log("Hi!" + fname);
// } else {
//     console.log("Hi! Guest");
// }



// let num1 = "Two";
// let num2 = 2;

// let result = num1/num2;
// console.log(result);

// if(isNaN(result)) {
//     console.log("The result is not a number");
// } else {
//     console.log(result);
// }



// console.log(Boolean("false"));
// console.log(Boolean(" "));
// console.log(Boolean("0"));
// console.log(Boolean([]));
// console.log(Boolean({}));


// String and Number comparison

// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka" > "Punam");
// console.log("Mee" > "Me");
// console.log("Priya" > "Priyanka");
// console.log("a" > "A");

// console.log("2" > 1); // "2" will convert to 2
// console.log("01" == 1); // "01" will convert to 1
// console.log("A" > 0);
// console.log("A" == 65);

// console.log(true > 0);
// console.log(false > 0);
// console.log(true == 1);
// console.log(false == 0);

// console.log("0" == 0);
// console.log(Boolean("0"));
// console.log(Boolean(0));

// console.log(typeof("0"));
// console.log(typeof(0));
// console.log(typeof(false));

// console.log(false === 0);
// console.log(null == undefined);
// console.log(null === undefined);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// console.log(3 > 2);
// console.log("orange" > "apple");
// console.log("apple" > "Apple");
// console.log("apple" > "app");
// console.log("apple" > "pineapple");
// console.log("10" > "2");
// console.log("10" > 2);
// console.log("20" > "22");
// console.log("20" > "2");
// console.log("20" > 2);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == 0);



// Assignment Questions

// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// let a = 10;
// let b = 5;

// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;
// let modulus = a % b;

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${quotient}`);
// console.log(`Modulus: ${modulus}`);

// let apples = 10;
// console.log(`I have ${apples} apples.`);


// 2. Take two numbers and only print the integer part when a is divided by b.
// let a = 10;
// let b = 3;

// let quotient = a / b;
// console.log(`Quotient: ${quotient}`);

// let modulus = a % b;
// console.log(`Modulus: ${modulus}`);

// console.log(modulus / b);

// console.log(`Integer part: ${quotient - modulus / b}`);

// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.

// let a = 2;
// let b = 3;

// let result = a ** b;
// console.log(`Result: ${result}`);

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

// let a = 10;
// let b = 3;

// let modulus = a % b;
// console.log(`Modulus: ${modulus}`);

// console.log(`Decimal part: ${modulus / b}`);

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

// let A = 80;
// let B = 90;
// let C = 70;
// let D = 85;
// let E = 95;

// let average = (A + B + C + D + E) / 5;
// console.log(`Average: ${average}`);

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.

// let costPrice = 100;
// let sellingPrice = 150;

// let profit = sellingPrice - costPrice;
// console.log(`Profit: ${profit}`);

// 7. Take a number and print out the last digit of the number.

// let number = 12340;
// let lastDigit = number % 10;
// console.log(`Last digit: ${lastDigit}`);

// 8. Take a 2 digit number and return the first and last digits.

// let number = 23;

// let firstDigit = Math.floor(number / 10);

// let lastDigit = number % 10;

// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);

// 9. Write a JavaScript program to find the largest of three numbers.

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let largest = num1;

// if (num2 > largest) {
//     largest = num2;
// }
// if (num3 > largest) {
//     largest = num3;
// }

// console.log(`Largest: ${largest}`);

// 10. Write a JavaScript program to check whether a number is even or odd.

// let number = 10;

// if (number % 2 === 0) {
//     console.log("Number is Even");
// } else {
//     console.log("Number is Odd");
// }

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

// let celsius = 100;
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log(`Fahrenheit: ${fahrenheit}`);

// let fahrenheit = 212;
// let celsius = (fahrenheit - 32) * 5 / 9;
// console.log(`Celsius: ${celsius}`);




// let num = 10_000_567;
// console.log(num);

// let num = 10_000_000;
// let num = 1e7;
// console.log(num);

// let num = 2300_000;
// let num = 2.3e6;
// console.log(num);

// let num = 56_000_000_000;
// let num = 5.6e10;

// let num = 0.02;
// let num = 2e-2;
// console.log(num);

// let num = 0.005;
// let num = 5e-3;

// console.log(1.23e3);

// console.log(1e-2 === 1/100);




// Rounding

// 1. Math.floor - Rounds down to the nearest integer

// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));
// console.log(Math.floor(-3.9));

// 2. Math.ceil - Rounds up to the nearest integer

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));
// console.log(Math.ceil(-3.9));


// Rounding

// 1. Math.floor - Rounds down to the nearest integer

// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));
// console.log(Math.floor(-3.9));

// 2. Math.ceil - Rounds up to the nearest integer

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));
// console.log(Math.ceil(-3.9));

// 3. Math.round - Rounds to the nearest integer
// .1 to .4 -> rounds down to the nearest integer
// .5 to .9 -> rounds up to the nearest integer

// console.log(Math.round(3.1));
// console.log(Math.round(3.9));
// console.log(Math.round(-3.1));
// console.log(Math.round(-3.9));
// console.log(Math.round(3.5));
// console.log(Math.round(-3.5));

// let num = 3.14159265359;
// let a = num*100;
// console.log(a);
// let b = Math.round(a);
// console.log(b);
// console.log(b/100);

// let num = 3.148;
// let a = num*100;
// console.log(a);
// let b = Math.round(a);
// console.log(b);
// console.log(b/100);

// toFixed() - Rounds to the nearest integer and returns a string

// let num = 3.14159265359;
// console.log(typeof num);
// console.log(num.toFixed(5), typeof num.toFixed(5));
// console.log(typeof num);

// let num2 = 3.148;
// console.log(num2.toFixed(2));

// let num = 3.1;
// console.log(num.toFixed(0));
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));
// console.log(num.toFixed(5));

// let a = 1/3;
// console.log(a.toFixed(20));

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log(0.1.toFixed(20));
// console.log(0.2.toFixed(20));

// let a = 0.1 + 0.2;
// console.log(a.toFixed(2));

// console.log(99999999999999999);



// isNaN() - Checks if the value is NaN

// console.log(NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN('10'));
// console.log(isNaN('Hello'));
// console.log(isNaN('10Hello'));

// isFinite() - Checks if the value is a finite number

// console.log(isFinite(10));
// console.log(isFinite('10'));
// console.log(isFinite('Hello'));
// console.log(isFinite('10Hello'));
// console.log(isFinite(10.5468546));
// console.log(isFinite(Infinity));


// Math.random() - Returns a random number between 0 and 1

// console.log(Math.random());
// let random = Math.random();
// console.log(random);
// console.log(parseInt(random*10));


// Math.max() - Returns the largest of zero or more numbers

// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.max(-1, -2, -3, -4, -5));


// Math.min() - Returns the smallest of zero or more numbers

// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.min(-1, -2, -3, -4, -5));


// Math.pow() - Returns base to the exponent power, that is, base exponent

// console.log(Math.pow(2, 3)); // 2^3 = 8
// console.log(Math.pow(3, 2));
// console.log(Math.pow(3, -1));
// console.log(Math.pow(3, 0));
// console.log(Math.pow(3, 0.5));
// console.log(Math.pow(3, 1/2));
// console.log(Math.pow(3, -2));
// console.log(Math.pow(2, -2));


// Math.sqrt() - Returns the square root of a number

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));



// Using var, we can reassign and redeclare the variable
// Using let, we can reassign the variable but cannot redeclare the variable
// Using const, we cannot reassign and redeclare the variable

// Types of Errors
// 1. ReferenceError
// 2. TypeError
// 3. SyntaxError




// let , var and const

// Var - Redeclared, Reassigned, global scope, functional scope, hoisted, undefined
// let - Not Redeclared, Reassigned, Block Scope, hoisted, Temporal Dead Zone, Reference Error
// const - Not Redeclared, Not Reassigned, Block Scope, hoisted, Temporal Dead Zone, Reference Error



//Scope - Scope is the area where a variable is accessible.
// Global ,
// Local Scope - Function Scope, Block Scope

// Block Scope - if, for, while, switch, function, class

// Global Scope - Available throughout the Code / Available Everywhere
// Local Scope - Available within the function or block
// Functional Scope - Available within the function

let a = 10;

{
  let a = 20;
  console.log(a, "Block Scope");
}

console.log(a, "Global Scope");

// Shadow Variable - When a variable is declared in the block scope
//     with the same name as the global scope variable,
//   then the block scope variable will shadow the global scope variable.

// {
//     const name = "Js";
//     console.log(name, "Inside Block");
// }

// console.log(name, "this place is outside the block scope");

// function sayHello() {
//     if(true){
//         var a = 10;
//         console.log(a, "Inside Block");
//     }
//     console.log(a, "Outside Block");
// }

// sayHello();
// console.log(a, "outside function scope");

// function sayHello() {
//   if (true) {
//     var a = 10;
//     console.log(a, "Inside Block");
//   }
//   console.log(a, "Outside Block");
// }

// sayHello();
// console.log(a, "outside function scope");

// {
//     let a = 10;
//     console.log(a, "Block Scope");
// }

// console.log(a, "Global Scope");

// let a = 20;

// {
//    var a = 10;
// }

// console.log(a);

// TDZ - Temporal Dead Zone -
// Temporal Dead Zone is area where variable is inaccesable untill the variable declaration.

// Hoisting - Hoisting is a JavaScript mechanism
// where variables and function declarations are moved to the top of their
// containing scope before code execution.

// Variables and Functions are moved to top of their scope before code execution.

// console.log(name); // TDZ
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// let name = "Erum";


//HOISTING 
//global scope - window in browser

// let a = 1; //global variable -block scope
// const name = "Js"; //global variable - block scope
// var b = 2; //global variable - global scope

// sayHello(); //function hoisting

// function sayHello() {
//     console.log("Hello");
// }

// let sayHello = function () {
//     console.log("Hello");
// }

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// variable hoisting

// console.log(a); //undefined  //Script Block
// console.log(b); //undefined  //Script Block
// console.log(c); //undefined  

// const a = 10;
// let b = 20;
// var c = 30;

// var myName = "Sangeeta";
// const myName1 = "Nikita";
// let myName2 = "Punam";

// console.log(myName); //Sangeeta
// console.log(myName1); //Nikita
// console.log(myName2); //Punam

// function printName(){
//     var name = "Vanashri";
//     console.log(name,"Inside Function");
// }

// printName();
// console.log(name,"Outside Function");

// two arguments - name, age
// write a function that will check your age, if you are above 18,
//  you can vote, else you can't vote

// not vote - Hey , Puran, Your age is 9 You are not eligible to vote

// function call(name, age) { - parameters -accepting the values
//     console.log(name, age);
// }

// call("Sangeeta", 10); - arguments, passing the values

// function age(name,age){
//     if (age>=18){
//         return `Hey ${name}, your age if ${age}  so you are eligible for vote `;
//     }
//     else{

//         return `Hey ${name}, your age if ${age}  so you are not  eligible for vote `;
//     }
// }
// `` - Template Literals
// ${} - String Interpolation

// console.log(`Result is : - ${age("Eram",19)}`);

// Arrow Function

// let sayHello = () => {
//   return "Hello";    // Explicit Return
// };

// let sayHello = () => "Hello"; // Implicit Return

// // => - Arrow Function , Fat Arrow

// console.log(`Result is :-  ${sayHello()}`);

// function add(a, b) {
//     return a + b;
// }

// let add =(a,b)=>{
//     let sum;
//     sum = a+b;
//     return sum;
// }

let add = (a, b) => a + b;

console.log(add(10, 20));