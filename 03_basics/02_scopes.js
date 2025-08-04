 // global scope

const { use } = require("react");

//  var c = 300;
let a = 200;
// block scope 
 if(true){
    let a = 10;
    const b = 20;
    // var c = 30; // 30
    // c = 30; // 30

    // console.log("INNER: "+ a); // 10
}

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    // }

//  console.log(a);
//  console.log(b);
//  console.log(c); //30


function one(){
    const userName = "hitesh"

    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two() // if off then one will again call to two but wont print because cant be called 
}

// one()

if(true){
    const userName = "hitesh"
    if(userName === "hitesh"){
        const website = " youtube"
        // console.log(userName + website)
    }
    // console.log(website);
}
// console.log(userName);



// ++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5))
function addOne(num){   // FUNCTION
    return num+1
}


// addTwo(5) // we cant here beacuse we hold  later value  ,assining
const addTwo = function(num){  // expression , becacuse js variable is so powerful to assign json etc
    return num + 2
}
addTwo(5)