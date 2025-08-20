// const instaUser = new Object()

const instaUser = {}
instaUser.id = "123xyz"
instaUser.Name = "Ninja"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "Regular@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Jatin",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);


// Combining two objects

const obj1 = {1: "A", 2: "B", 3: "C"}
const obj2 = {4: "D", 5: "E", 6: "F"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);