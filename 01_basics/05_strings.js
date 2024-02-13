const name = "Dhruv";
let repoCount = 1;

// older way to write and concate string
// console.log("Hello my name is " + name + " and my repo Count is " + repoCount);

// mordern way to write and concate string
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shredder-850");
// console.log(gameName);
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf("d"));

//in substring we can't give negative value
const newGameName = gameName.substring(0, 5);
// console.log(newGameName);

// in slice we can give negative value
const anotherGameName = gameName.slice(-8, 6);
// console.log(anotherGameName);

// trim method removes extra spaces from front and end
let newString = "     Dhruv     ";
console.log(newString);
console.log(newString.trim());

//replace method takes argument and replace the argument with new 2nd argument
let url = "htttps://Dhruv.com/Dhruv%20Panchal";
console.log(url.replace("%20", "-"));

//includes method checks if string inclues a given argument or not and it gives results in boolean value
console.log(url.includes("Dhruv"));
console.log(url.includes("k."));

//split method split the given string on the basis of given argument
console.log(gameName.split("-"));