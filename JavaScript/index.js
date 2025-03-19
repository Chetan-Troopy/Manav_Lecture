// Patterns using Loop


for (let i = 5; i >= 1; i--) {    // Outer Loop
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) { // Inner Loop
        row += "* ";  // Append '*' to the row string
    }
    console.log(row); // Print the row after the inner loop finishes
}