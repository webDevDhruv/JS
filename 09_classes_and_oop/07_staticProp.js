class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

// const Dhruv = new User('Dhruv')
// console.log(Dhruv.createID());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const Iphone = new Teacher('Iphone', 'i@phone.com');
console.log(iphone.createID())
