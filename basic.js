const readline = require('readline-sync');

// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// let a=73;
// let b=42;
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a-b);



// 2. Take two numbers and only print the integer part when a is divided by b.
// let a=32;
// let b=5;
// console.log(Math.floor(a/b));


// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
// let a=81;
// let b=3;
// console.log(a**b)




// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
// let a=32;
// let b=3;
// console.log(a/b);



// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
// let A=23;
// let B=21;
// let C=53;
// let D=32;
// let E=23;
// console.log(A+B+C+D+E/5);


// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
// let cost_price=32;
// let selling_price=6;
// console.log(selling_price-cost_price);



// 7. Take a number and print out the last digit of the number.
// let n=32;
// console.log(n%10);


//8. Take a 2 digit number and return the first and last digits.
// let n = 32;
// let first_digit = n/10;
// let last_digit = n%10;
// console.log(Math.floor(first_digit));
// console.log(last_digit);



//9. Write a JavaScript program to find the largest of three numbers.
// let a=7;
// let b=5;
// let c=11;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }

// 10. Write a JavaScript program to check whether a number is even or odd.
// let n=readline.questionInt("Enter the number:-");
// if (n%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


//11. Write a JavaScript program to check whether a given number is prime or not.
// const number = readline.questionInt("Enter the number:-");
// let c = 0;
// for (let i=1; i<=number; i++){
//     if(number%i===0){
//         c++;
//     }
// }
// if(c===2 || number===1){
//     console.log(number, "it is prime number.");
// }
// else{
//     console.log(number, "it is not prime number.");
// }



//12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.
// const Celsius = readline.questionInt("Enter the temperature in celsius:-");
// let Fahrenheit = (Celsius * 9/5) + 32;
// console.log("Temperature in fahrenheit ",Fahrenheit);