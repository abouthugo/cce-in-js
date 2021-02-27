import LinkedList from "../2/LinkedList";
import BinarySearchTree from "./BinarySearchTree";

/**
 * Given a BST this function returns an array of linked lists containing all the elements in a given depth.
 * Each index in the array indicates a different depth in the tree.
 * @param root
 */
export function listOfDepths(
  root: BinarySearchTree<number>
): LinkedList<number>[] {
  const list: LinkedList<number>[] = [];
  breadthFirst(root);
  return list;

  /**
   * Performs a breadth first search on the tree and visits them in order.
   * @param tree
   * @param depth
   */
  function breadthFirst(tree: BinarySearchTree<number>) {
    const q: NodeDepthPair[] = [];
    q.push({ node: tree, depth: 0 });
    while (q.length > 0) {
      const r = q.shift();
      if (r && r.node) {
        visit(r.node, r.depth);
        if (r.node.left) q.push({ node: r.node.left, depth: r.depth + 1 });
        if (r.node.right) q.push({ node: r.node.right, depth: r.depth + 1 });
      }
    }
  }

  /**
   * Adds the given node to its corresponding level (depth) in the list array of LinkedList
   * @param node
   * @param depth
   */
  function visit(node: BinarySearchTree<number>, depth: number) {
    if (list[depth]) {
      list[depth].insert(node.val);
    } else {
      list[depth] = new LinkedList();
      list[depth].insert(node.val);
    }
  }
}

interface NodeDepthPair {
  node: BinarySearchTree<number> | null;
  depth: number;
}
