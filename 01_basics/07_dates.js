let myDate = new Date()
// console.log(`to string: ${myDate.toString()}`)
// console.log(`toDateString: ${myDate.toDateString()}`)
// console.log(`toISOstring: ${myDate.toISOString()}`)
// console.log(`toJSON data: ${myDate.toJSON()}`)
// console.log(`toLocaleDateString: ${myDate.toLocaleDateString()}`)

console.log(typeof myDate) //object

// let myCreatedDate = new Date(2024, 0, 27)
// console.log(myCreatedDate.toDateString())


let myNewDate = new Date("01-27-2024")
// console.log(myNewDate.toLocaleDateString());
// console.log(myNewDate.getTime());
//console.log(Math.floor(Date.now()/1000))

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);

let local = newDate.toLocaleDateString('default', {
    weekday:"long"
})
console.log(local);
