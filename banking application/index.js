
const customer = {
    name: "Naveen",
    balance: 5000
  };
  
  // Define the account object  
  function deposit(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
  }
  
  // Function to transfer funds from one customer to another
  function withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
    } else {
      console.log(`Insufficient funds. Withdrawal of ${amount} unsuccessful.`);
    }
  }
  
  // Function to transfer funds from one account to another
  customer.deposit = deposit;
  customer.withdraw = withdraw;
  
  // Call the functions
  
  customer.deposit(1000); 
  customer.withdraw(2000); 
  customer.withdraw(6000); 
  
  //