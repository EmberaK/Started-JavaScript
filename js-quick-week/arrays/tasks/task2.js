let arrNumbers = [];
do{
   let enterNumberAgain = prompt('Please, enter your number', '0');
   if(enterNumberAgain === '' || enterNumberAgain === null || isNaN(enterNumberAgain)) break;
   arrNumbers.push(enterNumberAgain);
} while(true);

let sumNumbers = 0;
arrNumbers.forEach(arrNumber =>{
    sumNumbers+=arrNumber;
})
console.log(sumNumbers)