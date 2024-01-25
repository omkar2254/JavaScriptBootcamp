const info = {
    user: "Omkar",
    id: 20,
    myFunction: function(){
        console.log(`${this.user} , is logged in`)
    }
}
// info.myFunction();
// info.user = "sam"
// info.myFunction();

console.log(this); //prints an empty object

// function myMessage(){
//     let user = "Omkar";
//     console.log(this.user); //Not work it works in objects only
// }

const chai = ()=>{
    let user = "Omkar";
    console.log(`${user}, chai is ready`);
}
//chai()

const addTwo = (num1, num2) => (num1+num2); //implicit return
console.log(addTwo(3, 6));

const printName = () => ({user: "Omkar"})  //objects always need to be in parenthesis
console.log(printName())