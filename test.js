let nemo = ["nemo"];
function findNemo(testArray) {
  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}
findNemo(nemo);
