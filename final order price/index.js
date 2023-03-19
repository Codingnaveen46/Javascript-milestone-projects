const calculateTotalCost = (cart) => {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalCost += cart[i].unitPrice * cart[i].quantity;
    }
    return totalCost;
  };
  const cart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 50, quantity: 3 },
    { unitPrice: 200, quantity: 1 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); 
    