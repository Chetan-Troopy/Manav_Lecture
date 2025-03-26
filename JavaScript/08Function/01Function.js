// Function In JS


// 2. function Declaration 


// function name() {
//     // code to be Executed 
// }

// greet();


// function greet() {
//     console.log("Namaste");   
// }



// Function Calling 

// greet();




// Function Parameters and Arguments 


// function addTwoNumber(Param1, param2){

// }
// while Declaring a Function we pass some Parameters in Parenthesis 


// addTwoNumber(Arg1, Arg2)
// while Calling a Function we pass some Arguments in Parenthesis 

// function addTwoNumber(x, y){
    // function addTwoNumber(x, y=8){
    // console.log(x);
    // console.log(y);
    
    // console.log(x+y);
    
// }

// addTwoNumber(5,4);
// addTwoNumber(4);
// addTwoNumber(4, 10);
// addTwoNumber("Maanav","parikh");



// Functions are of Two Type 

// 1. Built In Function

    // =>  toString(), Push(), Pop(), etc.


// 2. Custom Function

    // function greet() {
    //     console.log("Hello");
    // }

    // greet();




// 2. Function Expression

    // greetExp();

    // const greetExp = function () {
    //     console.log("Hello Function Expression");
    // }

    // greetExp();


    // Function Declaration are Hoisted but Function Expression are not hoisted 




    // a= 10;

    // console.log(a);

    // var a;     
    // var a =10;     
    


    // Hoisting is a JavaScript behavior that moves variable and function declarations 
    // to the top of their scope before code execution. This allows developers to use 
    // these variables and functions before they are declared. 



    // 3. Arrow function  => Introduced In ES6


    // const greetArrow = () => {
    //     console.log("Hello Arrow Function");
    // }

    // greetArrow();


    // Task : What is "this" Keyword?


    // 4. IIFE 


    // (function () {
    //     console.log("IIFE");
    // }());


    // An Immediately Invoked Function Expression (IIFE) in JavaScript is a function 
    // that is defined and executed immediately after it is created, often used to 
    // create a private scope and prevent global scope pollution. 

    // Here's a breakdown:

    // Definition: An IIFE is a JavaScript function that is defined and executed 
    // immediately. 


    // Syntax: It typically looks like this: (function() { /* code */ })(); 

    // The first set of parentheses () groups the function declaration, 
    // making it an expression. 

    // The second set of parentheses () immediately invokes the function