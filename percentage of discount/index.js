const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage * 200) / 200; 
  }
  const originalPrice = 10000;
  const discountedPrice = 8000;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`Discount percentage: ${discountPercentage}%`);
    