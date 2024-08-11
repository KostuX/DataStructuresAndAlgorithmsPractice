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
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [currentNode];

    while (queue.length !== 0) {
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
      list.push(currentNode.value);
      queue.shift();
      currentNode = queue[0];
    }
    return list;
  }
  breadthFirstSearchRecursive(queue, list) {
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (queue.length !== 0) return list;
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);

    return this.breadthFirstSearch(queue, list);
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
console.log(tree.breadthFirstSearchRecursive([tree.root], []));

//           __[9]__
//         /        \
//       [4]        [20]
//      /   \       /   \
//    [1]   [6]   [15]  [170]
