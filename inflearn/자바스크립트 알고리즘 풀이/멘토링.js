// 인프런 - 멘토링

// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 돠었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가
// 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지인지 출력하는 프로그램을
// 작성하세요

function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      let pi = 0;
      let pj = 0;
      for (let k = 0; k < m; k++) {
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) {
          cnt++;
        }
      }
      if (cnt === 3) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
