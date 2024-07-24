// https://www.acmicpc.net/problem/10807
const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const arrayCount = Number(inputs[0]);
const numsArray = inputs[1].split(" ").map((e) => Number(e));
const targetNum = Number(inputs[2]);

const solution = () => {
  const rtnValue = numsArray.filter(num => num === targetNum).length;
  return rtnValue; 
}

console.log(solution());