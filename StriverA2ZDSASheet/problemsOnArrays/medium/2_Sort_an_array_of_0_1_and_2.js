/**
 * Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
 * 
 * Examples
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]

Input: nums = [0]
Output: [0]
 * 
 */

// Here the brute force approach would be to use any of the sorting method.

/**
 * Intuition: Since in this case there are only 3 distinct values in the array so it's easy to maintain the count of all, Like the count of 0, 1, and 2. This can be followed by overwriting the array based on the frequency(count) of the values.
 *
 */
function sortBetter(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    if (arr[i] === 1) count1++;
    if (arr[i] === 2) count2++;
  }

  for (let i = 0; i < count0; i++) arr[i] = 0;
  for (let i = count0; i < count0 + count1; i++) arr[i] = 1;
  for (let i = count0 + count1; i < arr.length; i++) arr[i] = 2;

  return arr;
}

let arr = [2, 0, 2, 1, 1, 0];
console.log(sortBetter(arr));
