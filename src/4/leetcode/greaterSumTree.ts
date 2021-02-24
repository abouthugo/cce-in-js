import TreeNode from "./TreeNode";

function greaterSumTree(root: TreeNode): TreeNode {
  let sum = 0;
  helper(root);
  return root;

  function helper(node: TreeNode | null) {
    if (node === null) return;
    helper(node.right);
    node.val += sum;
    sum = node.val;
    helper(node.left);
  }
}
