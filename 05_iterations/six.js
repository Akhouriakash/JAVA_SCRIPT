// const coding = ["js","ruby","java","python","cpp"]

/*
const values = coding.forEach((item )=>{
    console.log(item)
    return item
})
console.log(values);  */


const myNums =[1,2,3,4,5,6,7,8,9,10]
/*
// const newNumns = myNums.filter((num) => num > 4) 
const newNumns = myNums.filter((num) => {  // if we use scope {}  then we need to add return also 
   return  num > 4})   */

// console.log(newNumns);  

/*
const newNums =[]
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums); */

const books =[
    { title : 'Book one' , genre: 'Fiction' , publish: 1981 , edition :2004 },
    { title : 'Book two' , genre: 'Non-Fiction' , publish: 1983 , edition :2007 },
    { title : 'Book three' , genre: 'History' , publish: 1985 , edition :2009 },
    { title : 'Book four' , genre: 'Non-Fiction' , publish: 1982 , edition :2010 },
    { title : 'Book five' , genre: 'Science' , publish: 1986 , edition :1983},
    { title : 'Book six' , genre: 'Fiction' , publish: 1989 , edition :2014},
    { title : 'Book seven' , genre: 'History' , publish: 1985 , edition :1994 },
    { title : 'Book eight' , genre: 'Science' , publish: 1983 , edition :2015 },
    { title : 'Book nine' , genre: 'History' , publish: 1983 , edition :2004 },
    { title : 'Book ten' , genre: 'Fiction' , publish: 1982 , edition :2008 },
   
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks  = books.filter( (bk) => { 
    return bk.edition >= 2000 && bk.genre === 'History'
})
console.log(userBooks);

