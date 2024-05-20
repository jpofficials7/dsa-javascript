// JavaScript program to illustrate
// recursive approach to ternary search

// Function to perform Ternary Search

function ternarySearch(l, r, key, ar) {
  if (r >= l) {
    // Find the mid1 and mid2
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);

    // Check if key is present at any mid
    if (ar[mid1] == key) return mid1;
    if (arr[mid2] == key) return mid2;

    // Since key is not present at mid, check in which region it is present then repeat the Search operation in that region

    if (key < arr[mid1]) {
      // The key lies in between l and mid1
      return ternarySearch(l, mid1 - 1, key, arr);
    } else if (key > arr[mid2]) {
      // The key lies in between mid2 and r
      return ternarySearch(mid2 + 1, r, key, arr);
    } else {
      // The key lies in between mid1 and mid2
      return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
    }
  }
  // key not found
  return -1;
}

// Driver code
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let key = 5;
console.log(ternarySearch(0, arr.length - 1, key, arr));
