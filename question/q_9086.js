// https://www.acmicpc.net/problem/9086
const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const cnt = inputs[0];

const solution = () => {
  
  for (let i = 1; i <= cnt; i++) {
    const textArr = inputs[i].replace('\r','').split("");
    const firstLetter = textArr[0];
    const lastLetter = textArr[textArr.length - 1];
    console.log(`${firstLetter}${lastLetter}`);
  }
}

solution();