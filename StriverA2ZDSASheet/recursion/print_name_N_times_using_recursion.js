function printName(i, n) {
  if (i > n) return;
  console.log('Jayant');
  printName(i + 1, n);
}

printName(1, 5);
