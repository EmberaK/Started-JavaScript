class BankAccount {

    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    getBalance(){
        return this.balance;
    }

    deposit(cash){
        this.balance += cash;
    }
    withdraw(cash){
        this.balance -= cash;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300