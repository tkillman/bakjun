// https://www.acmicpc.net/problem/2720

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const solution = () => {
  const answer = [];

  for (let i = 0; i < input[0]; i++) {
    let money = input[i + 1];

    const coins = [25, 10, 5, 1];
    const row = [];
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      const count = Math.floor(money / coin);
      row.push(count);
      money = money - count * coin;
    }
    answer.push(row.join(" "));
  }

  console.log(answer.join("\n"));
};

solution();
