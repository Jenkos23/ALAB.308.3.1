//Assignment  Loop
// Part 1: FizzBuzz
// iterate through 1-100
for (let z = 1; z <= 100; z++){
    if (z % 3 && z % 5 === 0) {
        console.log('fizzBuzz')
    }
    else if (z % 3 === 0){
        console.log("fizz")
    }
    else if (z % 5 === 0){
        console.log("Buzz")

    }

    else{
        console.log(z)
    }

}

// Part 2: Prime Time
// Declare an arbitrary number n
let n = 9;

// Loop to find the next prime number
let isPrime;
while (true) {
    n++; // Increment n to check next number
    isPrime = true; // Assume n is prime until proven otherwise

    // Check if n is prime
    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            isPrime = false; // Found a divisor, n is not prime
            break; // Exit the inner loop
        }
    }

    // If n is prime, log it and exit the loop
    if (isPrime) {
        console.log(n);
        break; // Exit the outer while loop
    }
}

//Part 3: Feeling Loop

// Example CSV string
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Initialize variables
let row = "";  // Used to build each row
let cell = ""; // Used to build each cell

// Loop through the characters in the csvData
for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    // Check for newline character to indicate end of a row
    if (char === '\n') {
        // Log the row with the cells
        console.log(row);
        // Reset row for the next one
        row = "";
    } else if (char === ',') {
        // If we encounter a comma, add the cell to the current row
        row += cell + ' '; // Add cell followed by space for visual clarity
        // Reset cell for the next one
        cell = "";
    } else {
        // Otherwise, continue building the current cell
        cell += char;
    }
}

// At the end, log the last row if there's any data
if (cell.length > 0) {
    row += cell; // Add the last cell to the row
    console.log(row); // Log the last row
}