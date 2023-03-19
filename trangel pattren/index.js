function printInvertedRightAngleTriangle(i) {
    let output = '';
    for (let row = i; row >= 1; row--) {
      for (let col = 1; col <= row; col++) {
        output += '*';
      }
      output += '\n';
    }
    console.log(output);
  }
  
  printInvertedRightAngleTriangle(6);
  