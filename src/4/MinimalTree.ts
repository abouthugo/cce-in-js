import BinarySearchTree from "./BinarySearchTree";

/**
 * Returns a binary search tree with minimal height
 * @param elements a sorted (increasing order) array with unique integer elements
 */
export function MinimalTree(
  elements: number[]
): BinarySearchTree<number> | null {
  if (elements.length <= 0) return null;
  const mid = Math.floor((elements.length - 1) / 2);
  const newRoot = new BinarySearchTree(elements[mid]);
  const leftBranch = elements.slice(0, mid);
  const rightBranch = elements.slice(mid + 1);
  newRoot.left = MinimalTree(leftBranch);
  newRoot.right = MinimalTree(rightBranch);

  return newRoot;
}
