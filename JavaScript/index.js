// Higher Order Function

// -> Higher-order functions are functions that either take one 
// or more functions as arguments, or return a function as their
//  result, enabling powerful abstractions and code reuse. 

// -> A function takes another function as an Arguments
    // is a Higher Order Function 


    // Map 

    // The map() method of Array instances creates a new array 
    // populated with the results of calling a provided function 
    // on every element in the calling array.



    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // num.map((e)=>{
    //     console.log(e);
        
    // })

    // const doubled = num.map(num => num * 2);
    // const doubled = num.map((e) =>{
    //     e = e*2
    //     // console.log(e);
        
    // });

    // console.log(doubled);
    
    
    // Filter 


    // const even = num.filter(num => num % 2 === 0);

    // console.log(even);

    // Reduce 

    console.log(num);
    

    const sum = num.reduce((acc, num) => acc + num, 0)

    console.log(sum);
    




// Callback Function 

// -> A callback function is a function passed into another function 
// as an argument, which is then invoked inside the outer function to 
// complete some kind of routine or action

// -> A function passed into another function as an Arguments
    // is a Callback Function 

//    function a(b) {                 // HOF
//         b();
//         console.log("a");
//       }

//       a(function b() {              // Callback
//         console.log("b");
//       });


    // console.log("Good Morning");
    // setTimeout(() => {
    //   console.log("Hello");
      
    // }, 5000);
    // console.log("Good Afternoon");
    // console.log("Good Night");
    


    // ->   Time and Tide and JavaScript Wait for none




    // setInterval(() => {
    //     console.log("Namaste");
        
    // }, 2000);


