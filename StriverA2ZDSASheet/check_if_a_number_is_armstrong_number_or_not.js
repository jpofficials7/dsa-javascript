/*
Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

Examples
                Example 1:
                Input:N = 153
               
                Output:True
                
                Explanation: 13+53+33 = 1 + 125 + 27 = 153
                                        
                Example 2:
                Input:N = 371                
                
                Output: True
                
                Explanation: 33+53+13 = 27 + 343 + 1 = 371
*/

function isArmStrong(num) {
  let k = String(num).length;

  let sum = 0;
  let n = num;

  while (n > 0) {
    let ld = n % 10;

    sum += Math.pow(ld, k);

    n = Math.floor(n / 10);
  }

  return sum === num ? true : false;
}

console.log(isArmStrong(153));
