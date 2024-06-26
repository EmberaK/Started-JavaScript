let N;
do{
    N = prompt("please write");
}while(isNaN(N) || N <= 0);

N = Number(N)
function isPrime(N){
    for(let i = 2; i <= Math.sqrt(N); i++){
        if(N % i === 0){
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