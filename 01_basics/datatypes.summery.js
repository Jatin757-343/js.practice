// Primitive

// 7 types : string, number, boolean, null, undefined, Symbol, BigInt

const  score = 100
const  scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789123123343n


// Non-primitive (Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "dogesh", "Batman"];

let myObj = {
    name: "Jatin",
    age: 20
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof heros);
