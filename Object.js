// let user = {
//     firstName : "Jagruti",
//     lastName : "Patle",
//     fullName(){
//         console.log(user.firstName + " " + user.lastName)
//     }    
// }
// user.fullName()


// const user = {
//     firstName : "Jagruti",
//     lastName : "Patle",
//     fullName(){
//         console.log(this.firstName + " " + this.lastName)
//     }    
// }
// user.fullName()

// const counterApp = {
//     value : 0,
//     increament(){
//         value = value + 1;
//         console.log(this.value);
//     },
//     decreament(){
//         value = value - 1;
//         console.log(this.value);
//     },
//     reset(){
//         value = 0;
//         console.log(this.value);
//     }
// }
// increament.counterApp()
// reset.counterApp()
// decreament.counterApp()


// const employeesSalary = {
//     employee1 : 5000,
//     employee2 : 6000,
//     employee3 : 7000,
//     employee4 : 8000,
//     employee5 : 9000,

// }
// for (let keys in employeesSalary){
//     console.log(employeesSalary[keys]+1000)
// }


// let student = {
//     name:"Jagruti",
//     age:23,
//     "Permanent Address":"Gondia,Maharashtra",
// }
// console.log(student);

// //Accessing Object Properties:By dot & bracket notation.
// console.log(student.name);
// console.log(student["age"]);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// //loop through object

// //for-in loop:
// for (let key in student){
//     console.log(student[key]);
// }

//Mrthods in Object
//Methods are functions that are stored as objects Properties.

// let student = {
//     name:"Jagruti",
//     sayHi:function(){
//         return "Hello, Good Morning";
//     },
//     sayBye(){
//         return "Bye, Good Night";
//     },
//     sayInSpanish:(greet)=>{
//         return `Hola ${greet}`;
//     }
// }
// console.log(student.sayHi);
// console.log(student.sayBye);
// console.log(student.sayInSpanish("Buenos Dias"));


//This keyword in JS:-
//it is to the parent object.
//Arrow function does not have their own this keyword.

// const user = {
//     name:"Jagruti",
//     // sayHi:function(){
//     //     console.log(this);
//     //     console.log(this.name);  //this.name means user.name
//     // },
//     saybye:()=>{                // this keyword does not work in arrow function.
//         console.log(this);
//     }
// }
// console.log(user.name);
// user.sayHi();

// In and hasOwnProperty:
// In - check in prototype chain.
// hasOwnProperty - does not check in prototype.
// const person = {
//     name:"Jagruti",
//     age:23,
//     location:"Maharashtra"
// }
// console.log("name" in person);
// const key = person.hasOwnProperty("name");
// console.log(key);
// const key1 = person.hasOwnProperty("lastname");
// console.log(key1);


// Object.freeze()
// const person = {
//     name:"Jagruti",
//     age:23,
//     location:"Maharashtra"
// }
//before freeze()
// person.name = "Shilpa";
// person.age = 21;
// delete person.location;
// console.log(person);

// //After freeze()
// Object.freeze(person);
// person.name = "Shilpa";
// person.age = 21;
// delete person.location;
// console.log(person);
// let person2 = Object.freeze(person);
// person2.name = "Vishal"; 
// console.log(person2);


//Reference and value:
// let x = 10;
// let y = x;
// y = 20;
// console.log(x,y);

// let arr = [1,3,2,4,5,7]
// let arr2 = arr;

// arr2.push(6);
// console.log(arr);
// console.log(arr2);


//shallow copy and deep copy


// const obj1 = {
//     name:"Jagruti",
//     age:23
// }
// const obj3 = {
//     location:"Maharashtra",
// }
// // const obj2 = Object.assign({},obj1,obj3)
// // obj2.name = "Shilpa";
// // console.log(obj1);
// // console.log(obj2);

// //Spread operator:
// const obj2 = {...obj1,...obj3}
// console.log(obj2);


// const obj1 = {
//     name:"Jagruti",
//     age:23,
//     address:{
//         permanent:"Gondia",
//         tempeorary:"Nagpur",
//     }
// }
// // const obj2 = Object.assign({},obj1)
// const obj2 = {...obj1}
// obj2.name = "Shilpa";
// obj2.age = 21;
// obj1.address.permanent = "Maharashtra";
// console.log(obj1);

//JSON.stringify()

//Lodash - Library - npm
//cloneDeep() - deep copy
//structuredClone() - deep

//TASK - Explore about structureClone() and perform a deep copy.
// function deepCopy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// // Example usage
// const originalObject = { name: "Jagruti", Address: { Location: "Maharashtra" } };
// const copiedObject = deepCopy(originalObject);

// // Modifying the copied object will not affect the original
// copiedObject.Address.Location = "Gondia";
// console.log(originalObject); // { a: 1, b: { c: 2 } }
// console.log(copiedObject);   // { a: 1, b: { c: 3 } }



const snakeGame = {
    value: 0,
    increment() {
        let random = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 to 10
        console.log(this.value + random);
    },
    reset() {
        console.log(this.value = 0);
    }
};

snakeGame.increment();
snakeGame.reset();

