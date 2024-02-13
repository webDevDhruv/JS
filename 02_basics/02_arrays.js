const europianCars = ["BMW", "Lamborghini", "Koenigsegg", "Pagani", "Ferrari"];
const japeneseCars = ["Acura", "Toyota", "Nissan", "Honda"];

// europianCars.push(japeneseCars)
// console.log(europianCars);
// console.log(europianCars[5][1]);

// const allCars = europianCars.concat(japeneseCars);
// console.log(allCars);

const all_New_Cars = [...europianCars, ...japeneseCars];
// console.log(all_New_Cars);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usablearr = arr.flat(Infinity);
// console.log(usablearr);

// console.log(Array.isArray("Dhruv"));
// console.log(Array.from("Dhruv"));
// console.log(Array.from({Name: "Dhruv"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));