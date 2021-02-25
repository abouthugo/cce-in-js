export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
