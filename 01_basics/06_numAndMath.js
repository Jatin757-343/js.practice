const score = 200
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const newNumber = 239.8875

// console.log(newNumber.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

//++++++++++++++++++++++++Math++++++++++++++++++


// console.log(Math.abs(-39));  // abs (absolute) turns negative values into positive
// console.log(Math.round(5.8));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.9));

console.log(Math.random());
console.log(Math.ceil(Math.random()*100) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)