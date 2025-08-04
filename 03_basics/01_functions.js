// function sayMyName(){
//     console.log("H")
//     console.log("I")   
//     console.log("T")
//     console.log("E")
//     console.log("S")
//     console.log("H")
// }
// sayMyName() // execution
// sayMyName // reference

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3

// const result = addTwoNumbers(3,5)
// console.log("Result : ",result) // undefined

function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    console.log("Akash")
//    return result;
      return number1 + number2;
}
const result = addTwoNumbers(3,5)
// console.log("Result : ",result) // result : 8 now some value is stored

function loginUserMessage(userName = "sam"){
    if(userName === undefined){ // if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Akash"))
// console.log(loginUserMessage("Aakashh")) // undefined , and if u passed argument then "sam will override"


function calculateCartPrice(val1 , val2 , ... num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "hitesh",
    prices : 99
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);    
}

// handleObject(user)
handleObject({
    username : "sam",
    price :399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
} 
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 100 , 600]));
