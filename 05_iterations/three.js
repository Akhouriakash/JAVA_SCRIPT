// [" "] [" "] [" "]
// [{ } { } { }]

const arr = [1,23,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`); // node 05_iterations/three.js
}

// MAPS
// UNIQUE VALUE & THE WAY U DONE ENTRY REMAINS IN SAME ORDER
const map = new Map();
map.set('IN', "INDIA")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN', "INDIA")

// console.log(map);

for (const [key , value] of map) {  // for of print value directly
    // console.log(key , ':-' , value);
} 

// for on object
/*
const myObject ={   // myObject is not iterable
    game1 : 'NFS',
    game2:'Spiderman'
}

for(const [key,value] of myObject){
    console.log(key, ':-' , value)
} */