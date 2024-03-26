const promiseOne = new Promise( (resolve, reject) => {
    // Do an async task
        //DataBase calls, Cryptography, network calls
    setTimeout( () => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then( ()=> {
    console.log('Promise Consumed');
});

new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then( () => {
    console.log('Async 2 resolved');
});

const promiseThree = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'Dhruv', email: 'about@gmail.com'});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true;
        if(!error){
            resolve({username: 'Dhruv', password: '123'})
        }else {
            reject('ERROR: Something went wrong');
        }
    },1000);
});

promiseFour
.then( (user) => {
    console.log(user);
    return user.username;
})
.then( (username) => {
    console.log(username);
})
.catch ( (error) => {
    console.log(error);
})
.finally( () => {
    console.log('The promise is either resolved or rejected');
});


const promiseFive = new Promise (function(resolve, reject){
    setTimeout( () => {
        let error = true;
        if(!error){
            resolve({username: 'javascript', password: '123'})
        }else {
            reject('ERROR: JS went wrong');
        }
    },1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

// async function getAllUsers() {
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.json()
    //     console.log(data);
    // } catch (error) {
    //     console.log("E:", error);
    // }
    
// };

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
});