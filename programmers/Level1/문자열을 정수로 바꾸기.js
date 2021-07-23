// 프로그래머스 - 문자열을 정수로 바꾸기

function solution(s) {
  var answer = 0;
  if (s[0] === "-") {
    answer = Number(s);
    console.log("+", s);
    answer = Number(s);
  } else {
    answer = Number(s);
  }

  return answer;
}
