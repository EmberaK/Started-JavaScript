let arr = []
let userInput;
do {
    userInput = prompt('Please, write words', 'word');
    if(userInput !== null && userInput !== 'word'){
        userInput = userInput.toLocaleLowerCase();
        arr.push(userInput)
    };
} while (userInput !== null && userInput !== 'word')
console.log(arr);