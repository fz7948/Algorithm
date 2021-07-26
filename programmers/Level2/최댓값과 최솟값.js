// 프로그래머스 - 최댓값과 최솟값

function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  console.log(arr);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${min} ${max}`;
}
