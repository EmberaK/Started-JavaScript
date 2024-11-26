/* pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1 */


function pow(number, degree) {
    console.log(number ** degree);
}

let number = prompt('Please, enter your number');
let degree = prompt('Please, enter degree for your entered number');

if (number == '' || degree == '' || isNaN(number) || isNaN(degree)) {
    console.log('You have a problem with number or degree for the number');
} else {
    pow(number, degree);
}


// node task2.js