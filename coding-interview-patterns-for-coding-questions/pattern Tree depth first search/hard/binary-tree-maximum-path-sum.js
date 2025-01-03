class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaximumPathSum(root) {
  let maxPathSum = 0;
  function dfs(root) {
    if (root === null) return 0;
    let leftSum = Math.max(0, dfs(root.left));
    let rightSum = Math.max(0, dfs(root.right));

    let currentPathSum = leftSum + root.value + rightSum;

    maxPathSum = Math.max(maxPathSum, currentPathSum);

    return root.value + Math.max(leftSum, rightSum);
  }
  dfs(root);
  return maxPathSum;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(`Maximum path sum is: ${findMaximumPathSum(root)}`);

const root1 = new TreeNode(2);
root1.left = new TreeNode(-1);
console.log(`Maximum path sum is: ${findMaximumPathSum(root1)}`);
