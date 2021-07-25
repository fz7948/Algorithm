// 프로그래머스 - 하샤드 수

function solution(x) {
  var answer = true;
  let num = x.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  if (x % sum !== 0) {
    answer = false;
  }
  return answer;
}
