const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const dhruv = {
    name: 'TEA',
    price: 250,
    isAvailable: true,

    orderChai: function(){
            console.log('Chai nahi bani');
    }
}
console.log(Object.getOwnPropertyDescriptor(dhruv, "name"));

Object.defineProperty(dhruv, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(dhruv, "name"));

for (let [key, value] of Object.entries(dhruv)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}