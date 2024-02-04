function setUserName(username){
    this.username = username;
}

function createUser(username, email, password){
    //setUserName(username); //It will give reference only not call the function
    setUserName.call(this, username); //It will actually call the function
    this.email = email;
    this.password = password;
}

const user = new createUser("omkar", "omkar@git.com", "omkar@123");
console.log(user);