/* ## Day 2: Functions and Loops
- **Function declarations**: regular and arrow functions
- **Using parameters and returning values**
- **Loops**: `for`, `while`, `do...while`

### Practice:
Write a function that calculates the sum of numbers from 1 to a user-provided number.
 */
let userInput = prompt('Please, enter your number', 'here must be your number');

if (userInput === null || userInput.trim() === "" || userInput === "here must be your number") {
    alert(`You haven't entered a number`);
} else {
    let userInput = Number(userInput);
    if (isNaN(userInput) || userInput <= 0) {
        alert(`Your number should be more than 0`);
    } else {
        let totalSum = 0;
        for (let currentNumber = 1; currentNumber <= userInput; currentNumber++) {
            totalSum += currentNumber;
        }
        alert(`The sum of numbers from 1 to ${userInput} is: ${totalSum}`);
    }
}
