class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSuccessor(root, key) {
  if (root === null) {
    return null;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    // insert the children of currentNode in the queue
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
    if (currentNode.value === key) {
      break;
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

let result = findSuccessor(root, 12);
if (result) {
  console.log(result.value);
}
result = findSuccessor(root, 9);
if (result) {
  console.log(result.value);
}
