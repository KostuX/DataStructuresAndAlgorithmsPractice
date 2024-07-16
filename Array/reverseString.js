let myString = "String to reverse";

// creating new string object
function reverse(str) {
  let rv = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rv += str[i];
  }
  return rv;
}

// pushing to an array might be a bit more efficient
function reverse2(str) {
  let rv = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rv.push(str[i]);
  }
  return rv.join("");
}

// javascript
myString.split("").reverse().join("");
// or
let reverse3 = (str) => [...str].reverse().join("");

let revString = reverse2(myString);

console.log(revString);
