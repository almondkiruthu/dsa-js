class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeRightView(rootNode) {
  const result = [];

  if (!rootNode || rootNode === null) return result;

  const queue = [];
  let currentNode = null;
  queue.push(rootNode);
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // if it is the last node of this level, add it to the result
      if (i === levelSize - 1) {
        result.push(currentNode.value);
      }
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return result;
}

const rootNode = new TreeNode(12);
rootNode.left = new TreeNode(7);
rootNode.right = new TreeNode(1);
rootNode.left.left = new TreeNode(9);
rootNode.right.left = new TreeNode(10);
rootNode.right.right = new TreeNode(5);
rootNode.left.left.left = new TreeNode(3);

console.log(`Level order traversal: ${treeRightView(rootNode)}`);
