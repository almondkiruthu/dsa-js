class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findPathWithSequence(root, sequence) {
  let sequenceNum = Number(sequence.join(""));
  let res = [];
  let currentArray = [];

  dfs(root, currentArray, res);

  for (let pathSum of res) {
    if (pathSum === sequenceNum) {
      return true;
    }
  }
  return false;
}

function dfs(root, currentArray, res) {
  if (root === null) {
    return;
  }

  currentArray.push(root.value);

  if (!root.left && !root.right) {
    let pathValues = Number(currentArray.join(""));
    res.push(pathValues);
  } else {
    if (root.left !== null) dfs(root.left, currentArray, res);
    if (root.right !== null) dfs(root.right, currentArray, res);
  }

  currentArray.pop(); //Backtrack to explore other paths
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${findPathWithSequence(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${findPathWithSequence(root, [1, 1, 6])}`);
