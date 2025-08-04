const name = "akash";
const repoCount = 40;

// console.log(name + repoCount + " value"); // older way 

console.log(`my name is ${name} and i m  engineer , my age is ${repoCount}`); // string interpolation  , many things we can do onboard : name.ToUppercase

const gameName = new String('hitesh-hc-com'); 

// console.log(gameName[0]);  //h
// console.log(gameName.__proto__);  // object
// console.log(gameName.length);  //13
console.log(gameName.toUpperCase());  // HITESH-HC-COM
console.log(gameName.charAt(5)); //h

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); // here we cant give negative value because it will neglect the value 
console.log(newString);  // hite

const anotherString1 = gameName.slice(-4); // remarkable thing in this is, we can give negative value also , reverse it   **
console.log(anotherString1); 

const newStringOne = "      akash        ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akash.com/akash%20akhouri";
console.log(url.replace('%20','-'));  // https://akash.com/akash-akhouri

console.log(url.includes('akash'));  // true 

// convert string into an array based on hyphen
console.log(gameName.split('-'));  // [ 'hitesh', 'hc', 'com' ]