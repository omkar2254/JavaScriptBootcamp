// singleton - The singleton pattern in JavaScript ensures that a class has only one instance and provides a global point of access to that instance. (it made from object literals and not from constructor)

//object literals 
const mySym = Symbol("key1")
const jsUser = {
    name: "Omkar",
    "Full_Name": "Omkar Patil",
    age: 23,
    designation: "Software Engineer",
    email: "omkar@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Thursday"],
    [mySym]: "myKey1"
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["Full_Name"]); //Need to access like this

//access symbol
console.log(jsUser[mySym])

//to change the value
let newEmail = jsUser["email"] = "omkar@chatgpt.com"
console.log(newEmail);

//Object.freeze(jsUser); //after this line values are not changed
// jsUser.name = "Katmandu"
// console.log(jsUser["name"])

//using function
jsUser.greeting = function(){
    console.log("Hello I am Omkar");
}
jsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());