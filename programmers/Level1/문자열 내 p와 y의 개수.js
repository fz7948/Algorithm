// 프로그래머스 - 문자열 내 p와 y의 개수

function solution(s) {
  var answer = true;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P" || s[i] === "p") {
      count1++;
    }
    if (s[i] === "Y" || s[i] === "y") {
      count2++;
    }
  }
  if (count1 !== count2) {
    answer = false;
  }

  return answer;
}
