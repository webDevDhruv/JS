// Control flow

/*

<  
>
<=
>=
==
!=
===
!== 

*/

const isUserLoggedIn = true;
const temperature = 41;

// if statement
// if(temperature < 50){
//     console.log("less than 50");
// }

// if else statement
// if(temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }
// console.log("executed");
//comparison operators

// const score = 200;
// if (score > 100) {
//     const power ="fly";
//     console.log(`User power: ${power} `);
// }

// const balance = 1000;
// //implicit scope example where we dont need to use curly braces and it execute in only one line
// if(balance > 500) console.log("test"), //if it's one line statement then use implicit scope else dont use it with comma it's bad practice  
// console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}