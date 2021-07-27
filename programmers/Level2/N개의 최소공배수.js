// 프로그래머스 - N개의 최소공배수

// solution 1
function solution(arr) {
  arr.sort((a, b) => a - b);
  while (arr.length > 1) {
    let second = arr.pop();
    let first = arr.pop();
    arr.push(getLCM(first, second));
  }
  return arr[0];
}

function getLCM(first, second) {
  let answer = [];
  for (let i = 1; i <= first; i++) {
    if (first % i === 0 && second % i === 0) {
      answer[0] = i;
    }
  }
  answer[1] = (first * second) / answer[0];
  return answer[1];
}

// solution 2
function solution(arr) {
  arr.sort((a, b) => a - b);
  while (arr.length > 1) {
    let second = arr.pop();
    let first = arr.pop();
    arr.push(getLCM(first, second));
  }
  return arr[0];
}

function getLCM(first, second) {
  let GCD = 1;
  while (first !== 1) {
    for (let i = 2; i <= first; i++) {
      console.log(`i ${i}`, `first ${first}`, `second ${second}`);
      if (first % i === 0 && second % i === 0) {
        GCD *= i;
        console.log("-----------------", `GCD ${GCD}`, [first / i, second / i]);
        [first, second] = [first / i, second / i];
        break;
      }
      if (i === first) {
        console.log("-----------!!!", `return ${GCD * first * second}`);
        return GCD * first * second;
      }
    }
  }
  console.log("=============GCD============", GCD, first, second);
  return GCD * first * second;
}
