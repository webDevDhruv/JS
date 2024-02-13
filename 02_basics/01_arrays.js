
// declaration of array
const myArr = [1, 2, 3, 4, 5];
const cars = ["BMW", "Lamborghini", "Koenigsegg", "Pagani", "Ferrari"];

//another way to declare an array
const myArr2 = new Array(1, 2, 3, 4)

// accessing array element
// console.log(myArr[1]);

// +++++++++ Array Methods +++++++++

//.push method adds elements at the end of an array
// myArr.push(6, 7, 8);
// console.log(myArr);

//.pop method removes one element at the end of an array
// myArr.pop();
// console.log(myArr);

//.unshift method adds element at the start of an array
// myArr.unshift(0);
// console.log(myArr);

//.shift method removes one element at from the start of an array
// myArr.shift();
// console.log(myArr);

//.inclueds method checks if the element is exists in an array or not and return answer in boolean value(true/false)
// console.log(myArr.includes(4));
// console.log(myArr.includes(9));

//.indexOf method gives the index of an element in an array or gives (-1) if element doesn't exist in array
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(9));

// const newArr = [1, 2, 3, 4, 5]
// console.log(newArr);
// console.log(newArr.join());

console.log("A ", myArr);

const myNewArr = myArr.slice(1, 3);
console.log(myNewArr);

console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myNewArr2);
