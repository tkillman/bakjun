// https://school.programmers.co.kr/learn/courses/30/lessons/181935
function solution(n) {
  var answer = 0;
  const isOdd = n % 2 === 1;

  Array.from({ length: n }, (_, i) => i + 1).forEach((num) => {
    if (isOdd) {
      if (num % 2 === 1) {
        answer += num;
      }
    } else {
      if (num % 2 === 0) {
        answer += num * num;
      }
    }
  });

  return answer;
}

const result = solution(10);
console.log(result);
