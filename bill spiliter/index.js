function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill  / numberOfPeople;
    
    return { totalBill , billPerPerson };
  }
  const bill = calculateBill(200, 4);
  console.log(bill.totalBill);      
  console.log(bill.billPerPerson); 
    