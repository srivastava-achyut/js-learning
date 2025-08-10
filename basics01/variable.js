const accountId=144533;
let accountEmail="hello@gmail.com"
var accountPassword="12345"
accountCity="lucknow"
let accountState;
//if we not assign any value and try to print it will give undefined

//accountID=2;
console.log(accountId);

accountEmail="hel@gmail.com"
accountPassword="22222";
accountCity="kanpur";
/*
prefer not to use var
because of issue in block scope and functional
*/
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

