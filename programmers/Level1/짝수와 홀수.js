// 프로그래머스 - 짝수와 홀수

function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}
