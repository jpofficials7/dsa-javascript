function jumpSearch(arr, x, n) {
  // Finding the block size to be jump
  let m = Math.sqrt(n);

  // Finding the block where element is present (if it is present)
  let i = 0;
  while (arr[Math.min(m, n) - 1] < x) {
    i = m;
    m += Math.sqrt(n);
    if (i >= n) return -1;
  }

  while (arr[i] < x) {
    i++;

    // If we reached next block or end of array, element is not present.
    if (i == Math.min(m, n)) return -1;
  }
  // If element is found
  if ((arr[i] = x)) return i;

  return -1;
}

// Driver Code
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 55;
let n = arr.length;

// Find the index of 'x' using Jump Search
let position = jumpSearch(arr, x, n);
console.log(position);
