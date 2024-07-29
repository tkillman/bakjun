https://www.acmicpc.net/problem/5597
const fs = require("fs");
const inputs = fs.readFileSync("input.txt").toString().split("\n");

const numArr = inputs.map((e) => parseInt(e));

const solution = () => {
  const students = Array(30).fill(0).map((e, i) => i + 1);
  
  const noSubmitStudents = students.filter((e) => !numArr.includes(e));
  return noSubmitStudents.join("\n");
}

console.log(solution());