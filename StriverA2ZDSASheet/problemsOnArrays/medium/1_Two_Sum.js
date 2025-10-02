// Two Sum : Check if a pair with given sum exists in Array

/**
Problem Statement: Given an array of integers arr[] and an integer target.

1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

Examples:

Example 1:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
Result: YES (for 1st variant)
       [1, 3] (for 2nd variant)
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

Example 2:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
Result: NO (for 1st variant)
	[-1, -1] (for 2nd variant)
Explanation: There exist no such two numbers whose sum is equal to the target.
*/

/**
 * Brute Force Approach: Here we are using two pointer approach and for every element we are checking with every other element.
 * Time Complexity: O(N^2) Since we are running two loops to check for every element with other every element.
 *
 *
 */
function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] + arr[j] === target) {
        return { index1: i, index2: j };
      }
    }
  }
  return { index1: -1, index2: -1 };
}

let arr = [2, 6, 5, 6, 11];
let target = 8;
const result = twoSumBruteForce(arr, target);
console.log(result);

/**
 * Brute Force Better Approach: Here we are making improvement on the brute force approach, here instead of checking each and every element with each and every element, we are going to check for the element next to current element since the elements before the current element are already checked in previous iteration.
 *
 * Time Complexity: This is slightly better than O(N^2) but it is still near by O(n^2)
 */
function twoSumBruteForceBetter(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return { index1: i, index2: j };
      }
    }
  }
  return { index1: -1, index2: -1 };
}

const output = twoSumBruteForceBetter(arr, target);
console.log(output);
