// const userEmail = ""  // else
const userEmail = []  // if


if(userEmail){
    console.log("Got user Mail");
}
else{
    console.log("Dont have user email"); //  ,,
}


// falsy values
//  false , 0 , -0 , BigInt , On, "" , null , undefined, Nan

// truthy values
// "0" , 'false' , " ",[] , {} , function(){}

/*
if(userEmail.length === 0){
    console.log("Array is empty");
} */

    const emptyObject = {}

    if(Object.keys(emptyObject).length === 0){
        console.log("Object is empty");
    }

    // Nullish Coalescing Operator (??)  null undefined

    let val1;
    // val1 = 5 ?? 10 
    // val1 = null ?? 10 // 10 : mainly in place 10 complex expression that is link to database , so that it can assign null and will do work 
    //   val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20 // first value 10 
    console.log(val1);

    // TERNARY OPERATOR

    // CONDITION ? TRUE : FALSE

    const iceTeaPrice = 100
    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80 ")

