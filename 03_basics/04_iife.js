// Immediately Invokes Function Expressions (IIFE)


//IIFE used for prevention pollution from global scope
//syntax for IIFE  the first parentheses has the block of code we want to execute and second parentheses is for execution
//this is a named IIFE and the name is (one) as you can see below
(function one(){
    console.log(`DB Connected`);
})();
// one()

// remember to end the first IIFE or else it will throw an error
//given below syntax tells you how to use parameters in arrow funtions and how to call it in IIFE
//This is nameless IIFE as you can see below
( (name) => {
    console.log(`DB Connected Two ${name}`);
} )("Dhruv");