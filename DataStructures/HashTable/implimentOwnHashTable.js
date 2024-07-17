class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    for (let i = 0; i < this.data[hash].length; i++) {
      if (this.data[hash][i][0] === key) {
        this.data[hash][i][1] = value;
        return;
      }
    }

    this.data[hash].push([key, value]);
  }
  get(key) {
    let hash = this._hash(key);
    let currentBucket = this.data[hash];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10001);
myHashTable.set("grapes", 10001);

let myData = myHashTable.get("grapes");
console.log(myData);
let keys = myHashTable.keys();
console.log(keys);
