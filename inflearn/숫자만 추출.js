// 인프런 - 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      answer += str[i];
    }
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

// parseInt() 문자열을 정수로 바꿔줌
// isNaN 숫자면 false 숫자가 아니면 true
// 1 + null false 숫자
// 1 + undefined true 숫자 x
