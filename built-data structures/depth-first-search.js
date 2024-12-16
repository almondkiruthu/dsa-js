class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  dfs_preorder_traversal(rootNode) {
    const result = [];
    if (!rootNode) return result;
    function traverse(node) {
      result.push(node.value);
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
    }
    traverse(rootNode);
    return result;
  }
  dfs_inorder_traversal(rootNode) {
    const result = [];
    if (!rootNode) return result;
    function traverse(node) {
      if (node.left !== null) traverse(node.left);
      result.push(node.value);
      if (node.right !== null) traverse(node.right);
    }
    traverse(rootNode);
    return result;
  }
  dfs_postorder_traversal(rootNode) {
    const result = [];
    if (!rootNode) return result;
    function traverse(node) {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      result.push(node.value);
    }
    traverse(rootNode);
    return result;
  }
}

const rootNode = new Node(10);
rootNode.left = new Node(6);
rootNode.right = new Node(15);
rootNode.left.left = new Node(3);
rootNode.left.right = new Node(8);
rootNode.right.right = new Node(20);

const tree = new Tree();
console.log(tree.dfs_preorder_traversal(rootNode));
console.log(tree.dfs_inorder_traversal(rootNode));
console.log(tree.dfs_postorder_traversal(rootNode));
