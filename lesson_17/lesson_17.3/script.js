class BankAccount {
    #balance;
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance(){
        return this.#balance;
    }

    deposit(cash){
        if(cash>0){
            this.#balance += cash;
        } else{
            alert('Your waller said: "Can you give me some money? :)"')
        }
    }
    withdraw(cash){
        if((cash > 0 && this.#balance >= cash)){
            this.#balance -= cash;
        } else if(cash < 0){
            alert('Your waller said: "You didn`t take the money".')
        } else{
            alert('Your waller said: "You don`t have enough money to withdraw the desired amount.".')
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300