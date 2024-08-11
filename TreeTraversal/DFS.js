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
  DFSInOrder(node, list) {
    if (node.left) this.DFSInOrder(node.left, list);
    list.push(node.value);
    if (node.right) this.DFSInOrder(node.right, list);
    return list;
  }
  DFSPreOrder(node, list) {
    list.push(node.value);
    if (node.left) this.DFSPreOrder(node.left, list);
    if (node.right) this.DFSPreOrder(node.right, list);
    return list;
  }
  DFSPostOrder(node, list) {
    if (node.left) this.DFSPostOrder(node.left, list);
    if (node.right) this.DFSPostOrder(node.right, list);
    list.push(node.value);
    return list;
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
//console.log(tree.lookup(9));
console.log(tree.DFSPostOrder(tree.root, []));

//           __[9]__
//         /        \
//       [4]        [20]
//      /   \       /   \
//    [1]   [6]   [15]  [170]
