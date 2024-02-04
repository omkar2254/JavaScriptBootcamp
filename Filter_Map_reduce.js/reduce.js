const myArr = [1, 2, 3]

// const learnReduce = myArr.reduce(function (acc, currVal) {
//     return acc + currVal
// }, 0)
// console.log(learnReduce)


//Application like shopping cart
const myNums = myArr.reduce(function (acc, currVal){
    return acc + currVal;
}, 3)
//console.log(myNums);

const cartItemsPrice = [12, 33, 54, 34, 22]
const totalPrice = cartItemsPrice.reduce((intialVal, totalVal) => intialVal+totalVal, 0)
//console.log(`Total price: ${totalPrice}/- Only`);

const shoppingItems = [
    {
        courseName: "Android Development",
        price: 499
    },
    {
        courseName: "IoS Development",
        price: 499
    },
    {
        courseName: "Web Development",
        price: 499
    },
    {
        courseName: "Data Science",
        price: 499
    },
    {
        courseName: "Python Development",
        price: 499
    },
]

const totalCoursePrice = shoppingItems.reduce((intialVal, totalVal) => intialVal + totalVal.price, 0)
console.log(totalCoursePrice);