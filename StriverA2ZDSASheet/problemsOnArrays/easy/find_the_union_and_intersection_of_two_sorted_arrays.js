// Union: The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// Optimal Approach: Here we are using 2 pointer approach i and j
// TC: O(n1+n2)
// SC: O(n1+n2)

function findUnion(arr1, arr2) {
  let i = 0,
    j = 0;
  let union = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
      i++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
    j++;
  }
  return union;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const union = findUnion(arr1, arr2);

console.log('Union of arr1 and arr2 is:');
console.log(union.join(' '));

// Intersection: The elements that is present in both the arrays. I.e For every element there has to be the corresponding element in the another array

function findIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }

  return ans;
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr4 = [2, 3, 4, 4, 5, 11, 12];

const intersection = findIntersection(arr1, arr2);

console.log('Intersection of arr3 and arr4 is:');
console.log(intersection.join(' '));
