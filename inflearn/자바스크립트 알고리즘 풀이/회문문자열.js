// 인프런 - 회문문자열

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES"
// 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요

// 단, 회문문자열을 검사할 때 대소문자를 구별하지 않습니다

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) answer = "NO";
  }
  return answer;
}

//   function solution(s) {
//     let answer = "YES";
//     s = s.toLowerCase();
//     if (s.split("").reverse().join("") !== s) answer = "NO";
//     return answer;
//   }

let str = "gooo2";
console.log(solution(str));
