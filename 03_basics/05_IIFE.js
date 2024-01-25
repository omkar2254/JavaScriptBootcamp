//Immediately invoked function expression

(function chai(){
    //named iife
    console.log(`DATABASE CONNECTED`)
})();

( (name)=> {
    //simple iife
    console.log(`DATABASE CONNECTED TWO ${name}`)
})('Omkar')