function sumOfNaturalNumbers(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// console.log(sumOfNaturalNumbers(5));

function sumOfNaturalNumbersParameterized(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumOfNaturalNumbersParameterized(i - 1, sum + i);
}

// sumOfNaturalNumbersParameterized(5, 0);

function sumOfNaturalNumbersFunctional(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNaturalNumbersFunctional(n - 1);
}

console.log(sumOfNaturalNumbersFunctional(5));
