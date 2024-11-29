let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, minNumber, maxNumber){
    for(let index=0; index<array.length; index++){
        if(minNumber>array[index] || array[index]>maxNumber){
            array.splice(index, 1);
            index--
        }
    }
}


filterRangeInPlace(arr, 1, 4); 

console.log( arr ); // [3, 1]