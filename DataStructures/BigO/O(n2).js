let arr = [1, 2, 3, 4, 5];

function logPairs(items) {
  let arrSize = items.length;
  for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < arrSize; j++) {
      console.log(items[i], items[j]);
    }
  }
}
logPairs(arr);
