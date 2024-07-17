const arr1 = [2, 5, 5, 2, 7, 12, 4, 5, 4, 6];

// O(n`2)
function findDuplicate1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
}

// O(n)
function findDuplicate2(arr) {
  let hashTable = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = arr1[i];
    } else return arr[i];
  }
  return undefined;
}

let res = findDuplicate2(arr1);
console.log(res);
