let score = "553KDP";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/*
conversion operation from different datatypes to number

"553" => 553 
"553KDP" => NaN(Not a Number)
true => 1
false => 0
*/

let isLoggedIn = true;
let booleanIsLoggenIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggenIn);

/* 
In boolean conversion

1 => true
0 => false
"" => false
"Dhruv" => true
*/

let someNumber = 553;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof(stringNumber));

/***************Oprataions***************/

let value = 3;
let negvalue = -value;
// console.log(negvalue);


// Arithmetic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// String concatination

let str1 = "Hello ";
let str2 = "Dhruv";
let str = str1 + str2;
// console.log(str);

//String and number concatination 
let concate1 = "1" + 2;
let concate2 = 1 + "2";
// console.log(concate1);
// console.log(concate2);

// // This is a bad practice and the code could get negative reviews
// let concate3 = "1" + 2 + 2;
// let concate4 = 1 + 2 + "2";
// console.log(concate3);
// console.log(concate4);

// the good practice is to use parenthesis()
// let opearation = (3 + 4) * 5 % 3;
// console.log(opearation);

// another bad practice in coding or programming(Don't write code as under)
// console.log(+true);
// console.log(+"");

//one more bad coding practice
let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);