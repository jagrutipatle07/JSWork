const readline = require('readline-sync');




// // Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
// function sum_Array(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// let arr = [1,7,2,5,8];
// sum_Array(arr);


// // Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
// function averageOfElements(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     let Average = sum/arr.length;
//     console.log(Average);
// }
// let arr = [1,7,2,5,8];
// averageOfElements(arr);


// // Find Maximum Element: Write a function to find the maximum element in an array of integers.
// function Max(arr){
//     let max = arr[0];
//     for (let i=0; i<arr.length+1; i++){
//         if (max < arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
// let arr = [9,7,2,5,8];
// Max(arr);


// // Find Minimum Element: Write a function to find the minimum element in an array of integers.
// function Min(arr){
//     let min = arr[0];
//     for (let i=1; i<arr.length+1; i++){
//         if (min > arr[i]){
//             min = arr[i];
//         }
//     }
//     console.log(min);
// }
// let arr = [9,7,2,5,8];
// Min(arr);


// Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// function indexFound(arr){
//     let index = 0;
//     for (let i=0; i<=arr.length; i++){
//         if (arr[i]==userInput){
//             index = i;
//         }
//         else{
//             index = -1;
//         }
//     }
//     return index;
// }
// let arr = [1,6,5,7,8,2];
// let userInput = readline.questionInt("User input element:-");
// let ElementIndex = indexFound(arr);




// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] >= arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// let arr = [1, 6, 5, 7, 8, 2];
// bubbleSort(arr);


// Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.
// function filterEvenNumbers(arr) {
//     return arr.filter(ele => ele % 2 === 0);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = filterEvenNumbers(arr);
// console.log(evenNumbers);



