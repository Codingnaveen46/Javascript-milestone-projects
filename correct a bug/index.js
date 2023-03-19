function fixCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  let cartQuantities = [1, 2, 3, 4];
  console.log("Original cart quantities:", cartQuantities);
  
  cartQuantities = fixCartQuantities(cartQuantities);
  console.log("Fixed cart quantities:", cartQuantities);
    