// Program to implement iterative Binary Search

// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    // If the element is present at the middle itself
    if (array[mid] == element) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (array[mid] > element) high = mid - 1;
    // Else the element can only be present
    // in right subarray
    else low = mid + 1;
  }
  // We reach here when element is not present in array
  return -1;
}

let array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let element = 5;
const position = binarySearch(array, element);
position == -1 ? console.log('Element is not present') : console.log(element + ' is present at: ', position);
