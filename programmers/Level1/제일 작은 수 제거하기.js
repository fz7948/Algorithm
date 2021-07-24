// 프로그래머스 - 제일 작은 수 제거하기

// solution 1
function solution(arr) {
  var answer = [];
  let leng = arr.length;
  let min = Math.min(...arr);
  let minNum = arr.filter((el) => {
    return el !== min;
  });
  if (minNum.length === 0) {
    answer = [-1];
  } else {
    answer = minNum;
  }
  return answer;
}

// solution 2
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }
