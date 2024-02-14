// singleton (constroctor) method of declaring an object
// const tinderUser = new Object();


// object literal method of declaring object
const tinderUser = {};
tinderUser.id = "5537";
tinderUser.name = "Dhruv";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "dhruv@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Dhruv",
            lastName: "Panchal"
        }
    }
}

// to access multilevel or nested object key: values use syntax as under
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "A",
    2: "B"
};

const obj2 = {
    3: "C",
    4: "D"
};

// not a good way to combine two or more objects
// const obj3 = {obj1, obj2};

//using curlybraces are not necessory but it's a good practice for surity that it definetly gives value in object only
// const obj3 = Object.assign({}, obj1, obj2);

//we can even use spread method as well
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// to access all keys of an object (object keys will be given in an array)
// console.log(Object.keys(tinderUser));

// to access all values of an object (object values will be given in an array)
// console.log(Object.values(tinderUser));

//object entries give you every (key: value) pairs in a separate arrays
// console.log(Object.entries(tinderUser));

//if we want to check if key exist in an object or not we can use .hasOwnProperty method, it returns boolean result
// console.log(tinderUser.hasOwnProperty("Dhruv"));


//++++++++++ object destructuring ++++++++++++++

const course = {
    courseName: "Chai or JavaScript",
    price: "free",
    courseinstructor: "Hitesh"
}

//to use key: values multiple time we can destructure object key as given below syntax and access it
const {courseName: cName} = course;

//console.log(courseName);
console.log(cName);