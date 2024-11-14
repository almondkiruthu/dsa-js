class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findTreeMinimumDepth(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const queue = [];
  queue.push(root);
  let miniumTreeDepth = 0;
  while (queue.length > 0) {
    miniumTreeDepth += 1;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return miniumTreeDepth;
      }

      // insert the children of currentNode in the queue
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return result;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(5);
console.log(`Tree minimum depth is: ${findTreeMinimumDepth(root)}`);

root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree minimum depth is: ${findTreeMinimumDepth(root)}`);
