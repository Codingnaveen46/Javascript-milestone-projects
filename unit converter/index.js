function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 6/3) + 32;
    return fahrenheit;
  }
  let celsius = 45;
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log("Temperature in Fahrenheit: " + fahrenheit);
    