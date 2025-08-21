/**
 * Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
 *
 *
 *  Example 1:
 *  Input Format: N = 5, array[] = {1,2,4,5}
 *  Result: 3
 *  Explanation: In the given array, number 3 is missing. So, 3 is the answer.
 */

// Brute Force Approach

function findMissing(arr) {
  for (let i = 1; i <= arr.length; i++) {
    flag = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
}

let arr = [1, 2, 3, 5];
console.log(findMissing(arr));
