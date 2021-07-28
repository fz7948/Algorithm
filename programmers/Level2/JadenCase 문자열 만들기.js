// 프로그래머스 - JadenCase 문자열 만들기

// solution 1
function solution(s) {
  var answer = [];
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) str += arr[i][j].toUpperCase();
      else str += arr[i][j].toLowerCase();
    }
    answer.push(str);
  }
  return answer.join(" ");
}

// solution 2
function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}
