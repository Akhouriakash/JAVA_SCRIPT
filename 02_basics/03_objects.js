//Constructor se banega to  singleton
// Object.create 

// Object literals se  
// inside a object : we can define key as well as value 

const mySym = Symbol("key1")


const Jsuser = {
    name : "Akash",
    [mySym] : "mykey1",  // for making a symbol it needs to bracket otherwise its an string   // **
    "full name" : "Akhouri Akash", //  **  we cannot able to access by a .(operator)  
    age : 18,
    location : "Jaipur",
    email : "akash@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(Jsuser.email); // when we give through . then we dont need to take access as string
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof mySym);  //  String
// console.log(Jsuser [mySym]); // now it become symbol
 
// console.log(Jsuser.mySym);



// console.log(Jsuser.full name)

// myArray = ["h" ,"i"]
// myArray[1]



Jsuser.email = "akash@chatgpt.com"
// Object.freeze(Jsuser)  // so that no one can change the value of email
Jsuser.email = "akash@microsoft.com"  // print the same above vavlue without changing otheers
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Juse.greetingTwo = function(){
    console.log(`Hello JS user, $(this.name)`); // when we wanna reference same object 
}

console.log(Jsuser.greeting); // funtion (anonymous) : fumcion return back nhi hua h bas function k sirf refernce aya h 
console.log(Jsuser.greeting());  // 
console.log(Jsuser.greetingTwo());