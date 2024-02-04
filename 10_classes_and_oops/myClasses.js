class myClass{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}@123`
    }

    formatUserName(){
        return `${this.username.toLowerCase()}`
    }
}
const myObj = new myClass("Omkar", "Omkar@git.com", "Omkar");

console.log(myObj.encryptPassword());
console.log(myObj.formatUserName());

//Behind the scene
// function User(name){
//     this.name;
//     this.email;
//     this.pass;
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}@123`;
// }

// User.prototype.formatUserName=function(){
//     return `${this.username}`;
// }

// const tea = new User("Modi", "modi@bharatsarkar.com", "modiMeloni");
// console.log(tea.formatUserName());
// console.log(tea.encryptPassword());