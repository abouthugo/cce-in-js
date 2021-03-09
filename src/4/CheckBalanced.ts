import BinarySearchTree from "./BinarySearchTree";

export function checkBalanced(root: BinarySearchTree<number>): boolean {
  return checkHeight(root) !== Number.MIN_SAFE_INTEGER;

  function checkHeight(node: BinarySearchTree<number> | null): number {
    if (node === null) return -1;

    const leftBranch = checkHeight(root.left);
    const rightBranch = checkHeight(root.right);

    if (Math.abs(leftBranch - rightBranch) < 2) {
      return Math.max(leftBranch, rightBranch);
    } else {
      return Number.MIN_SAFE_INTEGER;
    }
  }
}
