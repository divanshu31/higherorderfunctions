function createBankAccount(initialBal) {
    let balance = initialBal;

    return {
        deposit(amount) {
            balance += amount;
            return `Deposited ₹${amount}. New balance: ₹${balance}`;
        },
        withdraw(amount) {
            if(amount > balance){
                return "Insufficient funds";
            }
            balance -= amount;
            return `Withdrew ₹${amount}. New balance : ₹${balance}`;
        },
        getBalance() {
            return `Current Balance: ₹${balance}`;
        }
    };
}
const myAccount = createBankAccount(1000);  
console.log(myAccount.deposit(500));   // "Deposited ₹500. New balance: ₹1500"  
console.log(myAccount.withdraw(200));  // "Withdrew ₹200. New balance: ₹1300"  
console.log(myAccount.withdraw(1500)); // "Insufficient funds"  
console.log(myAccount.getBalance());   // "Current balance: ₹1300"  

