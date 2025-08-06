/*
 * Definition: Divide and Merge
 */

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid); // left half
  mergeSort(arr, mid + 1, high); // right half
  merge(arr, low, mid, high); // merging sorted halves
}

function merge(arr, low, mid, high) {
  let temp = []; // temporary array
  let left = low; // starting index of left half of arr
  let right = mid + 1; // starting index of right half of arr

  // storing elements in the temporary array in a sorted manner
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[high]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // if elements on the left half are still left
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // transfering all elements from temporary to arr
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

let arr = [10, 9, 8, 7, 6, 5];
mergeSort(arr, 0, 5);
console.log(arr);
