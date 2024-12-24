class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function hasPath(root, sum) {
  if (root === null) return false;

  if (root.value === sum && root.left === null && root.right === null)
    return true;

  // recursively call to traverse the left and right sub-tree
  return (
    hasPath(root.left, sum - root.value) ||
    hasPath(root.right, sum - root.value)
  );
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);
