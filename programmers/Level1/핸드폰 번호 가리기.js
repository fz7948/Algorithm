// 프로그래머스 - 핸드폰 번호 가리기

// solution 1
function solution(phone_number) {
  var answer = "";
  console.log(phone_number.length);
  for (let i = 0; i < phone_number.length - 4; i++) {
    console.log(i);
    answer += "*";
  }
  for (let i = phone_number.length - 4; i < phone_number.length; i++) {
    console.log("!", i);
    answer += phone_number[i];
  }
  return answer;
}

// solution 2
// function solution(phone_number) {
//   var answer = "";
//   for(let i=0; i<phone_number.length; i++) {
//       if(i>=phone_number.length-4) {
//           answer += phone_number[i]
//       } else {
//           answer += '*'
//       }
//   }
//   return answer;
// }

// solution 3
// function hide_numbers(s){
//   var result = "*".repeat(s.length - 4) + s.slice(-4);

//   return result;
// }
