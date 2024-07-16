let array1 = ["a", "b", "c", "x", "a"];
let array2 = ["z", "y", "x"];
let array3 = ["z", "y", "i"];

// chars
// is empty
// is sorted
// return boolean

function hasCommons1(data1, data2) {
  // O(n*m)
  // Optimise: loop over smaller array first
  for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data2.length; j++) {
      if (data2[j] === data1[i]) return true;
    }
  }
  return false;
}

// O(a+b)
function hasCommons2(data1, data2) {
  if (!data1 || !data2) return false;
  let dataObj = {};
  // assing object elements to true
  data1.forEach((e, i) => {
    if (!dataObj[e[i]]) dataObj[e] = true;
  });

  // loop over second array
  for (let i = 0; i < data2.length; i++) {
    // if key exists in a second array return true
    if (dataObj[data2[i]]) return true;
  }
  return false;
}

let isHasCommons = hasCommons2(array1, null);

// JavaScript specific
function hasCommons3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

isHasCommons = hasCommons3(array1, array2);

console.log(isHasCommons);
