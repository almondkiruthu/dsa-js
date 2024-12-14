class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    process.stdout.write("Traversal using 'next' pointer: ");
    let current = this;
    while (current !== null) {
      process.stdout.write(`${current.value} `);
      current = current.next;
    }
  }
}

function connectAllSiblings(root) {
  if (root === null) {
    return;
  }
  const queue = [];
  queue.push(root);
  let currentNode = null,
    previousNode = null;
  while (queue.length) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    // insert the children of currentNode in the queue
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

connectAllSiblings(root)
root.print_tree()