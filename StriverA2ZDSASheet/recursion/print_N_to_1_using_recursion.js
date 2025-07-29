function printNumber(i, n) {
  if (i < 1) return;
  console.log(i);
  printNumber(i - 1, n);
}

printNumber(10, 10);
