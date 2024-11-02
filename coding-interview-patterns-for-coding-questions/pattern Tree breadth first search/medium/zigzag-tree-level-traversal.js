class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const queue = [];
  queue.push(root);
  let leftToRight = true;
  while (queue.length > 0) {
    let levelSize = queue.length;
    const levelValues = [];
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // add the node to the currentLevel based on the traverse direction
      if (leftToRight) {
        levelValues.push(currentNode.value);
      } else {
        levelValues.unshift(currentNode.value);
      }

      // insert the children of currentNode in the queue
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(levelValues);
    // reverse the traversal direction
    leftToRight = !leftToRight;
  }
  return result;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);

console.log(`Zigzag traversal: ${traverse(root)}`);
