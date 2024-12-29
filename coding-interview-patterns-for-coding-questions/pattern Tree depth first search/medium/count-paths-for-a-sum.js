class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countPaths(root, targetSum) {
  let pathCount = 0;
  function dfs(root, targetSum, currentPath) {
    if (root === null) return 0;
    currentPath.push(root.value);
    let pathSum = 0;
    for (let i = currentPath.length - 1; i > -1; i--) {
      pathSum += currentPath[i];
      if (pathSum === targetSum) {
        pathCount++;
      }
    }

    dfs(root.left, targetSum, currentPath);
    dfs(root.right, targetSum, currentPath);

    currentPath.pop();
  }

  dfs(root, targetSum, []);
  return pathCount;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree has paths: ${countPaths(root, 11)}`);
