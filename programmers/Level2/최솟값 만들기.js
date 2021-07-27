// 두 수를 곱해 최솟값이 나오려면 A의 가장 작은 수와 B의 가장 큰 수를 차례대로 곱해서 더해주면 된다

function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
