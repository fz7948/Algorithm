// 인프런 - 점수계산

// OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해 다음과 같이 점수 계산
// 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
// 연속으로 문제의 답을 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ...
// 틀린 문제는 0점

// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오

function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
