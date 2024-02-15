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
// console.log("result:", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dhruv"));

// if we wont give arguments to a function it will give the undefined as a result
// console.log(loginUserMessage());

//if we want multiple values with one function perameter we can use rest operator or spread operator(...peramaeter)
function calculateCartPrice(...num1){
    return num1;
};

//if we use multiple parameters and add spread or rest operator after first two values it won't take the values before rest or spread operator
//it will ignore the val1 and val2 only returns last two value ([300, 2000]). because 200 and 400 goes to val1 and val2 and rest in ...num1 so only ...num1 values will be returned
// function calculateCartPrice(val1, val2, ...num1){
//     return val1, val2, num1;
// };

//we only get the first value because there is only one perameter in the function defination
// console.log(calculateCartPrice(200, 400, 300, 2000));

const user = {
    userName: "Dhruv",
    coursePrice: 5537
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and course price is ${anyObject.coursePrice}`);
}

// handleObject(user);

//  handleObject({userName: "Khyati", coursePrice: 5537})

const myNewArray = [20, 55, 70, 90];

function returnSeconValue (getArray){
    return getArray[1];
};

// console.log(returnSeconValue(myNewArray));

console.log(returnSeconValue([20, 55, 70, 90]));