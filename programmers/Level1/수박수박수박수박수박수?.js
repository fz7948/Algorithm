// 프로그래머스 -  수박수박수박수박수박수?

function solution(n) {
  var answer = "";
  let str = ["수", "박"];
  for (let i = 0; i < n; i++) {
    answer += str[i % 2];
  }
  return answer;
}
