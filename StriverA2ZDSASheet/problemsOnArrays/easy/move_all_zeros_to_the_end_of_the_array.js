// Brute Force Approach

function moveAllZerosToEnd(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (temp.length > i) {
      arr[i] = temp[i];
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(moveAllZerosToEnd(arr));

// Optimal Solution
/** The Optimal Solution uses the two pointer approach where i and j , the j will always point to the zero and i will point to the non zero element and we will swap this i and j
 *
 * Steps:
 * 1. Finding the first 0 element
 * 2. Check the elements next to j if they are non zero
 */

function moveAllZero(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

console.log(moveAllZero(arr));
