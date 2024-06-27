let integerNumber = parseInt(prompt("Please enter an integer from 1 to 100."));


if (isNaN(integerNumber) || integerNumber > 100 || integerNumber < 1) {
  prompt("Invalid input. Please enter a valid integer.");
} else {
  console.log(`All integers from 1 to 100 whose square does not exceed ${integerNumber} are:`);
  for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= integerNumber) {
      console.log(i);
    } else {
      break;
    }
  }
}
