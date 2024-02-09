//array is an object where we can store collection of items in single variable
//shallow copy - share the same reference
//deep copy - do not share the same reference

const myArr = [1 , 2, 4, 5, 6, 7]

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[0])

//------------------Array methods--------------------//

//myArr.push(3)

//myArr.pop(); //remove last element

//myArr.unshift(9);

//myArr.shift(); //remove first element

//myArr.includes(9);

//myArr.indexOf(7);

//console.log(myArr)

//const newArr = myArr.join()
//console.log(newArr) //it will join the array as well convert it into string
//console.log(typeof newArr)

//------------------------slice, splice--------------------------//
// console.log("Original Array: ", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log("Using slice: ", myn1)
// console.log("After slicing operation: ", myArr)

// const myn2 = myArr.splice(1, 3);
// console.log("Using splice: ", myn2)
// console.log("After splicing operation: ", myArr)
