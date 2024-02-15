const user = {
    userName: "Dhruv",
    coursePrice: 5537,

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Khyati";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     userName = "Dhruv"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let userName = "Dhruv"
    console.log(this);
} 

// chai()


// explicit return method where we need to use curly braces and return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//if the statement is one liner we can remove return keyword and curly braces 
// const addTwo = (num1, num2) => num1 + num2;

//implicit return method better method to use in reactJS
//we used parenthese so we don't need to use return keyword
// const addTwo = (num1, num2) => (num1 + num2);

//if we want yo use object we can create object inside parentheses for implicit return
const addTwo = (num1, num2) => ({userName: "Dhruv"});


console.log(addTwo(55, 3));