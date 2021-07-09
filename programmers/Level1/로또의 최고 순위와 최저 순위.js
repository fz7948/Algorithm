// 프로그래머스 - 로또의 최고 순위와 최저 순위

// 0의 개수를 파악
// 0을 제외하고 몇개가 일치하는지 파악
// 일치하는것에서 0의 개수를 + - 최고 순위 최저 카운터를 계산
// 순위 배열 -> 0을 더하고 뺀 숫자에 따라 순위를 return

function solution(lottos, win_nums) {
  let count = 0;

  let num = lottos.filter((el) => el === 0);

  lottos.forEach((el) => {
    let index = win_nums.indexOf(el);
    if (index !== -1) {
      win_nums.splice(index, 1);
      count++;
    }
  });

  let result = [6, 6, 5, 4, 3, 2, 1];

  return [result[count + num.length], result[count]];
}
