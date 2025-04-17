// Javascript code to linear search:

function search(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return -1;
}

let array = [1, 2, 4, 43, 54, 34, 6, 3, 7, 5, 7, 43];
const position = search(array, 43);

position === -1 ? console.log('Element not found') : console.log('Element found at: ', position);
