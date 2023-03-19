const marks = [87, 92, 68, 98, 84,101];

let highestMarks = 0;

for (let i = 0; i < marks.length; i++) {
  highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log(`The highest marks scored in the class is ${highestMarks}`);
