// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// let myBirthday = new Date(1999, 5, 2);
// let myBirthday = new Date(1999, 5, 2, 1, 45);
// let myBirthday = new Date("1999-6-2");
let myBirthday = new Date("02-6-1999");
console.log(myBirthday);
// console.log(myBirthday.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myBirthday.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));