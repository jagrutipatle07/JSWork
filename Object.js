// Learn about primitive and non-primitive data types

// Objects

// Object literal

// let obj = {};

// let user = {
//     name: 'Alka',
//     age: 20,
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);

// user.city = 'Delhi';
// console.log(user);

// delete user.age;
// console.log(user);

// let keys = Object.keys(user);
// console.log(keys);

// let key1 = Object.keys(user)[0];
// let key2 = Object.keys(user)[1];
// console.log(key1, key2);

// let user1 = {
//     name: 'Alka',
//     age: 20,
//     'email id': "alka@navgurukul.org", // key with space
// };

// console.log(user1);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.email id);
// console.log(user1["email id"]);
// console.log(user1["name"]);

// delete user1["email id"];
// console.log(user1);

// let user = {
//     name: 'Alka',
//     age: 20,
// };
// console.log(user);
// console.log(user.name);
// console.log(user.city);




let fName = "Vaishnavi";

let user2 = {
    [fName]: "Anjali",
};

// console.log(typeof Object.keys(user2));
console.log(user2);
// console.log(user2.fName);
console.log(user2[fName]);
console.log(user2.Vaishnavi);


// let fruit = "apple";
// let bag = {};

// bag[fruit] = 5;  //OR, bag.fruit = 5;

// console.log(bag);



// let fruit = "apple";
// let bag = {
//     [fruit + 'Computers']: 5,
// };

// console.log(bag);
// console.log(bag.appleComputers);




// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// OR

// function makeUser(name, age) {
//     return {
//         name,  // name: name,
//         age,  // age: age,
//     };
// }

// let user = makeUser("Alka", 20);
// console.log(user);



// function userDetails(name, age) {
//     return {
//         name,
//         age: age || 18,
//     }
// }

// let user1 = userDetails("Alka", 20);
// console.log(user1);

// let user2 = userDetails("Alka");
// console.log(user2);





// let obj = {
//     1 : "One",
// }

// console.log(obj);
// console.log(obj[1]);
// console.log(obj["1"]);



// Object.assign()

// let user1 = {a: 1, b: 2};
// let user2 = {c: 3, d: 4};

// let output = Object.assign(user1, user2);
// console.log(output);
// console.log(user1);
// console.log(user2);


// let output1 = Object.assign({}, user1, user2);
// console.log(output1);
// console.log(user1);
// console.log(user2);


// let user1 = {a: 1, b: 2};
// let user2 = {b: 3, c: 4};

// let output = Object.assign(user1, user2);
// console.log(output);

// let output1 = Object.assign(user2, user1);
// console.log(output1);

// let output2 = Object.assign({}, user1, user2);
// console.log(output2);

// let output3 = Object.assign({}, user2, user1);
// console.log(output3);

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



// ///////////////////////////////////////////////////////////////////////////////////////////
// Data Types in JavaScript
// Primitive Data Types - Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive Data Types - Object, Array, Function


// Object - Object is a non-primitive data type in JavaScript. 
// It is a collection of key-value pairs. It is a reference data type.

// Four ways to create an object in JavaScript:
// 1. Object Literal
// 2. Constructor Function
// 3. Object.create() method
// 4. Class

//  1.Object Literal

    // let student = {};  //Empty Object
    // console.log(typeof student);

    // let student = {
    //     name:"Puran",
    //     age: 16,
    //     "permanet address" :"Bengal",
    // }

    // console.log(student);

// const user = {
//     name: "Puran",
//     age: 16,
//     "my game": "Cricket",
//     collection:{
//         book:{
//             horror:{
//                 name: "Horror",
//                 price: 100,
//             },
//             comedy:{
//                 name: "Comedy",
//                 price: 200,
//             },
//             adventure:{
//                 name: "Adventure",
//                 price: 300,
//             },
//         },
//     },
//     sayHii : function(){  //method
//         console.log(greet);
//     },
//     sayBye : function(greet){
//         console.log(greet);
//     },

// };


// // Method - Function inside an object as key-value pair


// // user.sayHii("");
// user.sayBye("Your Class is OFF NOW, You guys can leave");


// // console.log(user);



// // console.log(user.collection.book.adventure.price)

// // console.log(typeof user);   

// // const key1 = Object.keys(user);

// // console.log(typeof key1[1], key1[1]);
// // console.log(typeof key1[0], key1[0]);

// // Dot Notation
// // [] Notation 

// // console.log(user["my game"]);

// let user ={
//     name:"Puran",
//     location:"Bengal",
// }
// user.age = 16;
// user["My fav game"] = "Cricket";
// console.log("before",user);
// delete user.location;
// console.log("after",user);
// function printUser(user){    //method
//     console.log(user);
// }
// user.printingUser = printUser;

// console.log(user);
// {
//     name: 'Puran',
//     location: 'Bengal',
//     age: 16,
//     'My fav game': 'Cricket',
//     printingUser: [Function: printUser]  //method
//   }

// user.age
// user.location
// user.printingUser()
// console.log(user.printingUser("Saloni"));


// let user ={
//     name:"Puran",
//     location:"Bengal",
// }


// function add(a,b){  // Method
//    return a+b;
// }

// // add(2,3);

// user.age = 18;
// user.addition = add;

// console.log(user.addition(2,4));


// let user = {
//     name: "Puran",
//     location: "Bengal",
//     addition: function (a, b) {
//         console.log(a + b);
//     }, 
//     subtraction(a, b) {
//         console.log(a - b);
//     },
//     multiplication:(a, b)=>{
//         console.log(a*b);
//         console.log(user.name);
//     },                                     //Comma Dangle , Trailing Comma
//     greet(){
//         console.log(this,"inside method");
//         console.log("Good Morning" , this.name);
//     },
// }

// console.log(this,"outside");

// function a(){
//     console.log(this, "inside a function");
// }

// a();


// user.addition(2, 3);
// user.subtraction(5, 3);
// user.multiplication(2, 3);
// user.greet();


// this - keyword

// Arrow Function doest not have this keyword


// Hoisting - Access
// Arrow Function - Refrence Errror

// Object - 
// first name
// last name

// method - full name

// call the method and print the full name

// const person = {
//     firstName: "Tahira",
//     lastName: "Khan",
//     // getFullName(){
//     //     console.log(this.firstName +" "+ this.lastName)
//     // }
//     getFullName:(name)=>{
//         console.log(person.firstName +" "+ person.lastName +" and "+ name)
//     }
// }

// person.getFullName("Sana");

// Constructor Function



// Counter App
// in
// hasOwnProperty
// Freeze
// Loop - for-in
// Questions with loops
// Refrence and Value
// Object.assign
// Spread Operator
// Constructor Function

// Question
// create a object with 3 properties
// key1 - value
// key2 - increment (method)
// key3 - decrement (method)
// value will increase by 1  - increment()
// value will decrese by 1  - decrement()

// const counterApp = {
//     value:0,
//     increment(){
//         console.log(this.value = this.value + 1);
//     },
//     decrement(){
//         console.log(this.value = this.value - 1);
//     },
//     reset(){
//         console.log(this.value = 0);
//     }
// }

// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.reset();
// counterApp.decrement();
// counterApp.decrement();
// counterApp.decrement();
// counterApp.decrement();

// Question
// Snake Game Functionality
// value = 0;
// Ladder - value will increase by 10
// Snake - value reset to 0
// Random between 1 to 6 //6  Math.random()
// Move - Increment the value by random number

// in and hasOwnProperty
// const person = {
//     name:"Alka",
//     age:20,
// }
// console.log("age" in object);
// console.log("toString" in object);  - Check Prototypes also

// console.log(person.hasOwnProperty("age"));
// console.log(object.hasOwnProperty("toString")); - doesn't check Prototypes


// Freeze - Object.freeze()
// const person = Object.freeze({
//     name:"Alka",
//     age:20,
// });

// person.location = "Kanpur";
// person.job = "developer";

// const person = {
//     name:"Alka",
//     age:20,
// };

// Object.freeze(person);
// delete person.name;
// person.name = "Vaishnavi";

// console.log(person);

// const items = {  
//     "apple":2,
//     "orange":3,
//     "mango":4,
// };

// console.log(items.orange)
// console.log(items);

// Access the key and value
// const keys = Object.keys(items);
// const value = Object.values(items);
// console.log(keys);
// console.log(value);

// for - in loop
// for(let keys in items){
//     // console.log(items);
//     // console.log(keys); 
//     console.log(items[keys] * 2);
// }

// Question
// create an object with 5 employees salary and
//  you have to increase the salary by 1000;

// const employees={
//     e1:100,
//     e2:200,
//     e3:300,
//     e4:400,
//     e5:500,
// };

// for (let keys in employees){
//     console.log(employees[keys]+1000)
// }

// Reference and Value
// premetive data type, non-premetive data type

// let a = "Punam";
// let b = a;  //Copy the value

// a = "Vaishnavi";

// console.log(a);
// console.log(b);

// Copy Reference

// let a = {
//     name:"Punam",
// }

// let b = a; // Same memory location, Same variable

// delete a.name;

// console.log(a);
// console.log(b);

// vaishnavi , vaishnavi

// Object.assign()
// Spread Operator


// Copying object properties

// const person = {
//     name: "Alka",
//     age: 20,
//     addrees:{
//         present:{
//             city:"Pune",
//         },
//         permanent:{
//             city:"Kanpur"
//         }
//     }
// };

// const person2 = {};
// for(let key in person){
//     person2[key] = person[key];
// }
// person.name = "Vaishnavi";
// person.age = 30;
// // person.addrees = "Delhi"
// person.addrees.present.city = "Mumbai";
// console.log(person);
// console.log(person2);


// let person = {
//   name: "akash",
//   age: 5,
  
// };

// let copy = { ...person };

// copy["age"] = 20;

// console.log(person);
// console.log(copy);

// let , const - refrence error
// var - undefined

// let x = 10;
// y = 5;

// let result = add(x,y);
// console.log(result);

//  function add(){
//    console.log(x+y);
//  }


// let x = 10;
// let y = x;
// y= 20;

// console.log(x);
// console.log(y);


// var obj = {
//   name: "Mahi",
//   age: 42,
// };

// var obj2 = obj;
// obj2.name = "Virat";
// obj2.address = "Ranchi";
// console.log(obj);
// console.log(obj2);

// let obj = {
//   name: "Mahi",
//   age: 42,
//   address: {
//     city: "Ranchi",
//     country: "INDIA"
//   }
// };

// let obj2= {};
// // Object.assign(target, source)
// Object.assign(obj2, obj);

// obj2.name = "Virat";
// obj2.age= 32;
// obj2.address.city = "Delhi";

// console.log(obj);
// console.log(obj2);

// spread operator ...
// let obj2 = {...obj};
// obj2.address = "Ranchi";
// console.log(obj);
// console.log(obj2);


// let arr = [1,2,3];
// let arr2 = arr;
// arr2.push("Hello");

// console.log(arr); //[1,2,3]
// console.log(arr2); //[1,2,3,"Hello"]



// pre - value
// non- premetive - reference


// Rest Operator

// function addToCart(item, ...items){
//   console.log(item, items);
// }
// addToCart("apple","mango","banana","grapes","orange","kiwi","45");


// Shallow Copy  - 1 level Copy , Object.assign, Spread Operator

const renuka = {
    age:20,
    nick:"renu",
    address:{
      campus:"amrawati",
      cash:{
        inHand:1000,
        inBank:20000
      }
    },
    sayHii(){
      console.log("Hii, I am Renuka");
    }
  }
  
  // const raj = Object.assign({},renuka);
  
  // const raj = {...renuka};
  
  // raj.nick = "prince";
  // raj.age = 15;
  // raj.address.campus = "dharmshala";
  // raj.address.cash.inHand = 5000;
  
  console.log(renuka);
  console.log(raj);
  
  // deep copy
  
  // const renuka = {
  //   age:20,
  //   nick:"renu",
  //   address:{
  //     campus:"amrawati",
  //     cash:{
  //       inHand:1000,
  //       inBank:20000,
  //       items:{
  //         pen:2,
  //         book:3,
  //         laptop:1
  //       }
  //     }
  //   },
  //   sayHii(){
  //     console.log("Hii, I am Renuka");
  //   }
  // }
  
  // const raj = JSON.stringify(renuka);
  // const raj2 = JSON.parse(raj);
  
  // raj2.nick = "prince";
  // raj2.age = 15;
  // raj2.address.campus = "dharmshala";
  // raj2.address.cash.inHand = 5000;
  // raj2.address.cash.items.pen = 50;
  
  // console.log(renuka)
  // console.log(raj2);
  
  // 2023
  // structuredClone()
  // LODASH - DEEP CLONE
  

  // const student1 = {
//     name:"Sangeeta",
//     age:18,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// }

// const student2 = {
//     name:"Nisha",
//     age:80,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// } 

// const student3 = {
//     name:"Eram",
//     age:100,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// }
// console.log(student1);
// console.log(student2);
// console.log(student3);

//Dry Principle  - Don't Repeat Yourself

// Factory Function
// Constructor Function

// Factory Function - Function that returns an object


let printing = {
    printDetails(){
        console.log(`Hey, I am ${name} and I am ${age} years old`); 
    }
}

let passout = {
    printPassout(){
        console.log(`Hey, I am ${name} and I am passout`);
    }
}



// function createStudent(name,age){
    const student = {
        name :name,
        age:age,
    }

    return student
//     return {
//         name:name,
//         age:age,   
//     }
   
// }

function createStudent(name,age){
    let studentproto = Object.create(printing);
    studentproto.name = name;
    studentproto.age = age;

    return studentproto;
  
}

let student1 = createStudent("Sangeeta",18);
// let student2 = createStudent("Nisha",80);
let student3 = createStudent("Eram",1);


// console.log(student1,"student1");
// console.log(student2);
// console.log(student3,"student3");


// student1.printDetails = printing.printDetails;
// student2.passoutNisha = passout.printPassout;
// student3.printDetails = printing.printDetails;

// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.printDetails();
// student2.printDetails();
// console.log(student3);

// Object.create() method - 
// It creates a new object, using an existing object as the prototype of the newly created object.

// Object.seal() - It prevents new properties from being added to it 
// and marks all existing properties as non-configurable.
//  Values of present properties can still be changed as long as they are writable.

const obj = {
    
    age:18
}

console.log(obj.name)

// Object.seal(obj);
// obj.name = "Nisha";
// obj.age = 20;
// delete obj.age;
// obj.address = "Delhi";

// const newObj = Object.entries(obj);

// [ [ 'name', 'Sangeeta' ], [ 'age', 18 ] ];

// for(let i=0;i<newObj.length;i++){
//     let key = newObj[i][0];
//     let value = newObj[i][1];
//     console.log(key,value); 
// }


// Prototype -
// every object in JS has a prototype, and a prototype is also an object.

// const moreHobbies = {
//     "hobby3":"Reading",
//     "hobby4":"Writing",
// }



// const hobbies = {
//     "hobby1":"Singing",
//     "hobby2":"Dancing",
// }

// const combinedHobbies = Object.assign({},hobbies,moreHobbies);

// const newHobby = Object.create(combinedHobbies);
// newHobby.hobby6 = "Painting";
// console.log(newHobby.hasOwnProperty);

// console.log(newHobby);

// prototype chain - 

// Constructor Function

// let student1 = {
//     name:"Sangeeta",
//     age:18,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// let student2 = {
//     name:"Nisha",
//     age:80,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const obj = {}

// obj.name = "punam"
// obj.age = 20

// console.log(obj);


// function Student(a,b){
//     // Student 
//     // {} = this keyword

//     this.studentName = a;
//     this.age = b;

//     this.printDetails = function(){
//         console.log(`Hey, I am ${this.studentName} and I am ${this.age} years old`);
//     }

//     // return this
//     // return student
// }

// new keyword- 
// 1. It creates a new empty object.
// 2. It attach the value of this keyword to the new empty object.`
// 3. It returns the newly created object. it return this keyword.

// const punam = new Student("Punam",20);
// const komal = new Student("Komal",21);
// const Shalini = new Student("Shalini",21);
// const Radhika = new Student("Radhika",21);

// console.log(punam.age);
// // console.log(komal);
// console.log(Shalini);
// Radhika.printDetails();

// Desturcturing - 

// let arr = [1,2,3, 4,5,6,7,8,9,10,11,12];
// // let firstIndex = arr[0];
// // let secondIndex = arr[1];
// // let thirdIndex = arr[2];

// // console.log(firstIndex,secondIndex,thirdIndex);

// let [,,,,,,,,,,,twelve] = arr;

// console.log(twelve);

// let student = {
//     name:"Puran",
//     age:15,
//     location:"Beng",
//     number:"9",
//     phone:"1234567890"
// }

// let {name,...rest} = student;

// console.log(rest);