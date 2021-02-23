import TreeNode from "./TreeNode";

export default function BalanceBST(root: TreeNode): TreeNode | null {
  const arr: number[] = [];
  inOrderTraversal(root);
  return balancedTree(arr);

  /**
   * Goes through the tree and adds the values to a temporary array in order.
   * @param node
   */
  function inOrderTraversal(node: TreeNode | null) {
    if (node === null) return;
    inOrderTraversal(node.left);
    arr.push(node.val);
    inOrderTraversal(node.right);
  }

  /**
   * Given the array of "ordered" values it find the middle and sets it as the root and then it does the same for the left and right branches recursively.
   * We then end up with a tree that is balanced
   * @param tree
   */
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
