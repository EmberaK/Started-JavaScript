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

