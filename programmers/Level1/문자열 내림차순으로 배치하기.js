// 프로그래머스 - 문자열 내림차순으로 배치하기

function solution(s) {
  let sArr = s.split("");

  sArr.sort((a, b) => {
    if (b < a) return -1;
  });
  return sArr.join("");
}
