// 인프런 - 대문자로 통일

// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을
// 출력하는 프로그램을 작성하세요

function solution(s) {
  let answer = "";
  for (let el of s) {
    // let num = el.charCodeAt()
    // if(num>=97 && num <= 122) {
    //   answer += String.fromCharCode(num-32)
    // } else {
    //   answer += el
    // }
    if (el === el.toLowerCase()) answer += el.toUpperCase();
    else answer += el;
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// 대문자 변환 .toUpperCase()
// 소문자 변환 .toLowerCase()
