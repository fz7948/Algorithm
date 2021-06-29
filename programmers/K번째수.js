// 프로그래머스 - K번째수

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let num = array.slice(commands[i][0] - 1, commands[i][1]);
    let newNum = num.sort((a, b) => a - b);
    answer.push(newNum[commands[i][2] - 1]);
  }
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);
// 2차원 배열의 각 요소에 접근
// 2차원 배열의 한 요소에 0번 인덱스, 1번 인덱스로 array를 자른다
// 오름차순으로 정렬해준다
// 자른 배열에서 2번 인덱스를 answer에 push해준다
// 결과 return
