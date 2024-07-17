let arr1 = [1, 5, 6, 8, 9];
let arr2 = [1, 65, 7, 343];

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let pos1 = 0;
  let pos2 = 0;

  while (pos1 < arr1.length || pos2 < arr2.length) {
    if (arr1[pos1] < arr2[pos2]) {
      mergedArray.push(arr1[pos1]);
      pos1++;
    } else {
      mergedArray.push(arr2[pos2]);
      pos2++;
    }
  }
  return mergedArray;
}

let resp = mergeSortedArrays(arr1, arr2);
console.log(resp);
