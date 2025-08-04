// let score = 33; // number
// let score = "33"; string
// let score = "33abc"; // NaN
// let score = null; // 0 
// let score = undefined; // NaN
// let score = true; // 1 boolean value
let score = "akash"; // not convertable to number // NaN


// console.log(typeof score); 
// console.log(typeof(score)); // as a method

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1 ; false => 0; 

// let isLoggedIn = 1;
// let isLoggedIn = ""; // false
let isLoggedIn = "akash"; // true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false ;
// "akash" => true;

let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber); // 33
// console.log(typeof stringNumber);  // String

// ************************OPERATIONS***************************************//

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**4);// power
// console.log(2%2);
// console.log(2/2);


let str1 = "hello ";
let str2 = "akash";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// // console.log("1" +"2");  // 12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); // 32

// console.log( (2+3) - (3*4) / 4);

// console.log(+true); // 1 , + make coversion into boolean but its vice versa is error
// console.log(+""); // 0

let num1 , num2 , num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
// gameCounter++; 101
++gameCounter;  // 101
console.log(gameCounter);

