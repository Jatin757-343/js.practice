function myName() {
console.log("J");
console.log("A");
console.log("T");
console.log("I");
console.log("N");
}

// myName()

// function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2);
// }

// const result = addTwoNumbers(5,6)
// console.log('Result: ', result);

function addTwoNumbers(num1, num2) {
//    let result = (num1 + num2)
//    return result
    return num1 + num2
}

const result = addTwoNumbers(5,6)
// console.log('Result: ', result);


function userlogInMessage(username = "Bot"){
    if(!username){
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}
 console.log(userlogInMessage("Jatin"))
 console.log(userlogInMessage("Jatin"))
