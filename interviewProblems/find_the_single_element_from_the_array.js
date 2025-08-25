/**
 * Problem: Given a non-empty array of integers, every element appears twice except for one. Find that single one. Example: javascript singleNumber([2, 2, 1]); // Output: 1
 */

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR each number
  }
  return result;
}

// Examples
console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
// console.log(singleNumber([1]));
