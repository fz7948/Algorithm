// 프로그래머스 - 숫자의 표현

// solution 1
function solution(n) {
  let num = 0;
  let cnt = 1;
  while (true) {
    if (num * (num + 1) > n * 2) break;
    num++;
  }
  for (let i = 2; i < num; i++) {
    checkAll(i);
  }
  function checkAll(maxSize) {
    for (let i = 1; i < n; i++) {
      let sum = 0;
      for (let j = i; j < maxSize + i; j++) {
        sum += j;
        if (sum === n) {
          cnt++;
          return;
        }
        if (sum > n) return;
      }
    }
  }
  return cnt;
}

// solution 2
function solution(n) {
  var answer = 0;
  for (let i = 1; i < n / 2; i++) {
    let tmp = 0;
    for (let j = i; j < n; j++) {
      tmp += j;
      if (tmp === n) {
        answer++;
        break;
      }
      if (tmp > n) break;
    }
  }
  return answer + 1;
}
