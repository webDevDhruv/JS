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

promiseFour.then( (user) => {
    console.log(user);
    return user.username;
}).then( (username) => {
    console.log(username);
})