let integerNumber;
do{
    integerNumber = prompt("Please enter an integer number");
}while(isNaN(integerNumber) || integerNumber <= 0);

N = Number(integerNumber)
function isPrime(integerNumber){
    for(let i = 2; i <= Math.sqrt(integerNumber); i++){
        if(integerNumber % i === 0){
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