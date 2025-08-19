const Marvel_heros = ["Ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

// Marvel_heros.push(dc_heros)

// console.log(Marvel_heros);
// console.log(Marvel_heros[3][0]);

// const allHeros = Marvel_heros.concat(dc_heros)
// console.log(allHeros);  //Concat combines two arrays in one

const newHeros = [...Marvel_heros, ...dc_heros]

console.log(newHeros); // Spread : spread all values individually  

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotheArr = anotherArr.flat(Infinity)
console.log(real_anotheArr);



console.log(Array.isArray("Jatin"));
console.log(Array.from("Jatin"));
console.log(Array.from({name: "Jatin"}));  // important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
