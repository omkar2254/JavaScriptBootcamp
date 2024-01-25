// function addTwoNumbers(number1, number2){
//     console.log(number1  + number2);
// }
// addTwoNumbers(3, 6);


// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }
// const result = addTwoNumbers(3, 6)
// console.log("Result: " ,result)


// function logInUserMessage(username){
//     return `${username} just logged in`
// }
//const message = logInUserMessage("Omkar")
//const message = logInUserMessage() //If you pass nothing to the function it return undefined
//console.log(message)

//if you pass nothing handle like this
// function logInUserMessage(username){
//     if(!username){
//         console.log("Provide username")
//         return
//     }
//     return `${username} is logged in..`
// }
// const message = logInUserMessage()

//default parameter
function logInUserMessage(username = "sam"){
    return `${username} is logged in`
}
const message = logInUserMessage()




