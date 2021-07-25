// 프로그래머스 - 콜라츠 추측

// Failed Code
// function solution(num) {
//   var answer = 0;
//   let collatz = num;
//   while (num !== 1) {
//     if (answer > 500) {
//       return -1;
//     }
//     if (num % 2 === 0) {
//       num = num / 2;
//     }
//     if (num % 2 !== 0) {
//       num = num * 3 + 1;
//     }
//     answer++;
//   }
//   return answer;
// }

// 원인은 if절을 두 번 나눈것에 있다
// if와 else if를 쓰면 어떤 조건에 따라 한번만 결과가 나타나지만
// 위와 같이 if를 두 번 쓰게 되면 두번째 if절에서 나온 결과값이 그 다음 if절에 조건이 일치할 경우 들어가
// 원하지 않은 결과값을 도출하게 된다

// Success code
function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    }
    answer++;
  }
  return answer;
}
