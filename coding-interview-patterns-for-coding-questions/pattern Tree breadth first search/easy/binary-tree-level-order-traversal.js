class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(rootNode) {
  const result = [];

  if (!rootNode) return result;

  const queue = [];
  let currentNode = rootNode;
  queue.push(currentNode);
  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelValues = [];
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      levelValues.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(levelValues);
  }
  return result;
}

const rootNode = new TreeNode(12);
rootNode.left = new TreeNode(7);
rootNode.right = new TreeNode(1);
rootNode.left.left = new TreeNode(9);
rootNode.right.left = new TreeNode(10);
rootNode.right.right = new TreeNode(5);

console.log(`Level order traversal: ${traverse(rootNode)}`);
