// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world!";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

//map won't let us duplicate key value pairs it'll print one key value pair only once
map.set("IN", "India");

// console.log(map);

//in this loop values comes in key value pain inside of an array
for (const key of map) {
    // console.log(key);
}

//here we can print key and value saperately
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

//trying iteration on object
const myObject = {
    'game1': "NFS",
    'game2': "COD",
    'game3': "GTA"
}

//objects are not iterable
// for (const [keys, value] of myObject) {
//     console.log(keys, ":-", value);
// }