//Control flow structure

const ifIsUserLoggedIn = true

if(true){
    //execute
}

// <, >, <=, >=, ==, !=, ===

// const temprature = 28
// if(temprature < 22){
//     console.log("Turn on the AC");
// } else{
//     console.log("Turn off the AC");
// }

//scope
// const score = 200
// if(score > 100){
//     let power = "fly";
//     console.log(`Your Power is ${power}`);
// }
// console.log(`${power}`) //not able to access


// const balance = 600000
// if(balance > 100000) console.log("Good"); //You can write like this also

//if-else ladder
// let balance = 200
// if(balance > 100){
//     console.log("More than 100");
// }else if(balance > 150){
//     console.log("More than 150");
// }else{
//     console.log("Sufficient balance");
// }

// const userLoggedIn = true
// const debitCard = true
// if(userLoggedIn && debitCard){
//     console.log("Ready for transcation");
// }

let googleLogin = true
let userLogin = false
if(googleLogin || userLogin){
    console.log("Successfully logged in")
}
