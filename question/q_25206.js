// https://www.acmicpc.net/problem/25206

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const toScoreByGrade = (grade) => {
  switch(grade){
    case "A+":
      return 4.5;
    case "A0":
      return 4;
    case "B+":
      return 3.5;
    case "B0":
      return 3;
    case "C+":
      return 2.5;
    case "C0":
      return 2;
    case "D+":
      return 1.5;
    case "D0":
      return 1;
    case "F":
      return 0;
    default:
      return 0.0;
  }
}

const solution = () => {
  let totalRowScore = 0;
  let totalScore = 0;
 
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split(" ");

    //const subject = row[0];
    const score = Number(row[1]);
    const grade = String(row[2]).trim();

    if (grade === "P") {
      continue;
    }

    const rowScore = score * toScoreByGrade(grade);
    totalRowScore += rowScore;
    totalScore += score;
  }

  console.log(totalRowScore / totalScore);  
}

solution();