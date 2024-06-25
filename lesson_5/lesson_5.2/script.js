const exchangeRate = 26;
const maxDollars = 100;
for(let dollars = 10; dollars <= maxDollars; dollars += 10){
    const ghrivna = dollars * exchangeRate;
    console.log(`${dollars} dollars = ${ghrivna} grn;`);
}