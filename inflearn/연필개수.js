// 인프런 강의 - 연필개수

// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한
// 연필의 다스 수를 계산하는 프로그램을 작성하세요

function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

// function solution(n) {
//   let answer;
//   let num = n / 12;
//   if (n % 12 !== 0) {
//     answer = num + 1;
//   }
//   return Math.floor(answer);
// }

// console.log(solution(178));

// 소수점 두자리까지 .toFixed(2)
// Math.ceil() : 소수점 올림, 정수 반환
// Math.floor() : 소수점 버림, 정수 반환
// Math.round() : 소수점 반올림, 정수 반환
