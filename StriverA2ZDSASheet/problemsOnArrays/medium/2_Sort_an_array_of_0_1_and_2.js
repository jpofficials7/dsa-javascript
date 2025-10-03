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
 * Time Complexity: O(2N)
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

// let arr = [2, 0, 2, 1, 1, 0];
// console.log(sortBetter(arr));

/**
 * The Optimal Approach uses the Dutch National Flag algorithm, the algorithm revolves around three pointer low, mid and high. And the algorithm is revolving around 3 rules and the rules are very simple it states everything from 0 to low-1 will be 0 which is nothing but the extreme left and then it states everything from low to mid-1 will be 1 and then it states everything from high+1 to n-1 will be 2 and this is extreme right.
 */
function sortOptimal(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }
  return arr;
}

let arr = [2, 0, 2, 1, 1, 0];

let sortedArr = sortOptimal(arr);
console.log(sortedArr);
