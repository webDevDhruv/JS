// let myName = "Dhruv     ";
// let myChannel = "Shredder     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhruv = function(){
    console.log('Dhruv is present in all objects');
};

Array.prototype.arrDhruv = function() {
    console.log('Dhruv says hello');
}

// heroPower.dhruv()
// myHeros.dhruv();
// myHeros.arrDhruv();
// heroPower.arrDhruv(); // gives error because arrDhruv only given to the array


// inheritance

const User = {
    name: "Dhruv",
    email: 'd@google.com'
}

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Dhruv     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Abhishek".trueLength()