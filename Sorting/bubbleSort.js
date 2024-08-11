let arr = [8, 1, 9, 3, 7, 5, 8, 9, 3, 7, 51, 52, 6];

function bubbleSort(arr) {
  let sorted = arr;

  let actions = true;
  while (actions) {
    actions = false;

    for (let i = 1; i < arr.length; i++) {
      if (sorted[i - 1] > sorted[i]) {
        let temp = sorted[i - 1];
        sorted[i - 1] = sorted[i];
        sorted[i] = temp;
        actions = true;
      }
    }
  }
  return sorted;
}

let res = bubbleSort(arr);
console.log(res);
