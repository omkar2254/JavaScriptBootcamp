
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log(a) //it will print 10
}

console.log(a) //it will print 10
// console.log(b)
console.log(c)  //var is a global scope

//scope 
function one(){
    const username = "Omkar"

    function two(){
        const url = "youtube.com"
        console.log(username)
    }

    //console.log(url)

    two()
}
//one()


//-----------------------------//

if(true){
    const username = "Omkar"

    if(username === "Omkar"){
        const website = "youtube"
        console.log(username + website)
    }

    //console.log(website) //--produce error
}

//console.log(username)  //--produce error

//-------------------------Intresting Mini Hoisting--------------------------------------//
console.log(addOne(5))
function addOne(num){
    return num + 1;
}

//console.log(addTwo(5)) //It will produce error
const addTwo = function(num1){
    return num1 + 2;
}
console.log(addTwo(5)) //This is the correct way