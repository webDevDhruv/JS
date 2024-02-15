//this is global scope variables and we can access it in functions as well
let a = 10;
const b = 20;
// var c = 30;

//block scope variables only accessible inside a block of code
//the variables we defined inside the if statement are only accessible inside the curly breaces and we call it block level scope 
//but with var keyword we can access variable anywhere in the code and it's a bad practice.
//Note:- Don't use var keyword
if(true){
    // let a = 10;
    const b = 20;
    //you can access a because it's in the block of code
    //if a was not defined in block still we have (a) at global scope so we can access it in side block scope
    // console.log("inner", a);
    var c = 30;
}

//you can see we can access variable (c) even when it's inside a block 
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Dhruv"

    function two(){
        const website = "YouTube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const userName = "Dhruv";
    if (userName === "Dhruv") {
        const website = " YouTube";
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);

// ++++++++++++++++++++++ interesting ++++++++++++++++++++++

// basic example of hoisting
console.log(addOne(5));
function addOne (num) {
    return num + 1;
}

// when the function is inside of a variable we cannot use Hoisting
// addTwo(5)
const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(5));