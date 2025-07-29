// Count a digit in a number

// Brute Force Approach
function countDigit(n) {
  // Initialize a counter variable
  // 'cnt' to store the count of digits.
  let cnt = 0;

  // While loop iterates until 'n' becomes 0 (no more digits left).
  i = 0;
  while (n > 0) {
    console.log(++i);
    cnt = cnt + 1; // Increment the counter for each digit found.
    // Divide 'n' by 10 to remove the last digit.

    n = Math.floor(n / 10);
    console.log('n: ' + n);
  }

  return cnt; // Return the total count of digits.
}

let N = 12345;

let digits = countDigit(N);
console.log('Number of Digits in N: ' + digits);

// Optimal Approach
// Calculate the count of digits in 'n'
// using logarithmic operation log10(n) + 1.
function countDigits(n) {
  // Initialize a variable 'cnt' to
  // store the count of digits.
  let cnt = Math.floor(Math.log10(n) + 1);
  // The expression Math.floor(Math.log10(n) + 1)
  // calculates the number of digits in 'n'
  // and rounds it down to the nearest whole number.

  // Adding 1 to the result accounts
  // for the case when 'n' is a power of 10,
  // ensuring that the count is correct.

  // Return the count of digits in 'n'.
  return cnt;
}

// let N = 12345;
// console.log(Math.log10(123));
// let digits = countDigits(N);
// console.log('Number of Digits in N: ' + digits);
