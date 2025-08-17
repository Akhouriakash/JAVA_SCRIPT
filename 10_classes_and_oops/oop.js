// Object literal 

const user = {
    userName : "akash",
    loginCount : 8,
    signedIn : true ,

    getUserDetails: function(){
        // console.log("Got user details from database.");
        // console.log(`userName: ${this.userName}`); // this for current class details  (bahar se jab saman lena h to btana pdta h this k through)
        console.log(this) // this current context
    }
}

console.log(user.userName);
// console.log(user.getUserDetails());
console.log(this) // global context : nothing {} , it will change


function User(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
   this.greeting = function(){
    console.log(`welcome ${this.username}`);
   }
    

    return this // implicitly defined
}

const userOne = new User("hitesh" ,12, true) // through new it will work fine as individual , other wise it will fetch recent data 
const userTwo = new User("akash" ,11, false)
console.log(userOne.constructor);
// console.log(userTwo);

