// 프로그래머스 - 정수 내림차순으로 배치하기

function solution(n) {
  var answer = 0;
  answer = n.toString().split("");
  answer.sort((a, b) => {
    return b - a;
  });
  return +answer.join("");
}

// Number() 대신 + 연산자를 써주면 문자열이 숫자로 바뀐다
