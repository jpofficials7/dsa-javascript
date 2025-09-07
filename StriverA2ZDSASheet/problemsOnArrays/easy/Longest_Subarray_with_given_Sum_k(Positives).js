/**
Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Examples

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

Note: Here Subarray means the contiguous part of the subarray 
*/

// Brute force Approach: We can generate all the subarrays and pick up subarray one by one and find their sum and whoever is the longest thats my answer. To generate a subarray we need to observe a pattern. Ex: arr[] = [1,2,3,1,1,1,1,4,2,3]. Here if we observe we can say [1] is an array, [1,2] is an array, [1,2,3] is an array, [1,2,3,1] is an array, [1,2,3,1,1] is an array, ... so from starting to the end each of this is a subarray. [2] is a subarray, [2,3] is a subarray, [2,3,1] is a subarray, [2,3,1,1] is a subarray.... from start to end. This will keep going on till the end of the array. So we have observed the pattern here, if we will keep a pointer i and a pointer j, the pointer j will always starts from pointer i then we can say that the subarray is from i to j then we can increment the j and we can keep doing the same. We can keep doing this for the entire array and by the way the entire array is also a subarray.

// Time Complexity: O(n3)

function longestSubArrayWithGivenSumK(arr, k) {
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let s = 0;
      for (let k = i; k <= j; k++) {
        s += arr[k];
      }
      if (s == k) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;
console.log(longestSubArrayWithGivenSumK(arr, k));
