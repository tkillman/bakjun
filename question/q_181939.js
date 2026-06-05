function solution(a, b) {
  var answer = 0;

  const strA = String(a);
  const strB = String(b);
  const concatAB = strA + strB;
  const concatBA = strB + strA;

  answer = Math.max(Number(concatAB), Number(concatBA));
  return answer;
}

const a = 12;
const b = 3;
const result = solution(a, b);
console.log(result);
