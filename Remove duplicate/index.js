function removeDuplicates(cart) {
    const newCart = [];
    
    for (let i = 0; i < cart.length; i++) {
      if (!newCart.includes(cart[i])) {
        newCart.push(cart[i]);
      }
    }
    
    return newCart;
  }
  
  const cartWithDuplicates = ["Apple", "mango", "grapes", "watermelon", "orange","apple", "mango", "grapes", "watermelon", "orange", "apple", "mango", "grapes", "watermelon", "orange", "apple", "mango", "grapes", "watermelon", "orange"];
  const cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
  console.log(cartWithoutDuplicates);
  