let array1 = [1, 9, 8, 22, 6, 4, 27];
let sumExpected = 9;

// O(a*b)
function hasSumOf1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

// O(n+m)
// store previously visited numbers in set
// compare compliment of current number and expected sum
// search compliment in a set
function hasSumOf2(arr, sum) {
  let mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(sum - arr[i])) return true;
    mySet.add(arr[i]);
  }
  return false;
}
console.log(hasSumOf2(array1, sumExpected));
