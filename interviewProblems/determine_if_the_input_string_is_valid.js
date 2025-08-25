/**  Problem: Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. An input string is valid if: The brackets must close in the correct order. The opening brackets must be closed by the same type of bracket. An empty string is considered valid. Example: javascript isValid("()");
 */
// Output: true isValid("()[]{}");
// Output: true isValid("(]");
// Output: false

/**
 * You can solve this problem using a stack in JavaScript.
The idea is:

Push opening brackets ((, {, [) onto the stack.

When a closing bracket (), }, ]) appears, check the top of the stack:

If it matches the corresponding opening bracket, pop it.

If it doesn’t match (or the stack is empty), return false.

At the end, if the stack is empty, the string is valid.
 */

function isValid(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const output = isValid('()[]{}');
console.log(output);
