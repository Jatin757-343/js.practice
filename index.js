// // // Find percentage of n Number

// const { log } = require("node:console");
// const { reverse } = require("node:dns");

// const { log } = require("console")

// const { log } = require("console");

// // const { log } = require("console");

// // let MyArr = [250, 645, 300, 500, 400];

// // for (let i = 0; i < MyArr.length; i++) {
// //     MyArr[i] = (MyArr[i] * 29 / 100);
// // }
// // console.log(MyArr);






// // -----------------------Array Methods--------------------------//


// // Concat method in array
// // Combines two arrays and returns a new array.Does not modify original array.

// // let Arr1 = [1, 2, 3];
// // let Arr2 = [4, 6, 7];
// // let Arr3 = [8, 9, 10];
// // let result = Arr1.concat(Arr2).concat(Arr3);
// // console.log(result);
// // console.log(Arr1);
// // console.log(Arr2);
// // console.log(Arr3);



// // shift method in array
// //Remove first element of an array, returns the removed element.Also modifies the original array
// // let number = [10, 20, 30, 40];
// // let remove = number.shift();
// // console.log(remove);
// // console.log(number);
  

// // unshift method in Array
// //Adds new element in the begining of array and also modifies the of original array and return new lenght of array.
// // let number = [10, 20, 30, 40];
// // let add = number.unshift(5);
// // console.log(add);
// // console.log(number);


// // toString method in array
// //Change entire array to string.Convert typeof array to string.

// let number = [10, 20, 30];
// let result = number.toString();
// console.log(number);

// console.log(typeof result);


// // Push method
// // Add one or more new elements at the end of an array.Returns new length of array, Modifies original array.

// // let number = [10, 20, 30, 40];
// // let num2 = number.push(50,60);
// // console.log(num2);
// // console.log(number);


// // pop method in Array
// // Remove last element from an arrayBuffer. And return that element.

// // let number = [60, 70, 80, 90];
// // let result = number.pop();
// // console.log(result);
// // console.log(number);

  


// -------------------Functions in js-------------------------//


// function Numbers(num1, num2) {
//     console.log(num1+num2);
// }
// Numbers(7, 6);



// ------------------------------Call By Value------------------//

// function CalculateSum(marks) {
//     let result = 0;
//     for (let i = 0; i < marks.length; i++) {
//         result+= marks[i];  
//     }    

//     let percentage = (result /(marks.length *100) *100)
//       return{
//         result:result,
//         percentage: percentage.toFixed(1) + "%"
//       };   
// }
// let marks = [60, 40, 50, 60, 90, 83]; 
// let total = CalculateSum(marks);

// console.log("Total: ", total.result);
// console.log("Percentage: ", total.percentage);




//-------------------------------Change array to uppercase-------------------------//


// let city = ["delhi", "mumbai", "kolkata", "pune", "goa"]
// city.forEach((cityname, index)=>{
//   city[index]=cityname.toUpperCase();
// })
// console.log(city);









//-----------------------Question1----------------------------//

// function fabonacci(n) {
//   let arr = [];
//   let a = 0, b = 1;

//   for (let i = 0; i < n; i++) {
//     arr.push(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }

//   return arr;
// }
// console.log(fabonacci(10));









//------------------------------Question2--------------------------------//

// let student ={
//   Hindi: 35,
//   English: 40,
//   Science: 45,
//   SSC:50,
//   Maths:40
// }
// function total(nums){
//      nums= Object.values(student).reduce((mark,sum)=>mark+sum);
//      let result = (nums>=200)? "PASSED": "FAILED";
//      console.log(result);
  
// }
// total(student);









//----------------------------Question3-----------------------------//

// let str = "Good morning";
// let arr = str.split(" ");
// let res = arr.reverse();
// let str2 = res.toString();
// console.log(str2);










//-------------------------------Questions4----------------------------------//



// let Number = [12, 15, 18]

// function processNumber(nums){
//   for (const num2 of Number) {
//   if (num2%3==0 && num2%5==0) {
//   let num3=num2+10;    
//   console.log(num3);
//   } else if(num2%3==0){
//     let num3=num2*3;
//     console.log(num3);
//   }else if(num2%5==0){
//     let num3=num2+5;
//     console.log(num3);
//   }    
//   }
//   {
//     return(processNumber)
//   }
// }
// processNumber(Number);


      
// let arr = [10, 20 ,30,40];
 
// function CountandSum(nums) {
//  let res = nums.filter(num => num % 2 === 0 && num > 10);
//  let result = res.reduce((acc,curr)=> acc+curr, 0);

//  return{
//     result:result
//  };
// }
// console.log(CountandSum(arr));
  

// function numberPattern(n){
//    for (let i = 1; i < n; i++) {
//       let line = "";
//       for (let j = 0; j < n; j++) {
//          line = line+j;
//       }
//       console.log(""+line);
      
      
//    }
// }
// numberPattern(5);

