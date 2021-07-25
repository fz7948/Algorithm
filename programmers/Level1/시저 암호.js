// 프로그래머스 - 시저 암호

// solution 1
function solution(s, n) {
  var answer = "";
  let arr = s.split("");
  let arrUp = [];
  let arrDown = [];

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    arrDown.push(String.fromCharCode(i));
  }
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arrUp.push(String.fromCharCode(i));
  }
  arr.forEach((el) => {
    if (arrDown.includes(el)) {
      let index = arrDown.indexOf(el);
      answer += arrDown[(index + n) % 26];
    }
    if (arrUp.includes(el)) {
      let index = arrUp.indexOf(el);
      answer += arrUp[(index + n) % 26];
    }
    if (el === " ") {
      answer += " ";
    }
  });

  return answer;
}

// 문자열을 아스키 코드로 변환
// "문자열".charCodeAt([문자열 자릿수])
// 아스키코드를 문자열로 변환
// String.fromCharCode([아스키코드값])

// .includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드입니다

// solution 2
// function solution(s, n) {
//     var answer = '';
//     let arrUp = []
//     let arrDown = []
//     for(let i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++ ) {
//         arrDown.push(String.fromCharCode(i));
//     }
//     for(let i='A'.charCodeAt(0);i<='Z'.charCodeAt(0); i++) {
//         arrUp.push(String.fromCharCode(i))
//     }
//     for(let i=0; i<s.length;i++) {
//         if(arrUp.includes(s[i])) {
//             let index = arrUp.indexOf(s[i])
//             answer += arrUp[(index + n) % 26]
//         }
//         if(arrDown.includes(s[i])) {
//             let index = arrDown.indexOf(s[i])
//             answer += arrDown[(index + n) % 26]
//         }
//         if(s[i] === ' ') {
//             answer += ' '
//         }
//     }
//     return answer;
// }
