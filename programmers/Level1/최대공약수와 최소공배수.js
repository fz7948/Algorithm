// 프로그래머스 - 최대공약수와 최소공배수

// solution 1
// function solution(n, m) {
//   let num = n < m ? m : n;
//   let max = 0;
//   let min = 0;
//   for (let i = 1; i <= num; i++) {
//     if (n % i === 0 && m % i === 0) {
//       max = i;
//     }
//   }
//   min = (n * m) / max;
//   return [max, min];
// }

// solution 1 - 개선 코드
function solution(n, m) {
  let answer = [];
  let min = Math.min(n, m);
  for (let i = 1; i <= min; i++) {
    if (n % i === 0 && m % i === 0) {
      answer[0] = i;
    }
  }
  answer[1] = (n * m) / answer[0];
  return answer;
}

// solution 2 (유클리드 호제법)
// function solution(n, m) {
//   let min = Math.max(n, m);
//   let max = Math.min(n, m);
//   while (max !== 0) {
//     let tmp = max;
//     max = min % max;
//     console.log(max);
//     min = tmp;
//   }
//   return [max, min];
// }

// 유클리드 호제법
// ex 1
// 16 % 24 = 16
// 24 % 16 = 8
// 16 % 8 = 0
// ex 2
// 12 % 15 = 12
// 15 % 12 = 3 -> 전에 나눠준 값(max->tmp) % 전에 나머지(min%max)
// 12 % 3 = 0

// 꼭 처음부터 나눠주는 값이 제일 큰 수일 필요는 없다
// 처음부터 24 % 16으로 로직을 짜면 계산 코드가 한 줄 더 줄어들 수 있다
