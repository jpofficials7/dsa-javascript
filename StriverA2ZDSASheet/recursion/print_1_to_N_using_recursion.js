function printNumber(i, n) {
  if (i > n) return;
  console.log(i + '\n');
  printNumber(i + 1, n);
}

printNumber(1, 5);
