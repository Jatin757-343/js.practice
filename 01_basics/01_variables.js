const accountId = 10987
let accountEmail = "jatin@google.com"
var accountPassword = "12345"
accountCity = "CHamba"
let accountState;

// accounyId = 2 //Not allowed
// Prefer not to use vae due to issue in block scope and functional scope

accountEmail ="jatin123@google.com"
accountPassword = "1212121"
accountCity = "Dalhousie"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
