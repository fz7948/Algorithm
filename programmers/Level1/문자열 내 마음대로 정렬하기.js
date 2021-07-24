// 프로그래머스 - 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  strings.sort();
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      if (strings[i][n] > strings[j][n]) {
        [strings[i], strings[j]] = [strings[j], strings[i]];
      }
    }
  }
  return strings;
}

// sort 활용

// function solution(strings, n) {
//     strings.sort((a, b) => {
//     if (a[n] < b[n]) return -1;
//     else if (a[n] === b[n]) {
//       if(a < b) return -1
//     }
//   });

//   return strings;
// }

// sort 간단 개념 정리

// sort((a,b)=> b-a) 라는 소스코드와 [1,2,3]이라는 배열이 있을 때
// 첫 루프로 a에 2가 들어오고 b에 1이 들어온다
// 즉, 알파벳 순서와는 반대로 들어온다
// 이게 헷갈린다면 sort((next,prev) => prev - next)와 같은 형식으로 이해해도 괜찮다

// 매개변수로 a, b를 받았고 반환 값이 0보다 큰 경우에 만일 [a, b]의 값이 들어왔다면
// 그대로 [a, b]가 된다. a가 먼저 온다

// 매개변수로 a, b를 받았고 반환 값이 0인 경우에 만일 [a, b]의 값이 들어왔다면,
// 그대로 [a, b]가 된다. a, b의 위치를 그대로 둔다

// 매개변수로 a, b를 받았고 반환 값이 0보다 작은 경우에 [a, b]의 값이 들어왔다면,
// b가 먼저 오게 된다. [b, a]가 된다
