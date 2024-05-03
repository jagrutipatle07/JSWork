// Write Ones , Use Many Times


// Functions

// function declaration

// Syntax:
// function functionName(parameter1, parameter2, ...) {
//     // code block
// }

// function greet() {
//     console.log('Hello World');
// }
// greet();
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// greet();

// function greet() {
//     let fName = 'John';
//     console.log('Hello ' + fName);
// }
// greet();
// console.log(fName);
// greet();

// let fName = "John";
// function greet() {
//     console.log('Hello ' + fName);
// }
// greet();
// console.log(fName);

// let fName = "John";
// function greet() {
//     fName = "Sushmita";
//     console.log('Hello ' + fName);
// }
// console.log(fName);
// greet();
// console.log(fName);

// let fName = "John";
// function greet() {
//     let fName = "Sushmita";
//     console.log('Hello ' + fName);
// }
// console.log(fName);
// greet();
// console.log(fName);


// function functionName() {
//   action, statment, code
// }

// fuunction defination, function statment

// function generateMessage() {
//   console.log("Hello World");
// }

// generateMessage(); // calling the function, invoke the function, execute the function

// generateMessage();
// generateMessage();
// generateMessage();

// function with parameters
// Number, string, boolean, object, array, function

// let number = 10;

// function printNumber(number){

//     return (number.luckyNo * number.n) + 5

// }

// function passingNumber(num){  // num - parameter
//     return num;
// }

// const result = passingNumber(10)*printNumber({"name":"Sangeeta","luckyNo":7,"n":5}); //number - argument

// console.log(result);

// let array = [10, 20, 30, 40, 50];

// function passingArrays(arr){
//     arr[0] = 100;
//     console.log(arr);
// }
// console.log(array[0]); // 10
// passingArrays(array); //100

// printNum([10,20,30,40]);

// const obj = {
//     name: "Jhon",
//     age: 22
// }

// function printObject(obj){
//     console.log(obj);
// }

// function decleration
// function printObject() {
//   return 10;
// }

// printObject();

// // function expression
// const s = function () {
//   // anonymous function
//   console.log("Hello World");
// };

// s();


// let fName = "Shrutika";

// function sayHello() {
//     fName = "Vishakha";

//     let message = "Hello " + fName;
//     console.log(message);
// }
// console.log(fName);
// sayHello();
// console.log(fName);



// Parameters and Arguments

// function greet(name) {
//     console.log("Hello " + name);
// }
// greet('Alka');
// greet(12);
// greet('Sushmita');

// function greet(city) {
//     console.log("I belongs to " + city);
// }
// greet('Pune');
// greet();
// greet('Mumbai', 'Pune');
// greet('Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Satara');

// function greet(city, country) {
//     console.log("I belongs to " + city + " in " + country);
// }
// greet('Pune', 'India');
// greet('Delhi');
// greet();
// greet("", "India");
// greet(undefined, "India");
// greet(, "India");

// function age(name, age) {
//     console.log(name + " is a good boy");
// }
// age('Rajkumar', 20);

// function greet(fName, age) {
//     fName = "Hi" + fName;
//     console.log(fName + age);
// }
// var fName = "Gayatri";
// greet(fName, 20);
// console.log(fName);

// function greet(fName, age = 22) {
//     console.log("Hello " + fName + " you are " + age + " years old");
// }
// greet("Nikita");
// greet("Nikita", 20);
// greet("Eram", undefined);
// greet("Eram", null);
// greet("Eram", false);


// null vs undefined
// undefined vs not defined

// function place(city, country) {
//     if(country === undefined) {
//         country = 'China';
//     }
//     console.log("I belongs to " + city + " in " + country);
// }
// place('Mumbai', 'India');
// place('Delhi');

function place(city, country) {
    country = country || 'China';
    console.log("I belongs to " + city + " in " + country);
}
place("Delhi");


// function sayHello(){ // Function Body
//     return "Hello World!"
// }

// let result = sayHello();
// console.log(result);

// function expression

// let sayHello = function (){
//     return "Hello World!"
// }

// // console.log(sayHello());

// Arrow Functions

// let sayHello = () => {  // store a function in a variable
//     return "Hello World!"; // Explicit Return
// };

// let sayHello = () => "Hello World!"; // Implicit Return


// const sayMahima=()=> {
//     console.log("Hello Mahima");
// }

// function sayMyName(){
//     console.log("hello puran")
// }

// function sayHello(func) { // Receive a function as an parameter
//     func();
//     // return ()=>{  //return a function from a function
//     //     console.log("Hello World");
//     // }
//     return ()=> {
//         console.log("Hello Mahima");
//     };
// }

// sayHello(sayMyName); // Pass a function as an argument


// Functions are Called First Class Citizen , First Class Object

// -- Functions can be stored in a variable
// -- Functions can be passed as an argument  
// -- Functions can be returned from a function
// -- Functions can be stored in an object


// IIFE - Immediately Invoked Function Expression - Self Invoking Function , Self Executing Function

// function sayHello(){
//     console.log("Hello World");
// }

// (function (){
//     console.log("Hello JS")
// }());

// (function(name){
//     console.log("Hello" , name);
// }("puran"));


// (function(value){
//     console.log(value * 3);
// }(5));

// before ES5 release,
//  we can't use the arrow function, 
//  so we use IIFE to create a function and call it immediately.

// (function(obj){ 
//     console.log(obj.name);
// }({name:"Eram", campus:"sarjapur"}));

// sayHello()

// var sayHello = function(){ 
//     return "Hello JS";
// }

// var sayHello = function(){ 
//     return "Hello Eram";
// }


// var sayHello = function(){ 
//     return "Hello World";
// }

// var sayHello = function(){ 
//     return "Hello World";
// }


// (function(){
//     console.log("Hello World");
// }());


// let name = () => {
//     console.log("Hello World");
// }

// name()



// Higher Order Function - 
// A function that takes another function as an argument or returns a function


// function callMyName(){            // Callback Function
//     console.log("Hello World");
// }

// function sayHello(func){  //Higher Order Function
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
//      func();
// }

// // let num = 5;
// sayHello(5, num);
// sayHello("punam");
// sayHello([1,2,3,4]);
// sayHello({name:"Eram"});

// sayHello(callMyName); 

// Callback Function
// A function that is passed as an argument to another function 
// and is executed after some operation has been completed.

// JavaScript is a synchronous, single-threaded language.
// This means that it executes code in a sequence, one line at a time.

// use of callback -
// 1. Asynchronous Programming



// SetTimeout - Asynchronous Programming
// It is a function that will execute the code or function that is passed as argument 
// after the specified time interval.

// setTimeout(function or any lone of code, time); time in milliseconds , 1 sec = 1000 ms

// 5min  = 1000 * 60* 5 = 300000


// console.log("Hello, I am JavaScript"); 

// function timeFunction(){ 
//     console.log("Hello, I am setTimeout");
// }
// setTimeout(timeFunction, 5000);

// console.log("Hello, I am Java"); 

// setTimeout(()=>{
//     console.log("Hello")
// }, 5000);

// hotel - 
// entering the hotel
// order food  - Biryani
// food is being prepared
// food is ready
// food is delivered to your table
// eating food
// payment
// leave the hotel

function visitingHotel(){
    console.log("Entering the Hotel");
    console.log("Order Food - Biryani ");
    preparedFood();
    console.log("Food is ready");
    console.log("Food is delivered to your table");
    eatingFood();
    payment();
    console.log("Leave the Hotel");
}

function preparedFood(){
    setTimeout(()=>{
        console.log("Food is being prepared" , "It will take 10 minutes");
    },5000)
   
}

function eatingFood(){
    setTimeout(()=>{
        console.log("Eating Food" , "It will take 20 minutes");
    },3000)
    
}

function payment(){
    setTimeout(()=>{
        console.log("Payment" , "It will take 5 minutes");
    }, 2000)
   
}

// visitingHotel();


// function sum(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);

// }

// sum(5,6);



function myCity(){  // Callback Function
    console.log("I am from Bangalore");
}

function sayAnjali(param){             // Higher Order Function
    console.log("Hello Anjali");
    param();
}



sayAnjali(myCity);