/**
Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

Examples:

Example 1:

Input: prices = {1, 1, 0, 1, 1, 1}

Output: 3

Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Input: prices = {1, 0, 1, 1, 0, 1} 

Output: 2

Explanation: There are two consecutive 1's in the array. 
 */

function findMaximumConsecutive(arr) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }

  return max;
}

let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
console.log(findMaximumConsecutive(arr));
