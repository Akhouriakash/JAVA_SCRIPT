class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}akash`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
    

}

const akash = new User("a@akash.ai","abc")
console.log(akash.password)