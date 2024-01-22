"use strict"; // treat all js code as newer version

//alert(3 + 3) //we are using node js not browser

//Data types
//Number
let a = 369;

//String 
let b = "I am String";

//BigInt => for big data like stock market websites or apps
let c = 12348595040050n;

//boolean => true or false
let d = true;

//null => standalone value
let e = null; //typeof null is object

//undefined => Initialized but not declared
let f; //typeof undefined is undefined

//Symbol
let symbol1 = Symbol('example');
let symbol2 = Symbol('example');

console.log(symbol1 === symbol2); // false

symbol1 = 'ex'; // Error

console.log(symbol1.description); // optional

//object