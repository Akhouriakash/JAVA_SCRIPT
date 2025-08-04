// Arrays

const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman","naagaraj","hanuman"];


const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[1]);

        // array methods
// myArr.push(6);
// myArr.push(7);
console.log(myArr);
// myArr.pop();

// myArr.unshift(9);  // it will put the value at first position , at starting position
// myArr.shift(); // it will remove above 9 i.e unshift  and also its work is to remove first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); // add all the elements into string

// console.log(myArr);  // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr);  // string


// SLICE  , SPLICE

console.log("A" , myArr);  // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3); 

console.log(myn1);  // [ 1, 2 ]

console.log("B ", myArr);// B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3); // it will remove the that range 
console.log("C ", myArr); //  C  [ 0, 4, 5 ]
console.log(myn2);