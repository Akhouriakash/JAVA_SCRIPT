const marvel_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" ,"batman"];

// marvel_heros.push(dc_heros);  // existing arrays

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);  // returns new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];  // spread operator  it will make individual elements 

// console.log(all_new_heros);


const another_array = [1 , 2, 3, [4,5,6], 7 ,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity); // it will also make all element into one array individually 
console.log(real_another_array);


console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "hitesh"})); // interesting case   , empty array  []

let score1 = 100;
let score2 = 200;
let score3 = 300;
 
console.log(Array.of(score1, score3, score2)); // it will give an array from set of elements  , [ 100, 300, 200 ]

