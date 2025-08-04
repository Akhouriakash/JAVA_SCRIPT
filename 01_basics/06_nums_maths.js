const score = 100;
// console.log(score);

// const balance = new Number(200);  // especially Number   [Number : 200]
// console.log(balance);  

// console.log(balance.toString().length);  // 200 -> 3
// console.log(balance.toFixed(3));  // 200.000

// const otherNumber = 23.58546; // 23.6
// const otherNumber = 123.86645; //124

// const otherNumber = 1123.214; //1.12e+3
// console.log(otherNumber.toPrecision(3)); 


const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //10,00,000   us
console.log(hundreds.toLocaleString('en-IN'));  // **

//******************** MATHS **************************/

// console.log(Math); // Object [Maths] {}
// console.log(Math.abs(-4)); // only change the negative value into +
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.3)); // top value 5 
// console.log(Math.floor(4.6));  // down value

// console.log(Math.max(3,5,6,12,32));
// console.log(Math.min(32,23,33,1,43,0,-1));

console.log(Math.random());// 0--1 k bich me
console.log(Math.floor(Math.random()*10) +1); // dice 

const max = 20;
const min = 10;

console.log(Math.floor(Math.random()* (max - min + 1)) + min );