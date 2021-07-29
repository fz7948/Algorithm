// 인프런 - 두 배열 합치기

// solution 1
function solution1(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    answer.push(arr2[i]);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// solution 2
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution1(a, b));
