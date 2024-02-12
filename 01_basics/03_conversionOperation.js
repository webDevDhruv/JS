let score = "553KDP";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
conversion operation from different datatypes to number

"553" => 553 
"553KDP" => NaN(Not a Number)
true => 1
false => 0
*/

let isLoggedIn = true;
let booleanIsLoggenIn = Boolean(isLoggedIn);
console.log(booleanIsLoggenIn);

/* 
In boolean conversion

1 => true
0 => false
"" => false
"Dhruv" => true
*/

let someNumber = 553;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof(stringNumber));