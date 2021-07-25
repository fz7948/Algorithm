// 프로그래머스 - 정수 제곱근 판별

function solution(n) {
  var answer = -1;
  for (let i = 1; i <= parseInt(Math.sqrt(n)); i++) {
    if (i * i === n) {
      answer = (i + 1) * (i + 1);
    }
  }
  return answer;
}

// time over... (n의 제곱근 이상의 수까지 반복문을 돌릴 필요가 없었는데 다 돌려버렸다..)
// function solution(n) {
//   var answer = -1;
//   for (let i = 1; i <= n; i++) {
//     if (i * i === n) {
//       answer = (i + 1) * (i + 1);
//     }
//   }
//   return answer;
// }
