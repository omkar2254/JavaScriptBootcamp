let score = "33"
console.log(typeof score) //this print string
let valueInNumber = Number(score)
console.log(typeof valueInNumber) //this print number

//What is NaN?
let score1 = "49abc"
console.log(typeof score1) // this print string
let valueInNaN = Number(score1)
console.log(typeof valueInNaN) //this print string
console.log(valueInNaN) //this print NaN


//"33" => 33
//"49abc" => NaN
//true => 1 or false => 0


let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn)
//1 => true; 0 => false
//"" => false
//"Omkar" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)