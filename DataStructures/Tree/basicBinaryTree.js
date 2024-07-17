class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let localRoot;
    let work = true;
    if (!this.root) {
      this.root = new Node(value);
    } else {
      localRoot = this.root;
      while (work) {
        if (value < localRoot.value) {
          if (localRoot.left !== null) {
            localRoot = localRoot.left;
          } else {
            localRoot.left = new Node(value);
            work = false;
          }
        } else {
          if (localRoot.right !== null) {
            localRoot = localRoot.right;
          } else {
            localRoot.right = new Node(value);
            work = false;
          }
        }
      }
    }
  }
  lookup(value) {
    let found = false;
    let localRoot;
    if (!this.root) return undefined;
    else {
      localRoot = this.root;
      while (!found) {
        if (value === localRoot.value) {
          found = true;
          return localRoot;
        } else if (value < localRoot.value) {
          if (localRoot.left !== null) {
            localRoot = localRoot.left;
          } else return undefined;
        } else if (value > localRoot.value) {
          if (localRoot.right !== null) {
            localRoot = localRoot.right;
          } else return undefined;
        }
      }
    }
  }
}

let tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(9));
