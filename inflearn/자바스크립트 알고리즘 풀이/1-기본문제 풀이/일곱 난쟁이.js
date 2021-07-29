// 인프런 - 일곱 난쟁이

// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다
// 일곱 난쟁이의 키의 합이 100이 됨을 기억해냈다
// 아홉 난쟁이의 키가 주어졌을 때, 일곱 난쟁이를 찾는 프로그램을 작성하시오

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
