const myObject  = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {  // for in print  keys
    // console.log(key)  // key
    // console.log(myObject[key]) // value
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

const programming = ["js" ,"rb","py" ,"java","cpp"]
for(const key in programming){
    // console.log(programming[key])
}

/*  not iterable
const map = new Map();
map.set('IN', "INDIA")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN', "INDIA")

for(const key in map){
    console.log(key);
} */