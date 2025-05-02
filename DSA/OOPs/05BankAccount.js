class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance
    }


    deposit(amount){
        this.balance += amount;
        console.log(`${this.owner} deposited ${amount}, -> New balance : ${this.balance}`);
        
    }


    withdraw(amount){
        if (amount >this.balance) {
            console.log(`Insufficient Balance  for ${this.owner}`);
            
        } else {
            this.balance -= amount;
            console.log(`${this.owner} withdraw ${amount}, => New Balance : ${this.balance}`);
        }
    }


    checkBalance(){
        console.log(`${this.owner}'s current balance is ${this.balance}`);
        
    }

}



const account1 = new BankAccount('Rahul', 5000)
console.log(account1);
account1.deposit(500)
account1.withdraw(2000)
account1.checkBalance()
