const accountId = 2202;
let accountName = "Dhruv";
let accountEmail = "Dkpanchal850@gmail.com";
var accountPassword= "12345"
accountCity = "Ahmedabad";
let accountState;

// accountId = 2222 // Not Allowed
accountEmail = "webdevdhruv@gmail.com";
accountPassword = "98765";
accountCity = "Gandhinagar";

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountState]);