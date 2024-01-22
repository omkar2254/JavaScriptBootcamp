//Stack - all primitive types

//Heap - all non-primitive types

//stack memory
let myName = "Omkar Patil"

let anotherName = myName

anotherName =  "chai aur code"

console.log(myName)
console.log(anotherName)

//heap memory
const employee = {
    name: "Omkar Patil",
    designation: "Software Engineer"
}

console.log(employee.name + " " + employee.designation);

employee.designation = "React Developer"

console.log(employee.name + " " + employee.designation);