
const user = {
    username : "hitesh" ,
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)  // this talks about current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // {} -> when we are in node environment : this refers to empty object

/*
function chai(){
    let username = "akash"
    console.log(this.username); //  OUTPUT : undefined  // it cant be able to use this in function , we can use in object
}

chai()
*/

/*
const chai = function(){
    let username = "akash"
    console.log(this.username); // undefined
}
chai()  */

//funtion : THROUGH ARROW FUNCTION 
 /*
const chai = () => {
    let username = "akash"
    // console.log(this.username); // undefined
    console.log(this) // {}
}
chai()  */

// Syntax : arrow function
// () => {}
/*
const addTwo = (num1,num2) =>{  // if we use curly braces {} then we have to use return 
    return num1 + num2 
} 
    */

// implicit return 
// const addTwo = (num1,num2) => num1+num2  // used in react i.e without return statement
// const addTwo = (num1,num2) => (num1+num2) // if we wont use {} then we dont need to use return 

// const addTwo = (num1,num2) => {username : "akash"} // undefined // we cant return through this type, object
const addTwo = (num1,num2) => ({username : "akash"}) // username : akash
console.log(addTwo(3,4))

// array , loop 

const myarray = [1,3,4,23,55]
// myarray.forEach()
// myarray.forEach(function() {})
// myarray.forEach(() => {})
// myarray.forEach(() => () )


