let arr = [1, 2, 3, 4, 5, 6];

// 1. Function for array Traversal
function arrayTraversal(array) {
  for (const item of array) {
    console.log(item);
  }
}
// arrayTraversal();

// 2. Function to insert an element at a specific position in an array
function insertElement(array, pos, element) {
  let i = array.length - 1;
  for (i; i >= pos; i--) {
    array[i + 1] = array[i];
  }
  array[pos] = element;
  console.log(array);
}
// Insert 10 at the 1st position
// insertElement(arr, 1, 10);

// 3. Delete an element at any index in an array
function findElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  }
  return -1;
}

function deleteElement(array, element) {
  // find the position of the element to be deleted
  let pos = findElement(array, element);
  if (pos === -1) {
    console.log('Element not found');
    return array;
  }

  for (let i = pos; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return array;
}
// const array = deleteElement([1, 2, 3, 4, 5, 6, 7, 8], 4);
// console.log(array);

// Searching an element in Array
function findElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

const position = findElement(arr, 5);
console.log('position', position);
