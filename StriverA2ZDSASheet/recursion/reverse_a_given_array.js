function reverseArrayUsingExtraArray(arr) {
  const revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  console.log(revArray);
}

let arr = [1, 2, 3, 4, 5];
reverseArrayUsingExtraArray(arr);
