function solution(n) {
  var answer = 0;
  let bin = n.toString(2).split("");
  let one = bin.filter((el) => el === "1").length;

  while (true) {
    n++;
    if (
      one ===
      n
        .toString(2)
        .split("")
        .filter((el) => el === "1").length
    ) {
      return n;
    }
  }
}

//? 진수 변환
// 10진수를 진수 변환할때는 Number객체의 내장 함수인 toString()을 사용 -> 숫자만
// 10진수 외의 다른 진수를 10진수로 변환할때는 전역 함수인 parseInt()을 사용한다 -> 숫자열, 문자열 둘 다 가능

// 1. 10진수 -> 2진수
// let 십진수_숫자 = 125;
// console.log(십진수_숫자.toString(2)); -> 문자열 반환

// 2. 2진수 -> 8진수
// let 이진수_숫자_문자 = "1111101";
// console.log(parseInt(이진수_숫자_문자, 2)); -> 숫자열 반환

// 3. 8진수 -> 2진수
// let 팔진수_숫자_문자 = "175";
// console.log(parseInt(팔진수_숫자_문자, 8).toString(2));
