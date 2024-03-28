// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     };
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// };

// const Dhruv = new User('dhruv', 'd@fb.com', '123');

// console.log(Dhruv.encryptPassword());
// console.log(Dhruv.changeUserName());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const Abhi = new User('Abhishek', 'd@fb.com', '222');

console.log(Abhi.encryptPassword());
console.log(Abhi.changeUserName());