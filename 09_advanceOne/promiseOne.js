//The promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value
//Do an async task
//DB calls, network calls


// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

//---------------------------------------------------------//

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve();
//     }, 4000)
// }).then(function(){
//     console.log('promise resolved');
// })

//---------------------------------------------------------//
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task three");
//         resolve();
//     }, 6000);
// })

// promiseThree.then(function(){
//     console.log("promise done");
// })

//---------------------------------------------------------//

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Hey I am Developer");
//         resolve();
//     }, 9000);
// })

// promiseFour.then(function(){
//     console.log("Got a developer");
// })

//---------------------------------------------------------//
// function doCallBack(name, callback){
//      console.log(`${name} is Ready`);
//      callback();
// }
// function callMe(){
//     console.log("Hey I am call back function");
// }

// doCallBack("Omkar", callMe);

//---------------------------------------------------------//
//for passing data from server
// new Promise(function(resolve, reject){
//     resolve({username: "Omkar", age: "22"})
// })

// .then(function(user){
//     console.log(user.username);
// })

//---------------------------------------------------------//

// const promiseFive = new Promise(function(resolve, reject){
//     const error = true;
//     if(!error){
//         resolve({username: "Omkar", age: 22});
//     }else{
//         reject("Error!!");
//     }
// }, 3000)

// promiseFive.then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("The promise is either resolve or rejected"));


//----------------------------------------------------------------------//

//With the help of async or await
// const promiseSix = new Promise(function(resolve, reject){
//     const serverData = false;
//     if(serverData){
//         resolve("Data successfully fetched");
//     }else{
//         reject("Error..");
//     }
// })

// async function consumePromiseSix(){
//     try{
//         const response = await promiseSix;
//         console.log(response);
//     }catch(serverData){
//         console.log(serverData);
//     }
// }
// consumePromiseSix();


//--------------------------------------------//
// const promiseSeven = new Promise(function(resolve, reject){
//     const networkRequest = true;
//     if(networkRequest){
//         resolve("Successfully Connected");
//     }else{
//         reject('Network not respond');
//     }
// }, 4000);

// async function networkCall(){
//     try{
//         const response = await promiseSeven;
//         console.log(response);
//     }catch(networkRequest){
//         console.log(networkRequest);
//     }
// }

// networkCall();

//--------------------------------------------------------//
//Async & Await
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         //console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log('E: ', error);
//     }
    
// }
// getAllUsers();


//With the help of then
fetch('https://jsonplaceholder.typicode.com/users/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
