// 프로그래머스 - 이상한 문자 만들기

// solution 1
function solution(s) {
  let arr = s.split(" ").map((word) => {
    let answer = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2) {
        answer += word[i].toLowerCase();
      } else {
        answer += word[i].toUpperCase();
      }
    }
    return answer;
  });
  return arr.join(" ");
}

// solution 2
// function solution(s) {
//     var answer = [];
//     let word =''
//     let strArr = s.split(' ')
//     for(let i=0; i<strArr.length; i++) {
//         for(let j=0; j<strArr[i].length;j++) {
//             if(j%2===0) {
//                 word += strArr[i][j].toUpperCase()
//             } if(j%2 !== 0) {
//                 word += strArr[i][j].toLowerCase()
//             }
//         }
//         answer.push(word)
//         word = ''
//     }
//     return answer.join(' ')
// }
