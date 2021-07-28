// 프로그래머스 - 숫자 문자열과 영단어

function solution(s) {
  var answer = 0;
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  console.log(s);
  return answer;
}

console.log(solution("one4seveneight"));

// replace
// 자바스크립트에서 replaceAll은 없다
// 정규식을 이용하여 대상 스트링에서 모든 부분을 수정해 줄 수 있다

// #를 공백으로 변경한다
// str.replase("#","")
// 하지만 첫번째 #만 공백으로 변경하고 나머지는 변경이 되지 않는다

// #를 감싼 따옴표를 슬래시로 대체하고 뒤에 gi를 붙이면 replaceAll과 같은 결과를 볼 수 있다
// str.replase(/#/gi, "")
// [정규식의 gi 설명]
// g : 발생할 모든 pattern에 대한 전역 검색
// i : 대/소문자 구분 안함
// m : 여러 줄 검색
