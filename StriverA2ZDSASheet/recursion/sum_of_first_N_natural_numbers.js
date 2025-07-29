function sumOfNaturalNumbers(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// console.log(sumOfNaturalNumbers(5));

function sumOfNaturalNumbersRecursive(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumOfNaturalNumbersRecursive(i - 1, sum + i);
}

sumOfNaturalNumbersRecursive(5, 0);
