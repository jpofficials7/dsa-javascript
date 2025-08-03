/*
 * Definition: It takes an element and places it in correct order.
 */

function insertionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);
