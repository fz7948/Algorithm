// 프로그래머스 - 자릿수 더하기

function solution(n) {
  var answer = 0;

  let nStr = n.toString();

  for (let i = 0; i < nStr.length; i++) {
    answer += Number(nStr[i]);
  }

  return answer;
}
