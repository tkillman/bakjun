// https://www.acmicpc.net/problem/2903

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  // 1번 3
  // 2번 5
  // 3번 9
  // 4번 17
  // 5번 33

  let startNum = 3;

  for (let i = 0; i < input - 1; i++) {
    startNum = startNum * 2 - 1;
  }
  console.log(startNum * startNum);
};

solution();
