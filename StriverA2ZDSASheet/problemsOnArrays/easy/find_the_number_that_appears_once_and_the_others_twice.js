/**
Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

Examples

Example 1:
Input Format: arr[] = {2,2,1}
Result: 1
Explanation: In this array, only the element 1 appear once and so it is the answer.

Example 2:
Input Format: arr[] = {4,1,2,1,2}
Result: 4
Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.
 */

// Brute Force Approach: We will pick any element and we will do the linear search and find out how many times that element appears

function findSingleElementBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == num) {
        count++;
      }
    }
    if (count === 1) return num;
  }
}

let arr = [1, 1, 2, 3, 3, 4, 4];
console.log(findSingleElementBruteForce(arr));
