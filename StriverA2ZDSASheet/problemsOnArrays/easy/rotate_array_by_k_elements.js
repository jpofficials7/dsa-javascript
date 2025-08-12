function rotateToRight(arr, n, k) {
  if (n === 0) return;
  k = k % n;
  if (k > n) return;

  let temp = [];
  for (let i = n - k; i < n; i++) {
    temp[i - n + k] = arr[i];
  }
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 7;
let k = 2;
rotateToRight(arr, n, k);
console.log('After Rotating the elements to right ');
for (let i = 0; i < n; i++) {
  console.log(arr[i] + ' ');
}
