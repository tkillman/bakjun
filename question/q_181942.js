// https://school.programmers.co.kr/learn/courses/30/lessons/181942?language=javascript

function solution(str1, str2) {
  var answer = '';
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');

  const maxLength = Math.max(str1Arr.length, str2Arr.length);
  for (let i = 0; i < maxLength; i++) {
    answer += (str1Arr[i] || '') + (str2Arr[i] || '');
  }
  return answer;
}

const str1 = 'aaaaaadf';
const str2 = 'bbbbbaa';

const result = solution(str1, str2);
console.log(result);
