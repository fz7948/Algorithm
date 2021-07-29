// forEach, map, filter, reduce

//forEach

// function forEach(predicate, thisArg) {
//     for(let i=0; i<a.length; i++) {
//         predicate(a[i], i)
//     }
// }

a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
    // 콜백 함수 내부
  },
  [1, 2]
);

//map

// function map(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     list.push(predicate(a[i], i));
//   }
//   return list
// }

a = [10, 11, 12, 13, 14, 15];
let answer = a.map(
  function (v, i) {
    if (v % 2 === 0) return v;
  },
  [1, 2]
);
console.log(answer);

//filter

// function filter(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     if (predicate(a[i], i)) list.push(a[i]);
//   }
//   return list;
// }

a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(
  function (v, i) {
    return v % 2 === 0; //true만
  },
  [1, 2]
);
console.log(answer);

//reduce

// function reduce(predicate, val) {
//   let result = val;
//   for (let i = 0; i < a.length; i++) {
//     result = predicate(result, a[i]);
//   }
//   return result;
// }

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
console.log(answer);
