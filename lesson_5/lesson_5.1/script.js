// for

for (iFor = 20; iFor <= 30; iFor += 1 / 2) {
    console.log(iFor);
}

// while

let iWhile = 20;
while (iWhile <= 30) {
    console.log(iWhile)
    iWhile += 1 / 2;
}


// do and while

let iWhileDo = 20;
do {
    let iWhileDoInner = iWhileDo;
    while (iWhileDoInner <= 30) {
        console.log(iWhileDoInner)
        iWhileDoInner += 1/2;
    
    }
    break;
} while (false);


// for ... of

const numbers = [];
for (let ia = 20; ia <= 30; ia += 0.5) {
  numbers.push(ia);
}
for (let number of numbers) {
  console.log(number);
}

// for ... in

const numbers2 = [];
for (let ib = 20; ib <= 30; ib += 0.5) {
  numbers.push(ib);
}
for (let index in numbers2) {
  console.log(numbers2[index]);
}
