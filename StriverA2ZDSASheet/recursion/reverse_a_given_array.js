// function reverseArrayUsingExtraArray(arr) {
//   const revArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArray.push(arr[i]);
//   }
//   console.log(revArray);
// }

// reverseArrayUsingExtraArray(arr);

// function reverseArray(arr) {
//   let p1 = 0;
//   let p2 = arr.length - 1;
//   while (p1 < p2) {
//     let temp = arr[p1];
//     arr[p1] = arr[p2];
//     arr[p2] = temp;
//     p1++;
//     p2--;
//   }
//   console.log(arr);
// }

// reverseArray(arr);

function reverseArrayRecursive(arr, start, end) {
  if (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArrayRecursive(arr, start + 1, end - 1);
  }
}

let arr = [1, 2, 3, 4, 5];

reverseArrayRecursive(arr, 0, 4);
console.log(arr);
