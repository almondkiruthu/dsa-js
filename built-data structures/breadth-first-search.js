class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.level = 0;
    this.root = null;
  }
  bfs(rootNode) {
    if (!rootNode) return undefined;

    const result = [];
    let queue = [];
    let currNode = rootNode;
    queue.push(currNode);
    while (queue.length > 0) {
      currNode = queue.shift();
      result.push(currNode.value);
      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
      this.level++;
    }

    return result;
  }
}

const rootNode = new Node(10);
rootNode.left = new Node(6);
rootNode.right = new Node(15);
rootNode.left.left = new Node(3);
rootNode.left.right = new Node(8);
rootNode.right.right = new Node(20);

console.log(rootNode);

const tree = new Tree();
console.log(tree.bfs(rootNode));
