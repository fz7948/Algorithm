// 프로그래머스 - 행렬의 덧셈

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr1[1].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  return answer;
}

// function solution(arr1, arr2) {
//     var answer = [[]];
//     for(let i=0; i<arr1.length; i++) {
//         answer[i] = []
//         for(let j=0; j<arr1[1].length; j++) {
//             answer[i].push(arr1[i][j]+arr2[i][j])
//         }
//     }
//     return answer;
// }

// answer[i] = 1 을 넣고 7번 반복하면 [1,1,1,1,1,1,1]
// answer[i] = [] 을 넣고 7번 반복하면 [[],[],[],[],[],[],[]]
