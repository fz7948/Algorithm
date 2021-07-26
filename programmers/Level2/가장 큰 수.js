// 프로그래머스 - 가장 큰 수

// success code
function solution(num) {
  num.sort((a, b) => {
    return Number("" + b + a) - Number("" + a + b);
  });

  return num[0] === 0 ? "0" : num.join("");
}

// failed code
function solution(num) {
  let answer = "";
  num.sort((a, b) => a - b);
  num = num.map((el) => el.toString());
  len = num[num.length - 1].length;

  num = num.map((el) => {
    let str = el;
    while (str.length < len) {
      str += str.substr(str.length - 1);
    }
    return [el, str];
  });
  num.sort((a, b) => b[1] - a[1]);
  num.forEach((el) => {
    answer += el[0];
  });
  return answer;
}
