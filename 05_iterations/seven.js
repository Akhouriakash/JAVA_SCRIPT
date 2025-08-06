const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => {return num+10 })


// chaining when we use 2,3 methods same time 

const newNums = myNumbers.map( (num) => num *10) // iska value 
                         .map( (num) => num +1)  // upar wala k value isme aaega 
                         .filter( (num) => num >= 40)

console.log(newNums);