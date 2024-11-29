let arr = [5, 3, 8, 1];

function filterRange(array, minNumber, maxNumber){
    return array.filter((arrayElement) => minNumber <= arrayElement && arrayElement <= maxNumber);
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (відфільтровані значення)

console.log( arr ); // 5,3,8,1 (не змінюється)