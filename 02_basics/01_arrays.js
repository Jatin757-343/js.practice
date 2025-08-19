 // Array 

 const myArr = [0, 1, 2, 3, 4, 5]
 const myHeros = ["Shaktiman", "Devil",]

const myArr2 = new Array (1, 2, 3, 4)
//  console.log(myArr[1]);
 

 // Array merhods

//  myArr.push(6)  // Push value to existing array
//  myArr.push(7)
//  myArr.pop()    // remove last value 
//  console.log(myArr);
 
// myArr.unshift(9)  // Insert a new value in the start of array
// myArr.shift()   //remove first value form arr

// console.log(myArr.includes(9));  // False
// console.log(myArr.indexOf(0));

// const newArr = myArr.join()  // typeof changed, bind
// console.log(myArr);
// console.log(newArr);

console.log("A", myArr);


const myn1 = myArr.slice(2, 4)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(2, 4) //Manipulate and seprate values from original array

console.log("c", myArr);
console.log(myn2);
