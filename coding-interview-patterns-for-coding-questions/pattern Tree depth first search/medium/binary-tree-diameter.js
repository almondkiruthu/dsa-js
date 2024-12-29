class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDiameter(root) {
  let treeDiameter = 0;
  function dfs(root) {
    if (root === null) return 0;
    let leftHeight = dfs(root.left);
    let rightHeight = dfs(root.right);

    treeDiameter = Math.max(treeDiameter, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }
  dfs(root);
  return treeDiameter; 
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(`Tree Diameter is: ${findDiameter(root)}`);

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
console.log(`Tree Diameter is: ${findDiameter(root1)}`);