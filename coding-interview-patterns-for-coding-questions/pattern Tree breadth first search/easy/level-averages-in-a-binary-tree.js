class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLevelAverages(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelSum = 0.0;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      levelSum += currentNode.value;
      // insert the children of currentNode in the queue
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(levelSum / levelSize);
  }
  return result;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${findLevelAverages(root)}`);
