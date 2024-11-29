function unique(arr) {
    let result=[];
    arr.forEach(element => {
        if(!result.includes(element)){
            result.push(element);
        }
    });
    return result;
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

console.log(unique(strings)); // Привіт, Світ, :-O