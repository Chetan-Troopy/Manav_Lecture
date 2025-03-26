// Check the Prime Number 


// let n = 18;

// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
    
// }

// // Ternary Operator 

// console.log(isPrime ? `${n} is a prime Nnumber` : `${n} is not a prime Number`);




// Create User using Arrow function 


// const createUser = (name, age) => ({ name, age});
// const createUser = (name, age) => ({ 
//     name: name,
//     age: age

// });


// console.log(createUser("Maanav", "21"));




// Factorial of a Number 

// 5! => 5*4*3*2*1 => 120
// 6! => 6*5*4*3*2*1 => 720


// The formula for factorial is \(n!\) \(=n\times (n-1)\times (n-2)\times ...\times 2\times 1\).



// const fact = (n) =>{
//     let res = 1;
//     // for (let i = 1; i <= n; i++) {
//         for (let i = n; i >= 1; i--) {
//         res = res * i;
//     }
//     return res;
// }


// console.log(fact(5));



// Average of an Array 

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let n = 0;
// for (let i = 0; i <= arr.length; i++) {
//     n=n+i;
    
// }
// console.log(n/arr.length);

// n = n + i 
// n = 0 + 1 => 1
// n = 1 + 2 => 3
// n = 3 + 3 => 6
// n = 6 + 4 => 10
// n = 10 + 5 =>15
// n = 15+ 6 => 21
// n = 21 + 7 => 28


// n = n + i => 28
// n  / arr.length
// 28  / 7 => 4