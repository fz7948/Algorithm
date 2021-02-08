## 문제

There are given N ropes of different lengths, we need to connect these ropes into one rope. 
The cost to connect two ropes is equal to sum of their lengths. The task is to connect the ropes with minimum cost.


### Example 1

```
Input:
n = 4
arr[] = {4, 3, 2, 6}
Output: 
29
Explanation:
For example if we are given 4
ropes of lengths 4, 3, 2 and 6. We can
connect the ropes in following ways.
1) First connect ropes of lengths 2 and 3.
Now we have three ropes of lengths 4, 6
and 5.
2) Now connect ropes of lengths 4 and 5.
Now we have two ropes of lengths 6 and 9.
3) Finally connect the two ropes and all
ropes have connected.
Total cost for connecting all ropes is 5 + 9 + 15 = 29. This is the optimized cost
for connecting ropes. Other ways of
connecting ropes would always have same
or more cost. For example, if we connect
4 and 6 first (we get three strings of 3,
2 and 10), then connect 10 and 3 (we get
two strings of 13 and 2). Finally we
connect 13 and 2. Total cost in this way
is 10 + 13 + 15 = 38.
```

### Example 2

```
Input:
n = 5
arr[] = {4, 2, 7, 6, 9}
Output: 
62 
Explanation:
First, connect ropes 4 and 2, which makes the 
array {6,7,6,9}. Next, add ropes 6 and 6, which 
results in {12,7,9}. Then, add 7 and 9, which 
makes the array {12,16}. And finally add these 
two which gives {28}. Hence, the total cost is 
6 + 12 + 16 + 28 = 62.
```

### Constraints:

1 ≤ N ≤ 100000

1 ≤ arr[i] ≤ 106

### Codes

```js
let array = [4, 3, 2, 6, 5];

let result = solve(array);

function solve(array) {

    let result, newArray, newNum;
    
    result = 0;
    
    let arrayLen = array.length;
    
    newArray = array.sort(function(a,b){return a-b;});  // 처음 배열 array 아래차순으로 배열

    for(let i=0; i<arrayLen-1; i++) {

       newArray = newArray.sort(function(a,b){return a-b;}); // newArray 배열 아래차순으로 배

        for(let j=0;j<=0;j++){
        
           newNum = newArray[0] + newArray[1] // 1,2번째 인덱스 값을 newNum에 할당
           
           newArray.splice(0,2);  // newArray 배열의 0,1번째 인덱스 추출
           
           result += newNum;  // newNum 값을 result에 할당
           
            newArray.unshift(newNum);  // newNum 값을 newArray 배열 0번째 인덱스에 추가
            
        }
    
    }
    
    console.log(result);
    
    return result;
    
}
```

### 문제 url

https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1
