function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username) // looks like here calling but not , here we giving reference , not calling // .call exlicitly calling  ,, because we wannt to hold its refernce

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai" , "chai@gmail.com" , "123")
console.log(chai)