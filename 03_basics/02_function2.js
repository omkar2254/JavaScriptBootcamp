//Objects and array is javascript

//Learn here about rest operator
//application - to calculate cartPrice
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(100, 200, 300))

//Handle Objects
const user = {
    userName: "Omkar",
    id: 36
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and id is ${anyobject.id}`)
}

//handleObject(user)
//we can pass the object with both of these ways
handleObject({
    userName: "sam",
    id: 20
})


//Array
function returnSecondValue(getArray){
    return getArray[1]
}

const myArray = [1, 2, 3, 4, 5, 6]
console.log(returnSecondValue(myArray))