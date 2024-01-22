console.log("Hello Javascript")

let name = "Omkar"

console.log(`Hello my name is ${name}`)

const designation = new String('developer') //declared as Object
console.log(designation[0])
console.log(designation.__proto__)

// console.log(designation.length)
// console.log(designation.toLocaleUpperCase())
// console.log(designation.charAt([5]))
// console.log(designation.indexOf('r'))

// console.log(designation.substring(3, 6))

// console.log(designation.slice(1, 3))

const newString = "   Om  "
console.log(newString)
console.log(newString.trim())

const url = new String("https://facebook.com/myfacebook%20login")

console.log(url.replace('%20', '-'))
console.log(url.includes('face'))
