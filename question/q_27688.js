// https://www.acmicpc.net/problem/27866
const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const txt = inputs[0];
const idx =  parseInt(inputs[1]);

const solution = () => {
  txt.split("").forEach((t, i) => {
    if (i === idx - 1) {
      console.log(t);
    }
  });
}

solution();