const accountId = 123456
let accountEmail = "urvashikushwaha@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

//accountId = 2

accountEmail = "kushwaha@gmail.com"
accountPassword = "0000"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])