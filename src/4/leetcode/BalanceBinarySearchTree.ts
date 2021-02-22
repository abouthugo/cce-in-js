import TreeNode from "./TreeNode";

export default function BalanceBST(root: TreeNode): TreeNode | null {
  const arr: number[] = [];
  inOrderTraversal(root);
  return balancedTree(arr);

  function inOrderTraversal(node: TreeNode | null) {
    if (node === null) return;
    inOrderTraversal(node.left);
    arr.push(node.val);
    inOrderTraversal(node.right);
  }

  function balancedTree(tree: number[]): TreeNode | null {
    if (tree.length <= 0) return null;
    const mid = Math.floor((tree.length - 1) / 2);
    const newRoot = new TreeNode(tree[mid]);
    const leftBranch = tree.slice(0, mid);
    newRoot.left = balancedTree(leftBranch);
    const rightBranch = tree.slice(mid + 1);
    newRoot.right = balancedTree(rightBranch);
    return newRoot;
  }
}
