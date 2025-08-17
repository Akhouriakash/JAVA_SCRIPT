let myName = "akasha     ";
let myChannel = "chai     "

// console.log(myName.length);
// console.log(myName.trim().length); // its for one i need to fir all whereever it needed
// console.log(myName.trueLength) // method not an prop()

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.akash = function(){
    console.log(`akash is present in all objects`);
}
Array.prototype.heyakash = function(){
    console.log(`akash says hello`)
}

// heroPower.akash()

// myHeros.akash()
// myHeros.heyakash()

// heroPower.heyakash()

// INHERITANCE

const User ={
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"akash".trueLength()
"iceTea".trueLength()