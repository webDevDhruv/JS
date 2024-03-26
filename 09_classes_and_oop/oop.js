const user = {
    username: 'Dhruv',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log('Got user details from database');
        // console.log(`USername: ${this.username}`);
        console.log(this);
    }
}

// console.log(user['username']);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
};

const userOne = new User('Dhruv', 12, true);
const userTwo = new User('dhruv', 11, false);
console.log(userOne.constructor);
// console.log(userTwo);