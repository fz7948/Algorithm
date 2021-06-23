// 인프런 강의 - 최솟값 구하기

// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요

function solution(arr) {
  let answer = 0;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

// 내장함수로 최솟값, 최댓값 구하기

// function solution(arr) {
//     방법 1
//     let answer = Math.min(...arr)
//     방법 2
//     let answer = Math.min.apply(null, arr)
//     return answer;
//   }

// let arr=[5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));
