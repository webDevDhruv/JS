const score = 530;
// console.log(score);

const balance = new Number(5700);
// console.log(balance);

// toString method used for converitng a number into string
// console.log(balance.toString());

//length is used for checking a lenth of a string
// console.log(balance.toString().length);


//to precision method is used for rounding of a number 
const num = 530.766;
// console.log(num.toPrecision(4));

//toLocalString method is used for easy readability of a value
const newNum = 1000;
//without toLocalString method
// console.log(newNum);
//with toLocalString method
// console.log(newNum.toLocaleString("en-IN"));

//++++++++++++++++ Maths +++++++++++++++++++

//console.log(Math);

//.abs method gives the absolute value it converts negative value into positive  nut it won't convert negative into positive
// console.log(Math.abs(-4));

//.round method roundof the number value and gives the nearest possible value
// console.log(Math.round(4.2));
// console.log(Math.round(4.7));

//.ceil method always gives the higher value if the nnumber has a decimal
// console.log(Math.ceil(4.1));
//.floor method always gives the lower value if the number has a decimal 
// console.log(Math.floor(4.1));

//.min method gives minimum value from array and .max method gives maximum value from array
// console.log(Math.min(2, 5, 1, 6, 9));
// console.log(Math.max(2, 5, 1, 6, 9));

// .random method will give us a value between 0 to 1
console.log(Math.random());
//we can modify the range by multiply it by the maximum range value and if we don't want  the minimul value to be 0 we can add 1 (+ 1) to get the minimum value as a 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;


//to undertand again watch chai aur javascript playlist video number:- 12
console.log(Math.floor(Math.random() * (max - min + 1)) + min);