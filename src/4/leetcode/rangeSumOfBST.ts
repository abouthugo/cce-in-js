import TreeNode from "./TreeNode";

export function rangeSumOfBST(
  root: TreeNode,
  low: number,
  high: number
): number {
  let sum = 0;
  recursiveVisits(root);
  return sum;

  function recursiveVisits(root: TreeNode | null) {
    if (root === null) return;
    if (root.val >= low) recursiveVisits(root.left);
    if (root.val >= low && root.val <= high) sum += root.val;
    if (root.val <= high) recursiveVisits(root.right);
  }
}
