/*
 * Definition: It pushes the maximum element at the last by adjacent swapping
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) break;
  }
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
