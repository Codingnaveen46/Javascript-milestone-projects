function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
    switch(carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        return "Invalid car type";
    }
    return rentalCost * numDays;
  }
  console.log(calculateRentalCost(5, "Economy")); 
  console.log(calculateRentalCost(3, "Midsize")); 
  console.log(calculateRentalCost(7, "Luxury")); 
    