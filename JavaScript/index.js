// Method of Data Types 

//  NNSSBBU


// 1. Number method 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

    // let a = 10.6555415454;

    // console.log(a);
    // console.log(`typeof a => ` + typeof a);
    // console.log("Number.isFinite(a) => " + Number.isFinite(a));
    // console.log("Number.isInteger(a) => " + Number.isInteger(a));
    // console.log("parseInt(a) => " + parseInt(a));
    // console.log("parseInt(a) => " + parseFloat(a));
    // console.log(a.toFixed(2));
    // console.log(a.toString());
    
    

    


// 2. Math method 

// let a = 8.4;
// let b = 81;

// console.log(Math.PI);
// console.log(Math.PI.toFixed(3));
// console.log(Math.ceil(a));  // Returns the smallest integer greater than or equal to the input.
// console.log(Math.floor(a)); // Returns the largest integer less than or equal to the input.
// console.log(Math.round(a));
// console.log(Math.random());     // 0-1
// console.log(parseInt(Math.random()*7));     // 1-6
// console.log(Math.round((Math.random()*7)));     // 1-6
// console.log(Math.max(10,8,5,11));
// console.log(Math.min(10,8,5,11));
// console.log(Math.sqrt(b));




    


// 3. String method 

    // let a = "    Namaste Bharat    ";

    // let b = "Maanav patel";

    // console.log(a);
    // console.log(typeof a);
    // console.log(a.toUpperCase());
    // console.log(a.toLowerCase());
    // console.log(a.length);
    // console.log(a.indexOf("b"));
    // console.log(a.indexOf("B"));
    // console.log(a.indexOf("a"));
    // console.log(a.lastIndexOf("a"));
    // console.log(a.concat(" Mata"));
    // console.log(b);
    // console.log(b.replace("patel", "Parikh"));
    // console.log(a.trim());
    
    

    
    
    
    
    


// 4. Array method  

    // let arr = [10,20,30,40,50];

    // console.log(arr);
    // console.log(arr.length);
    // console.log(arr[0]);     // 1
    // console.log(arr[1]);     // 2
    // console.log(arr[2]);     // 3
    // console.log(arr[3]);     // 4
    // console.log(arr[4]);     // 5
    // console.log(arr[5]);     // undefined
    // console.log(arr.push(10));
    // console.log(arr.push(20));
    // console.log(arr);
    // console.log(arr.pop());
    // console.log(arr);
    // console.log(arr.unshift(200));
    // console.log(arr.unshift(300));
    // console.log(arr);
    // console.log(arr.shift());
    // console.log(arr);
    // console.log(arr.slice(2, 4));
    // console.log(arr);
    // console.log(arr.splice(2,4));
    // console.log(arr);
    // console.log(arr.reverse());
    // console.log(arr);

    // let myarr = [20,22,55,54,72,19,84];
    // console.log(myarr);
    // console.log(myarr.sort());
    
    

    // Map, Filter, Reduce,=> Higher Order Function
    // For Each   => Loop
    

// 5. Object method 

//  let myObj =  {
//     user: "Maanav",
//     age: 21,
//     isLoggedIn: true
//  }

//  console.log(myObj);
 
// console.log(myObj.user);
// console.log(myObj.age);
// console.log(myObj.isLoggedIn);
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));


// Object.freeze(myObj)

// myObj.user = "Ramesh";

// console.log(myObj);


// Object Create 
    
// const newObj = Object.create(myObj)
// const newObj = {}

// console.log(newObj);
// console.log(Object.entries(myObj));

// Returns an array containing all of the [key, value] 
// pairs of a given object's own enumerable string properties.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// [ 
//     [ 'user', 'Maanav' ], 
//     [ 'age', 21 ], 
//     [ 'isLoggedIn', true ] 
// ]



// const oneObj = {a:1, b:2};
// const twoObj = {c:3, d:4};

// const threeObj = {}

// console.log(Object.assign(threeObj ,oneObj, twoObj));

// console.log(oneObj);
// console.log(twoObj);
// console.log(threeObj);




// console.log(myObj);

// Object.seal(myObj)

// delete myObj.user

// console.log(myObj);
