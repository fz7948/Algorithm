// 인프런 강의 - 홀수

// 7개의 자연수가 주어질때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요

function solution(arr) {
  let answer = [];
  let num = 0;
  let min = 100;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      num += arr[i];
      if (arr[i] < min) min = arr[i];
    }
  }
  answer.push(num);
  answer.push(min);
  return answer;
}

//   arr = [12, 77, 38, 41, 53, 92, 85];
//   console.log(solution(arr));
