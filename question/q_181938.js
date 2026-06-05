// https://school.programmers.co.kr/learn/courses/30/lessons/181938
function solution(a, b) {
  const answer = Math.max(Number(`${a}${b}`), 2 * a * b);
  return answer;
}

const a = 2;
const b = 91;
const result = solution(a, b);
console.log(result);
