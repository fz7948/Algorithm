// 프로그래머스 - 폰켓몬

function solution(nums) {
  nums.sort((a, b) => a - b);
  const uniq = new Set(nums);
  return Math.min(uniq.size, nums.length / 2);
}
