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

/**
 * In Brute force approach we are trying to iterate the array till n-1 to find the missing number
 * @param {*} arr
 * @returns
 */
function findMissing(arr) {
  for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j < n - 1; j++) {
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
let n = 5;
console.log(findMissing(arr, n));

/**
 * In Better approach we are trying to find the sum of n natural numbers "s1" and then we are finding the sum 's2" of elements present in the array if s1 and s2 does not match then their difference is the result i.e missing number.
 * @param {*} arr
 * @TimeComplexity => O(n)
 * @SpaceComplexity => O(1)
 */
function findMissingBetter(arr, n) {
  let s1 = (n * (n + 1)) / 2;
  let s2 = 0;
  for (let i = 0; i < n - 1; i++) {
    s2 += arr[i];
  }

  if (s1 != s2) {
    return s1 - s2;
  }
}

console.log(findMissingBetter(arr, n));

/**
 * We are XOR for this because XOR of 0 and any number gives the number as the output
 * @param {*} arr
 */
function findMissingOptimal(arr, n) {
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 1; i <= n; i++) {
    xor1 = xor1 ^ i;
  }
  for (let i = 0; i < n - 1; i++) {
    xor2 = xor2 ^ arr[i];
  }

  return xor1 ^ xor2;
}

console.log(findMissingOptimal(arr, n));
