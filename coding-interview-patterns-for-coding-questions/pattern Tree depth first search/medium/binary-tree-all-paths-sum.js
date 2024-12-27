class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findPaths(root, sum) {
  const allPaths = [];
  let currentSum = 0;
  dfs(root, sum, currentSum, [], allPaths);
  return allPaths;
}

function dfs(currentNode, sum, currentSum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }
  currentSum += currentNode.value;
  currentPath.push(currentNode.value);
  if (
    currentSum === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push([...currentPath]);
  } else {
    dfs(currentNode.left, sum, currentSum, currentPath, allPaths);
    dfs(currentNode.right, sum, currentSum, currentPath, allPaths);
  }
  currentPath.pop();
}
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree has paths: ${findPaths(root, 23)}`);
