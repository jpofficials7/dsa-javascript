function isPalindrome(i, str) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;

  return isPalindrome(i + 1, str);
}

console.log(isPalindrome(0, 'aba'));
