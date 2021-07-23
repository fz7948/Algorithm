// 프로그래머스 - 가운데 글자 가져오기

function solution(s) {
  var answer = "";
  console.log(s.length);
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}
