let N = parseInt(prompt("Please enter an integer N:"));
if (isNaN(N)) {
  prompt("Invalid input. Please enter a valid integer.");
} else {
  console.log(`All integers from 1 to 100 whose square does not exceed ${N} are:`);
  for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= N) {
      console.log(i);
    } else {
      break;
    }
  }
}
