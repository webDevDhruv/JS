// loops on objects

const languages = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
} 

for (const key in languages) {
    // console.log(`${key} is shortcut for ${languages[key]}`);
}

const programmig = ["js", "rb", "py", "java", "cpp"];

for (const key in programmig) {
    // console.log(programmig[key]);
}

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// for (const key in map) {
//     console.log(key);
// }