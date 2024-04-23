const readline = require('readline-sync');

// // 1. Given length and breadth of a rectangle return the area of a rectangle.
// let l = readline.questionFloat("Enter the length:-");
// let b = readline.questionFloat("Enter the breadth:-");
// let Area_of_the_rectangle = l * b;
// console.log(Area_of_the_rectangle);

// // 2. Take a number and print the square of the number
// let number = readline.questionInt("Enter the number:-");
// console.log(number**2);

// // 3. Take two numbers and only print the integer part when a is divided by b
// let a = readline.questionInt("Enter the num1:-");
// let b = readline.questionInt("Enter the num2:-");
// console.log(Math.floor(a/b));

// // 4. Take a number and print out the last digit of the number.
// let a = readline.questionInt("Enter the num1:-");
// console.log(a%10);


// // 5. Take a number and find the cube of that number
// let number = readline.questionInt("Enter the number:-");
// console.log(number**3);

// 6. Take a 3 digit number and print the reverse of that number.
//     Ex - 235 = 532
// let n = readline.questionInt("Enter a number: ");
// let reversedNumber = 0;
// while (n > 0) {
//     reversedNumber = reversedNumber * 10 + (n % 10);
//     n = Math.floor(n / 10);
// }
// console.log("Reversed number:", reversedNumber);


// // 7. Take a number and print out the first digit of the number.
// //     Ex - 145 = 1, 789 = 7;
// let n = readline.questionInt("Enter a number: ");
// let firstDigit = parseInt(n.toString()[0]);
// console.log("First digit:", firstDigit);


// // 8. Take a number and return the sum of the first and last digit.
// //     ex - 10 = 1+0 = 1, 452 = 4+2=6
// let n = readline.questionInt("Enter the number: ");
// let first_digit = parseInt(n.toString()[0]); 
// let last_digit = n % 10; 
// let sum = first_digit + last_digit;
// console.log("Sum of first and last digit:", sum);


// 9. Take the salary of five employees and print the average salary of all the employees.
// let total_Salary = 0;
// for (let i = 1; i <= 5; i++) {
//     let salary = readline.questionFloat(`Enter salary of employee ${i}:`);
//     total_Salary += salary;
// }
// let average_Salary = total_Salary / 5;
// console.log("Average salary of all employees:", average_Salary);


// 10. Take two numbers and swap them.
//     Ex - a = 10, b=5; => a=5, b=10;
// let a = readline.questionInt("Enter the num1:-");
// let b = readline.questionInt("Enter the num2:-");
// let temp = 0;
// temp = a;
// a = b;
// b = temp;
// console.log("a = ",a,"b = ",b);

/////////////////////////////////////////////////////////////////////////////////////

// // 1. Write a program that checks if a given number is even or odd.
// let num = readline.questionInt("Enter the number:-");
// if (num%2==0){
//     console.log(`The given number is even , ${num}.`);
// }
// else{
//     console.log(`The given number is odd , ${num}.`);
// }

// // 2. Create a function that takes two numbers as parameters and returns the larger one.
// function larger_num(arr){
//     let max = 0;
//     for (let i=0; i<7; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let arr = [10,8,17,5,12,3,9];
// let large_num = larger_num(arr);
// console.log(large_num);

// // 3. Write a function that determines if a given year is a leap year.
// function leap_year(year){
//     if(year%4==0 && year%100!==0 || year%400==0){
//         console.log(`${year} it is leap year.`);
//     }
//     else{
//         console.log(`${year} it is not leap year.`);
//     }
// }
// let year = readline.questionInt("Enter the year:-");
// leap_year(year);


// // 4. Implement a program that checks whether a given character is a vowel or consonant.
// let char = readline.question("Enter the character:-");
// if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'||char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
//     console.log(`${char} is vowel.`);
// }
// else{
//     console.log(`${char} is consonant.`);
// }

// // 5. Create a function that takes three numbers as input and returns the largest among them.
// function largest_num(a,b,c){
//     if(a>b && a>c){
//         console.log(`Max = ${a}`);
//     }
//     else if(b>a && b>c){
//         console.log(`Max = ${b}`);
//     }
//     else{
//         console.log(`Max = ${c}`);
//     }
// }

// let a = readline.questionInt("A:-");
// let b = readline.questionInt("B:-");
// let c = readline.questionInt("C:-");
// largest_num(a,b,c);


// // 6. Write a program that checks if a given number is positive, negative, or zero.
// let num = readline.questionInt("Enter the number:-");
// if (num > 0){
//     console.log(`${num} is positive number.`);
// }
// else if(num < 0){
//     console.log(`${num} is negative number.`);
// }
// else{
//     console.log(`${num} is zero.`);

// }

// // 7. Implement a function that calculates the grade of a student based on their score.
// function students_Grades(percent){
//     if (percent >=90){
//         console.log("Grade A"); 
//     }else if (percent >=80){
//         console.log("Grade B"); 
//     }else if (percent >=70){
//         console.log("Grade C"); 
//     }else if (percent >=60){
//         console.log("Grade D"); 
//     }else if (percent >=50){
//         console.log("Grade E"); 
//     }else{
//         console.log("Grade F"); 
//     }
// }
// let percent = readline.questionInt("Enter the percentage:-");
// students_Grades(percent);

// 8. Create a program that determines if a given string is a palindrome.

// // 9. Write a function that checks whether a person is eligible to vote based on their age.
// function eligible_Forvote(age){
//     if (age >=18){
//         console.log("The Person eligible for voting.");
//     }
//     else{
//         console.log("The Person not eligible for voting.");
//     }
// }
// let age = readline.questionInt("Enter the age:-");
// eligible_Forvote(age);

// // 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// let a = readline.questionInt("A:-");
// let b = readline.questionInt("B:-");
// let c = readline.questionInt("C:-");
// if(a==b && b==c){
//     console.log("Equilateral Triangle");
// }else if(a!=b && b==c){
//     console.log("Isosceles Triangle");
// }else if(a!=b && b!=c){
//     console.log("Scalene Triangle");
// }else{
//     console.log("Please enter valid side length");
// }

