// 인프런 - 가운데 문자 출력

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요
// 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다

// function solution(s) {
//   let answer = "";
//   if (s.length % 2 === 0) {
//     answer += s[s.length / 2 - 1];
//     answer += s[s.length / 2];
//   }
//   if (s.length % 2 === 1) {
//     answer += s[Math.floor(s.length / 2)];
//   }
//   return answer;
// }

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

// console.log(solution("study"));
console.log(solution("good"));

// .substring() 객체의 시작 인덱스로 부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환
// .substr(start, length) 시작 인덱스와 갯수
