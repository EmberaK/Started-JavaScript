Task to script.js
Rewrite the code below using the switch...case construct.

let numOrStr = prompt('input number or string');
console.log(numOrStr);


if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
};
