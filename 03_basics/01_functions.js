// console.log("D");
// console.log("h");
// console.log("r");
// console.log("u");
// console.log("v");

// declaring a function
function sayMyName() {
    console.log("D");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("V");
};

// sayMyName();


//function with parameters
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    //method 1
    // let result = number1 + number2;
    // return result;

    //method 2
    return number1 + number2
    // after return statement piece of code won't execute
    console.log("Dhruv");
}

// calling function with parameters
// addTwoNumbers(3, 4);

const result = addTwoNumbers(5, 3);
console.log("result:", result);