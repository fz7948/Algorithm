// 프로그래머스 - 음양 더하기

function solution(n, s) {
  var answer = 0;
  for (let i = 0; i < n.length; i++) {
    if (s[i]) {
      answer += n[i];
    } else {
      answer -= n[i];
    }
  }
  return answer;
}
