// 프로그래머스 - 문자열 다루기 기본

function solution(s) {
  var answer = true;
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let count = 0;

  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (Number(s[i]) === num[j]) {
        count++;
      }
    }
    if (count === 0) {
      answer = false;
    }
    count = 0;
  }
  return answer;
}
