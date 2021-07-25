// 프로그래머스 - 소수 찾기

function solution(n) {
  var answer = 0;
  let num = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (num[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      num[j] = 0;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (num[i] !== 0) answer++;
  }
  return answer;
}

// 여러 수에서 소수를 찾아내는 방법으로 '에라토스체네스의 체'라는 방법이 있다
// 그리스의 수학자 에라토스테네스가 고안한 방법인데,
// 2의 배수(2를 제외한), 3의 배수(3을 제외한), 5의 배수(5를 제외한)등의 순서로 수를 지워나가는 방법이다

// 아래는 100부터 200까지 수에서 소수를 걸러내는 방법이다

// function solution(n) {
//   var answer = 0;
//   let num = new Array(n + 1).fill(1);
//   for (let i = 2; i <= n; i++) {
//     if (num[i] === 0) continue;
//     for (let j = i * 2; j <= n; j += i) {
//       num[j] = 0;
//     }
//   }
//   for (let i = 100; i <= 200; i++) {
//     if (num[i] !== 0) {
//       console.log(i);
//       answer++;
//     }
//   }
//   return answer;
// }

// time over... (처음 작성한 코드)
// n의 숫자만큼의 이중 반복문이 실행되면서 시간을 많이 잡아먹는다
// function isPrime(num) {
//     if(num === 1) return false
//     for(let i = 2; i<=parseInt(Math.sqrt(num)); i++) {
//         if(num%i === 0) {
//             return false
//         }
//     }
//     return true
// }

// function solution(n) {
//     var answer = 0;
//     for(let i=2; i<=n;i++) {
//         if(isPrime(i) == 1) answer++
//     }
//     return answer;
// }
