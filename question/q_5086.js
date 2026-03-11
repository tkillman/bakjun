//https://www.acmicpc.net/problem/5086

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const fileText = fs.readFileSync(filePath).toString().trim();

const input = fileText.split('\n');

const solution = () => {
  for (let i = 0; i < input.length; i++) {
    const [N, M] = input[i].split(' ').map((r) => Number(r));
    let answer = 'neither';
    if (N === 0) {
      return;
    }

    if (N > M && N % M === 0) {
      answer = 'multiple';
    } else if (N < M && M % N === 0) {
      answer = 'factor';
    }

    console.log(answer);
  }
};

solution();
