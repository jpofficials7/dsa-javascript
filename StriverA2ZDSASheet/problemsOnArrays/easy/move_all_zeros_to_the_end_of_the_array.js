// Brute Force Approach

function moveAllZerosToEnd(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (temp.length > i) {
      arr[i] = temp[i];
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(moveAllZerosToEnd(arr));
