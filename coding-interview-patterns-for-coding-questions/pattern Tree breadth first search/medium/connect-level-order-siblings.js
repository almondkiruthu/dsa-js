class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  printLevelOrder() {
    console.log("Level order traversal using next pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current !== null) {
        process.stdout.write(`${current.value} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
}

function connectLevelOrderSiblings(root) {
  if (root === null) {
    return null;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      // insert the children of currentNode in the queue
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }

  if (queue.length > 0) {
    return queue.shift();
  }

  return null;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

connectLevelOrderSiblings(root);
root.printLevelOrder();
