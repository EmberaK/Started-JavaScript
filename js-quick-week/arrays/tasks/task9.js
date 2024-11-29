let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(array){
    return array.reduce(((box, user)=> (box+= user.age)),0)/array.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28