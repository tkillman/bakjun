// https://www.acmicpc.net/problem/2501

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const [N, K] = input.split(" ").map((r) => Number(r));
  let yaksus = [];

  for (let i = 1; i <= N; i++) {
    const isYakSu = N % i === 0;
    if (isYakSu) {
      yaksus.push(i);
    }

    const yaksusLength = yaksus.length;
    if (yaksusLength === K) {
      console.log(yaksus[yaksusLength - 1]);
      return;
    } else if (yaksusLength < K && i === N) {
      console.log(0);
    }
  }
};

solution();
