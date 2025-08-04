const accountID = "14124";
let accountEmail = "akhouriakash@gmail.com";
var accountPassword = "1221";
accountCity = "Jaipur";

// accountID = "12412"; // not allowed

accountEmail = "hc@hcgmail.com";
accountPassword = "1331";

accountCity = "Bengaluru";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);