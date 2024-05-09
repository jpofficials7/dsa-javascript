// Create a recursive function and compare the mid of the search space with the key. And based on the result either return the index where the key is found or call the recursive function for the next search space.

// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[low..high] is present,
// otherwise -1

function recursiveBinarySearch(array, low, high, element) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    // If the element is present at the middle itself
    if (array[mid] == element) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (array[mid] > element) return recursiveBinarySearch(array, low, mid - 1, element);
    // Else the element can only be present
    // in right subarray
    return recursiveBinarySearch(arr, mid + 1, high, x);
  }
  // We reach here when element is not
  // present in array
  return -1;
}

let array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let low = 0;
let high = array.length - 1;
let element = 5;
const position = recursiveBinarySearch(array, low, high, element);
position == -1 ? console.log('Element is not present') : console.log(element + ' is present at: ', position);
