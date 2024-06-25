let N = prompt("Please, write a number");

if (isNaN(N) || N <= 0) {
    console.log("Please enter a positive integer.");
} else {
    N = Number(N);
    function isPrime(num) {
        if (num <= 1) {
            return false; // 0 and 1 are not prime numbers
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    if (isPrime(N)) {
        console.log("This number is prime");
    } else {
        console.log("This number is not prime");
    }
}
