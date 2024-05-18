function metaBinarySearch(array, element) {
  let n = array.length;

  // Set number of bits to represent largest array index
  let lg = parseInt(Math.log(n - 1) / Math.log(2)) + 1;

  let pos = 0;
  for (let i = lg; i >= 0; i--) {
    if (array[pos] == element) return pos;

    // Incrementally construct the index of the target value
    let new_pos = pos | (1 << i);

    // find the element in one direction and update position
    if (new_pos < n && array[new_pos] <= element) pos = new_pos;
  }

  // if element found return pos otherwise -1
  return array[pos] == element ? pos : -1;
}

// Driver code
let array = [-2, 10, 100, 200];
console.log(metaBinarySearch(array, 10));
