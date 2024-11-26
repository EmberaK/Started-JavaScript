function testWhile(i = 20) {
    while (i > 0) {
        i--;
        console.log(`while loop: ${i}`)
    }
}

function testDoWhile(i = 20) {
    do {
        i--;
        console.log(`do while loop: ${i}`)
    } while (i > 0)
}

function testFor(y = 20) {
    for ( ;y < 10; ++y) {
        console.log(`for loop: ${y}`)
    }
}

testWhile(5);
testFor(5);
testDoWhile(5)
/*
 to execute use from the terminal
node loop.js
 */

let xxx = 'XXX';
console.log(`xxx ${typeof xxx}`)

xxx = Number(xxx)
console.log(`xxx = ${xxx}; ${typeof xxx}`)

console.log(2**31 - 1)
console.log(~5)
console.log(undefined > null)
console.log(undefined < null)
console.log(undefined === null)
console.log(undefined !== null)
console.log(undefined == null)
console.log(undefined != null)
console.log(2^3)
/*
+2147483647
2(dec) = 0010(bin)
3(dec) = 0011(bin)
*/
