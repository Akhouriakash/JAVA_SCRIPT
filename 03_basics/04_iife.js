// Immediately Invoked Function Expressions (IIFE)

(function chai(){  // jo function immediately execute ho jae + global scope k  problem se pollution hoti h kae baar , to uss global scope k jo variables h jo vi declaration h , uske pollution ko hatane k lie iife use krte h 
    // named IIFE
    console.log(`DB CONNECTED`)
}) ();

// chai();
// (function aurcode() {
//     console.log(` DB CONNECTED TWO `)
// })()

( (name) => { // unamed iife
    console.log(` DB CONNECTED TWO ${name}`);
})('hitesh')