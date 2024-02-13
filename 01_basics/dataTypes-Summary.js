// Primitive data types

/*
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

//dataType examples
const name = "Dhruv" //String
const score = 100; //Number
const scoreValue = 100.3 //Number
const isLoggedIn = true //boolean value only can be true or false
const outsideTemp = null //null = completely empty
let userEmail; //undefined = not defined yet

// even when we use same value in two different id it's still different from eachother in symbol dataType
const id = Symbol('123'); //symbol
const anotherId = Symbol('123'); //symbol

// console.log(id === anotherId); //answer is false

const bigNumber = 3578951234567895123456n; //BigInt


// Reference (Non Primitive) types
/*
Array
Objects
Functions
*/

const carBrands = ["BMW", "Lamborghini", "Koenigsegg", "Pagani", "Ferrari"] //Array
let myInfo = {
    name: "Dhruv",
    age: 25
};

const myFunction = function(){
    console.log("Hello world");
}

// how to check dataType of a value
// console.log(typeof id);
// console.log(typeof(carBrands));

// +++++++++++++++++++++++++++++++++++++

// stack(Primitive), heap(Non Primitive)

let myUserName = "Dhruv";
let anotherUserName = myUserName;
anotherUserName = "D. K. Panchal"

// console.log(myUserName);
// console.log(anotherUserName);

let userOne = {
    name: "Dhruv",
    age: 25
};

let userTwo = userOne;
userTwo.name = "D. K. Panchal";

console.log(userOne.name);
console.log(userTwo.name);