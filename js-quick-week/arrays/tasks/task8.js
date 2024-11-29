let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [ petro, ivan, mariya ];

function sortByAge(array){
    array.sort((a,b)=>a.age-b.age)
}

sortByAge(arr);

// now: [ivan, mariya, petro]
console.log(arr[0].name); // Іван
console.log(arr[1].name); // Марія
console.log(arr[2].name); // Петро