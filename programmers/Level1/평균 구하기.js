// 프로그래머스 - 평균 구하기

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer = answer / arr.length;
  return answer;
}
