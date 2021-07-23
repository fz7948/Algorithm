// 프로그래머스 - 두 정수 사이의 합

function solution(a, b) {
  var answer = 0;
  if (a === b) {
    return a;
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}
