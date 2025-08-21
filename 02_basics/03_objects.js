 // Singleton
// create.objects   // constructir method

 // Object literals

const mySym = Symbol("key1")

 const JsUser = {
    Name: "Jatin",
    "full Name": "Jatin kumar",
    [mySym]: "mykey1",
    Age: 20,
    Location: "Chamba",
    email: "Jatin@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
 }

//  console.log(JsUser.email)
//  console.log(JsUser["email"]);
//  console.log(mySym);
 
 JsUser.email = "Jatiin123@mail.com"
//  Object.freeze(JsUser)
 JsUser.email = "Jatiin123@microsoft.com"
//  console.log(JsUser);
 

 JsUser.greeting = function(){
//     console.log("Hello js user");  
  };
 
 JsUser.greetingTwo = function(){
//      console.log(`Hello ${this.Name}`);
  };

//  console.log(JsUser.greeting());
//  console.log(JsUser.greetingTwo());
 

 const course = {
   coursename: "BCA",
   price: 999,
   courseInstructor: "Jatin"
 }

//  course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//    "name": "Jatin",
//    "age": 20, 

// }