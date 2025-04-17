function sentinelLinearSearch(array, element) {
  // Last Element of the array
  let lastElement = array[array.length - 1];

  // Element to be searched is placed at the last index
  array[array.length - 1] = element;
  let i = 0;

  while (array[i] != element) i++;

  // put the last element back
  array[array.length - 1] = lastElement;

  if (i < array.length - 1 || lastElement == element) {
    console.log(element + ' is present at: ' + i);
  } else {
    console.log('Element not found.');
  }
}

let array = [10, 20, 180, 30, 60, 50, 110, 100, 70];
let element = 200;

sentinelLinearSearch(array, element);
