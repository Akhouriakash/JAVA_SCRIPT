// Date 

let myDate  = new Date();

// console.log(myDate); //Sun May 25 2025 14:37:56 GMT+0530 (India Standard Time)
// console.log(myDate.toString());  //Sun May 25 2025 14:37:56 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 25/5/2025, 2:37:56 pm
// console.log(myDate.getFullYear());  // 2025
// console.log(myDate.toLocaleTimeString()); // 2:37:56 pm
// console.log(myDate.toDateString()); // Sun May 25 2025

// console.log(myDate.toISOString());  //  2025-05-25T09:07:56.885Z
// console.log(myDate.toJSON());  // 2025-05-25T09:07:56.885Z

// console.log(typeof myDate);  // object

// let createdDate = new Date(2023 ,0 ,23); // MONTH STARTS FROM 0 .. when we use single digit  0
// console.log(createdDate.toDateString());  // Mon Jan 23 2023

// let createdDate = new Date(2023 ,0 ,23,5 ,2);
// let createdDate = new Date("2023-00-14"); // Invalid Date

// let createdDate = new Date("2023-01-14"); //14/1/2023, 5:30:00 am ,, but when we use month dd mm yy then it starts from 01 

let createdDate = new Date("01-03-2024"); // in india we use 
// console.log(createdDate.toLocaleString()); 

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));// ms to s ,, problem is that we get decimal value 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // so that exact month came becoz starts from 0 
console.log(newDate.getDate());

// `${newDate.getMonth() + 1} and the time is  ${newDate.getDate()}`  // for exact time is 

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
})