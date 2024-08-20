const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");
let maxNum = 0;
let x = 0;
let y = 0;

const solution = () => {

  for (let i = 0; i < input.length; i++) {
    const row = input[i].split(" ").map(Number);

    for (let j = 0; j < row.length; j++) {
      const value = row[j];

      if (maxNum <= value) {
        maxNum = value;
        x = i + 1;
        y = j + 1;
      }
    }
  }

  console.log(maxNum);
  console.log(`${x} ${y}`);
}  

solution();
