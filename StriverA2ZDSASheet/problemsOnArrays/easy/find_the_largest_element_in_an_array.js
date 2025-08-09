function sortArray(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log('The Largest element in the array is: ' + sortArray(arr1));
console.log('The Largest element in the array is: ' + sortArray(arr2));

function findLargestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [1120, 230, 121210];
console.log('The Largest element in the array is: ' + findLargestElement(arr));
