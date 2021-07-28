// 프로그래머스 - 비밀지도

function solution(n, arr1, arr2) {
  let answer = [];
  arr1 = arr1.map((el) => el.toString(2).padStart(n, "0").split(""));
  arr2 = arr2.map((el) => el.toString(2).padStart(n, "0").split(""));
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "0" && arr2[i][j] === "0") {
        res += " ";
      } else {
        res += "#";
      }
    }
    answer.push(res);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// padStart(length, string)
// 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다
// 채워넣기는 대상 문자열의 시작부터 적용됩니다

// 배열은 + 연산자가 안된다 -> let answer = []; answer[i] += " "; (이렇게 했다가 안되서 당황...)
