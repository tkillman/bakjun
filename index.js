const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const sizeXY = inputs[0];

const y = parseInt(sizeXY.split(" ")[0]);
const x = parseInt(sizeXY.split(" ")[1]);

const arrayA = number[y][x];
const arrayB = number[y][x];

const solution = () => {
  
  for (let i = 1; i <= y; i++) {
    const row = inputs[i].split(" "); // 1, 1, 1
    for (let j = 0; j <= x; j++) {
      arrayA[i - 1][j] = 
    }
  }
}

console.log(solution());