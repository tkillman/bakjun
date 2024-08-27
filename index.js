const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");

const board = [];

const createBoard = ()=>{

  for (let i = 0; i < 100; i++) {
    const row = [];
    for (let j = 0; j < 100; j++) {
      row.push(0);
    }
    board.push(row);
  }

}

const paintBoard = (startXIndex, startYIndex) => {
  for (let i = startXIndex; i < (startXIndex + 10); i++) {
    const row = board[i];
    for (let j = startYIndex; j < (startYIndex + 10); j++) {
      row[j] = 1;
    }
  }
}

const solution = () => {
  createBoard();

  for (let i = 0; i < input.length; i++) {
    const [startX, startY] = input[i].split(" ").map(Number);
    paintBoard(startX, startY);
  }

  let count = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (board[i][j] === 1) {
        count++;
      }
    }
  }
  console.log(count);
}  

solution();