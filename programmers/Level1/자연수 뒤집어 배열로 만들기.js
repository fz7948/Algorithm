// 프로그래머스 - 자연수 뒤집어 배열로 만들기

// solution 1
function solution(n) {
  var answer = [];
  let arr = n.toString().split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }
  return answer;
}

// solution 2
// function solution(n) {
//     var answer = [];
//     while(n>0) {
//         answer.push(n%10)
//         n = Math.floor(n/10)
//     }
//     return answer
// }
