const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const txt = inputs[0];

const solution = () => {
  console.log(txt.length)
}

solution();