//const promiseSeven = new Promise(function(resolve, reject){
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

//----------------------------------------------------------//

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

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log('E: ', error);
    }
}

getAllUsers();
