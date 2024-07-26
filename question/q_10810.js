// https://www.acmicpc.net/problem/10810
const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const [N, M] = inputs[0].split(" ").map((e) => parseInt(e));

const numArr = Array(N).fill(0);

const solution = () => {

  for (let c = 1; c <= M; c++) {
    const [i, j, k] = inputs[c].split(" ").map((e) => parseInt(e));
    
    for (let a = i - 1; a <= j - 1; a++) {
      numArr[a] = k;
    }

  }
  return numArr.join(" ");
}

console.log(solution());