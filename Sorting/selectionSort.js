let array = [8, 1, 9, 3, 7, 5, 8, 9, 3, 7, 51, 52, 6];

function selectionSort(arr) {
  let smallestIndex;

  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  return arr;
}

let res = selectionSort(array);
console.log(res);
