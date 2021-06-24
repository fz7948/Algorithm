// 인프런 - 대문자 찾기

// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지
// 알아내는 프로그램을 작성하세요

function solution(s) {
  let answer = 0;
  for (let el of s) {
    // let num = x.charCodeAt()
    // if(num>=65 && num <= 90)
    if (el === el.toUpperCase()) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 대문자 ASCII : 65~90 (26개)
// 소문자 ASCII : 97~122 (26개)
