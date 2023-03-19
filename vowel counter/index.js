function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("Naveen")); // Output: 3
  console.log(countVowels("Bharath")); // Output: 2
  