const name = "Dhruv";
let repoCount = 1;

// older way to write and concate string
// console.log("Hello my name is " + name + " and my repo Count is " + repoCount);

// mordern way to write and concate string
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shredder");
// console.log(gameName);
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
console.log(gameName.charAt(4))
console.log(gameName.indexOf("d"));

const newGameName = gameName.substring(0, 5);
console.log(newGameName);
const anotherGameName = gameName.slice(-8, 2);
console.log(anotherGameName);