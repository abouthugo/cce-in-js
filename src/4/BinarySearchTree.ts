export default class BinarySearchTree<T> {
  private data: T;
  private left: BinarySearchTree<T> | null;
  private right: BinarySearchTree<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(x: T) {
    if (x > this.data) {
      if (this.right === null) {
        this.right = new BinarySearchTree(x);
      } else {
        this.right.insert(x);
      }
    } else {
      if (this.left === null) {
        this.left = new BinarySearchTree(x);
      } else {
        this.left.insert(x);
      }
    }
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }

  flatten() {
    return recursiveFlatten(this);

    function recursiveFlatten(root: BinarySearchTree<T> | null): any[] | null {
      if (root === null) return null;
      return [
        root.data,
        [recursiveFlatten(root.left), recursiveFlatten(root.right)],
      ];
    }
  }

  traverse(): T[] {
    const res: T[] = [];
    visit(this);
    return res;

    function visit(n: BinarySearchTree<T> | null) {
      if (n === null) return;
      visit(n.left);
      res.push(n.data);
      visit(n.right);
    }
  }
}
