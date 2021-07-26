// 프로그래머스 - H-index

function solution(num) {
  let answer = 0;
  let count = 0;
  for (let i = 1; i < num.length + 1; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j] >= i) {
        count++;
      }
    }
    if (i <= count) {
      answer = i;
    }
    count = 0;
  }
  return answer;
}

// 테스트 케이스 9번이 통과가 안되서 헤맸다
// 알고보니 [1]와 같이 1개만 들어왔을때 테스트 하는 코드였고
// i가 0부터 시작해서 1개만 들어왔을 경우 answer에 i(0)이 할당되니 통과가 안 되었던 것이다
// i의 시작값을 1로 바꿔주니 통과가 되었다
