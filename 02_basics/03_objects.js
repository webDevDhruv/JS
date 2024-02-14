// Singleton

//we can declare Object using constructur as below
// Object.create

// object literals

//we can declare symbol using syntax as under
const mySym = Symbol("Key1");

//we can create object in variable using syntax as under
//declaration using object literal
const jsUser = {
    name: "Dhruv",
    "Full Name": "Dhruv K. Panchal",
// checkout how you can include symbol in an Object
    [mySym]: "myKey1",
    age: 25,
    location: "Ahmedabad",
    email: "dkpanchal850@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}


//most of the time we access value of an Object using (.keyname) notion
// console.log(jsUser.name);

//we need to learn (["keyname"]) notion to access object value using key name this helps when there is spaces in a key
// console.log(jsUser["name"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);

//access object and change it's value in Js
jsUser["email"] = "dhruv@google.com";

// freeze object method won't give error when we try to change value of a key and it's used when we don't want changes in object
// Object.freeze(jsUser);
// jsUser["email"] = "dhruv@microsoft.com";

// console.log(jsUser);

//adding function into an object
jsUser.greeting = function() {
    console.log("Hello JS User");
}

//if we want to access object key value in a function then we need to use this keyword for scope reasons
jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greetingTwo());
console.log(jsUser);