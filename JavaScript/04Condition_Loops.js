// Conditional Statements

    // 1. if Statement 

        // let a = 10;

        // // if (a>5) {
        //     if (a<5) {
        //     // console.log("a is Greater Than 5");
        //     console.log("a is less than 5");
        // }


    // 2. if...else Statement 


        // let b = 2;
        // if (b>5) {
        //     console.log("b is Greater Than 5");
            
        // } else {
        //     console.log("b is Smaller Than 5");
            
        // }


    // 3. if...else if...else Statement   / Ladder if else 

    // let age = 18;

    // if (age>18) {
    //     console.log("You Can Drive");
        
    // } else if(age<18) {
    //     console.log("You Can't Drive");
    // }
    // else{
    //     console.log("Wait!");
    // }



    // 4. Nested if else 


    // if (condition) {
    //     if (condition) {
    //         if (condition) {
                
    //         } else {
                
    //         }
            
    //     }
    // } else {
    //     if (condition) {
            
    //     } else {
            
    //     }
    // }


// Control Flow / Loops


    // Entry Control Loop => First Check Condition and Then Execute code

    // 1. for loop

        // Simple For Loop 

            // for (Initialization; Condition; process/progress) {
            // //    code to be executed  
            // }


            // for (let i = 0; i < 10; i++) {
            //     console.log(i);
                
            // }

        
        // for Each loop

        let arr = ["Orange", "Blue", "Green", "Red", "Yellow", "Purple"];

        // arr.forEach(element => {
        //     console.log(element);
            
        // });

    // for of loop 

        // for (const element of arr) {
        //     console.log(element); 
        // }

    
    // for in loop 

        let myObj = {
            name: "Harsh",
            age: 25,
            email: "harsh@google.com",
            isLoggedIn: true
        }

        // for (const key in myObj) {
        //     console.log(key);   
        // }

        // for (const key in myObj) {
        //     if (Object.prototype.hasOwnProperty.call(myObj, key)) {
        //         const element = myObj[key];
        //         console.log(element);
                
        //     }
        // }


// 2. while loop

    // let i = 10;

    // while (i>0) {
    //     console.log(i); 
    //     i--;

    // }


// Exit Control Loop => => First Execute code and then Check Condition

// 3. do while loop

    // let i = 0;

    // do {
    //     console.log(i);
    //     i++;
    // } while (i<10);