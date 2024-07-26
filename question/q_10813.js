// https://www.acmicpc.net/problem/10813

const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const [N, M] = inputs[0].split(" ").map((e) => parseInt(e));

const numArr = Array(N).fill(0).map((e,index) => parseInt(e) + index + 1);

const solution = () => {
  
  for (let i = 1; i <= M; i++) {
    const [basketIdx1, basketIdx2] = inputs[i].split(" ").map((e) => parseInt(e));
    
    const num1 = numArr[basketIdx1 - 1];
    const num2 = numArr[basketIdx2 - 1];
    
    numArr[basketIdx1 - 1] = num2;
    numArr[basketIdx2 - 1] = num1;
  }

  return numArr.join(" ");
}

console.log(solution());