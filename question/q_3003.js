// https://www.acmicpc.net/problem/3003


const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split(" ").map((v) => parseInt(v));

const borad = [1, 1, 2, 2, 2, 8];

const solution = () => {
  
  const diff = [];
  for (let i =0; i < 6; i++){
    diff.push(borad[i] - inputs[i]);
  }

  return diff;
}

console.log(solution().join(" "));