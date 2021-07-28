// 프로그래머스 - 구명보트

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  console.log(people);
  let head = 0;
  let tail = people.length - 1;
  while (people[head] > limit / 2) {
    if (people[head] + people[tail] <= limit) {
      head++;
      tail--;
    } else {
      head++;
    }
    answer++;
  }
  return answer + Math.ceil((tail - head + 1) / 2);
}
