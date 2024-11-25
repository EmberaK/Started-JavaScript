let y=0;
let x = 20 + y++
console.log(`x = 20 + y++ ... ${x}`) // 20
x = 20 + y
console.log(`x = 20 + y ... ${x}`)   // 21
x = 20 + ++y
console.log(`x = 20 + ++y ... ${x}`) // 22
x = 20 + y
console.log(`x = 20 + y ... ${x}`)   // 22

/*
node operators.js
*/