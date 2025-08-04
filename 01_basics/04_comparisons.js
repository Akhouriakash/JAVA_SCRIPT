// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);  // true
console.log("02" > 1);  // true  // js automatically convert string into num

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0);  // true  // here null converted into 0 

console.log(undefined == 0);  //false
console.log(undefined >= 0); //false
console.log(undefined < 0);// false

// ===
console.log( "2" === 2); // it will check the datatype it cant make conversion, while == make conversion 
