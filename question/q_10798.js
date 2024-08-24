// https://www.acmicpc.net/problem/10798

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");

const strArr = [];
let answer = [];

const solution = () => {

  for (let i = 0; i < input.length; i++) {
    const row = input[i].split("");
    strArr.push(row);
  }

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
      const str = strArr[j][i]?.trim();
      if (str !== undefined) {
        //console.log("i",i ,"j",j, "str",str);
        answer.push(String(str));
      }
    }
  }
  console.log(answer.join(""));
}  

solution();