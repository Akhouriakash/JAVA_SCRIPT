// PRIMITIVE

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  // undefined 

const id = Symbol('123');
const anotherId = Symbol('12334'); // symbol works is to make difference either in same data
console.log( id === anotherId); // false

// const bigNumber = 324253252235232n;


// REFERENCE OR NON-PRIMITIVE

// ARRAY , OBJECT, FUNCTION  // return type is object 

const heroes = ["shaktiman" , "naagaraj" ,"doga"];  //  // datatype : function

let myObj = {              // datatype : function
    name : "akash",
    age : 21,
}

const myFunction = function(){  // datatype : Object function
    console.log("hello world");
}

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object
console.log(typeof scoreValue);  //number
console.log(typeof myFunction);  // function

console.log(typeof anotherId);  // symbol

//https://262.ecma-international.org/5.1/#sec-11.4.3


// ************************************** **********************************//

// STACK(Primitive) "copy" AND HEAP(Non-Primitive )"reference" MEMORY

let myYoutubeName = "akashakhouridotcom";
let anotherName = myYoutubeName;
anotherName = "chairaurcode";
console.log(myYoutubeName);  // akashakhouridotcom
console.log(anotherName);   // chairaurcode

let userOne = {
    email: "akash@gmail.com",
    upi : "akash@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@gmail.com";

console.log(userOne.email);  // hitesh@gmail.com
console.log(userTwo.email);   // hitesh@gmail.com