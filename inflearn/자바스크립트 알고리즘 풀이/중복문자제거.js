// 인프런 - 중복문자제거

// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다

function solution(s) {
  let answer = "";
  // console.log(s.indexOf("k"));
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));

// indexOf() 인자로 전달된 문자열을 대상으로 한 문자열에서 검색하여 처음 발견된 곳의 index를 반환
// includes() 인자로 전달된 문자열을 대상으로 한 문자열에서 검색해서 참과 거짓을 반환
