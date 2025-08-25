/**  Problem: Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. An input string is valid if: The brackets must close in the correct order. The opening brackets must be closed by the same type of bracket. An empty string is considered valid. Example: javascript isValid("()");
 */
// Output: true isValid("()[]{}");
// Output: true isValid("(]");
// Output: false

function isValid(str) {
  let stack = [];
  let map = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let char of str) {
    if (char == '{' || char == '(' || char == '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return str.length === 0;
}

const output = isValid('()[]{}');
console.log(output);
