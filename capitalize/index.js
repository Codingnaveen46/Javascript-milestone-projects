function capitalizeName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = (firstLetter === firstLetter.toLowerCase()) ? firstLetter.toUpperCase() : firstLetter;
    return capitalizedFirstLetter + name.slice(1);
  }
  
  console.log(capitalizeName("naveen")); // Output: "Naveen"
  console.log(capitalizeName("naveen")); // Output: "Naveen"
  