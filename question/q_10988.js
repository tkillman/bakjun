// https://www.acmicpc.net/problem/10988
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const solution = () => {
  const words = input.split('');

  const cnt = Math.floor(words.length / 2);

  for (let i = 0; i < cnt; i++) {
    if (words[i] !== words[words.length - 1 - i]) {
      return 0;
    }
  }
  return 1;
}

console.log(solution());