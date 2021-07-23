// 프로그래머스 - 2016년

function solution(a, b) {
  var answer = "";
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }

  let count = sum + b - 1;
  answer = day[count % 7];
  return answer;
}
