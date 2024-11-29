let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array){
    return array.slice().sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без змін)