/*
Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

*/

function fibonacciNaive(n) {
  if (n == 0) console.log(0);
  else {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
  }
}

// fibonacciNaive(5);

function fibonacciSpaceoptimized(n) {
  if (n === 0) console.log(0);
  else {
    let secondLast = 0;
    let last = 1;
    console.log(secondLast);
    console.log(last);
    let curr = 0;
    for (let i = 2; i <= n; i++) {
      curr = secondLast + last;
      secondLast = last;
      last = curr;
      console.log(curr);
    }
  }
}

// fibonacciSpaceoptimized(5);

function fibonacciRecursion(n) {
  if (n <= 1) return n;

  let last = fibonacciRecursion(n - 1);
  let sLast = fibonacciRecursion(n - 2);

  return last + sLast;
}

console.log(fibonacciRecursion(5));
