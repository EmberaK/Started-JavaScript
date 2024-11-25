let firstNumber = Number(prompt('Please, u will enter a first number for calculator', 'first num'));
let secondNumber = Number(prompt('Please, u will enter a second number for calculator', 'second num'));
let operationWithNumbers = prompt('Please, u will choose opertion for entered numbers', 'please choose "+" or "-"')
let result;

if(operationWithNumbers === '-'){
    result = firstNumber - secondNumber;
    alert(result);
} else if(operationWithNumbers === '+'){
    result = firstNumber - secondNumber;
    alert(result);
} else{
    alert('Invalid operation. Please choose "+" or "-".')
}

