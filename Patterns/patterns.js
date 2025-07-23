function pattern1(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}

// pattern1(5);

function pattern2(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}

// pattern2(5);

function pattern3(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += '\n';
  }
  console.log(result);
}

// pattern3(5);

function pattern4(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += i;
    }
    result += '\n';
  }
  console.log(result);
}

// pattern4(6);

function pattern5(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}

// pattern5(5);

function pattern6(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n + 1 - i; j++) {
      result += j;
    }
    result += '\n';
  }
  console.log(result);
}

// pattern6(6);

function pattern7(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += ' ';
    }
    for (let k = 0; k <= i; k++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}

pattern7(5);
