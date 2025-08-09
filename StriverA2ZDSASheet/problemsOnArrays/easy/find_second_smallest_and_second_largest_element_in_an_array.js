/**
 * Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

Examples

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2
	Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1
	Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.
 * 
 */

//#region - Brute Force Approach
/**
 * Solution 1: (Brute Force) [this approach only works if there are no duplicates]
Intuition:
What do we do to find the largest or the smallest element present in an array? We ideally sort them and the first element would be the smallest of all while the last element would be the largest. Can we find the second-smallest and second-largest using a similar approach?

Approach:
Sort the array in ascending order
The element present at the second index is the second smallest element
The element present at the second index from the end is the second largest element
 */
function getElements(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + ' ' + -1);
    return;
  }

  arr.sort((a, b) => a - b);
  let small = arr[1];
  let large = arr[arr.length - 2];
  console.log('Second smallest is ' + small);
  console.log('Second largest is ' + large);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
getElements(arr);

//#endregion

//#region - Better Approach
/**
 * Intuition:
Even though we want to have just the second smallest and largest elements, we are still sorting the entire array for that and thus increasing the time complexity. Can we somehow try to not sort the array and still get our answer?

Approach:
Find the smallest and largest element in the array in a single traversal
After this, we once again traverse the array and find an element that is just greater than the smallest element we just found.
Similarly, we would find the largest element which is just smaller than the largest element we just found
Indeed, this is our second smallest and second largest element.
 */
function getElements(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + ' ' + -1);
    return;
  }
  let small = Infinity;
  let second_small = Infinity;
  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < second_small && arr[i] !== small) second_small = arr[i];
    if (arr[i] > second_large && arr[i] !== large) second_large = arr[i];
  }
  console.log('Second smallest is ' + second_small);
  console.log('Second largest is ' + second_large);
}

getElements(arr);

//#endregion

//#region - Optimal Approach
/**
 * In the previous solution, even though we were able to bring down the time complexity to O(N), we still needed to do two traversals to find our answer. Can we do this in a single traversal by using smart comparisons on the go?

Approach:
We would require four variables: small,second_small, large, and second_large. Variable small and second_small are initialized to INT_MAX while large and second_large are initialized to INT_MIN.

Second Smallest Algo:

If the current element is smaller than ‘small’, then we update second_small and small variables
Else if the current element is smaller than ‘second_small’ then we update the variable ‘second_small’
Once we traverse the entire array, we would find the second smallest element in the variable second_small.
Here’s a quick demonstration of the same.

Second Largest Algo:

If the current element is larger than ‘large’ then update second_large and large variables
Else if the current element is larger than ‘second_large’ then we update the variable second_large.
Once we traverse the entire array, we would find the second largest element in the variable second_large.
Here’s a quick demonstration of the same.
 * 
 */

function secondSmallest(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let small = Infinity;
  let second_small = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }
  return second_small;
}

function secondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }

  return second_large;
}

const sS = secondSmallest(arr);
const sL = secondLargest(arr);
console.log('Second smallest is ' + sS);
console.log('Second largest is ' + sL);

//#endregion
