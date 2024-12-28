class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSumOfPathNumbers(root) {
  let res = [];
  let currentArray = [];
  dfs(root, currentArray, res);
  let totalSum = 0;
  for (let pathSum of res) {
    totalSum += pathSum;
  }
  return totalSum;
}

function dfs(root, currentArray, res) {
  if (root === null) {
    return 0;
  }

  currentArray.push(root.value);

  if (!root.left && !root.right) {
    let pathValues = Number(currentArray.join(""));
    res.push(pathValues);
  } else {
    if (root.left !== null) dfs(root.left, currentArray, res);
    if (root.right !== null) dfs(root.right, currentArray, res);
  }

  currentArray.pop();
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Total Sum of Path Numbers: ${findSumOfPathNumbers(root)}`);
