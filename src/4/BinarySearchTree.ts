export default class BinarySearchTree<T> {
  private data: T;
  left: BinarySearchTree<T> | null;
  right: BinarySearchTree<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(x: T): void {
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

  delete(
    x: T,
    parent: BinarySearchTree<T> | null = null,
    direction?: "right" | "left"
  ): void {
    if (x === this.data) {
      // found it
      if (this.left === null && this.right === null && parent && direction) {
        noChildren(parent, direction);
      } else if (
        parent &&
        direction &&
        ((this.left !== null && this.right === null) ||
          (this.left === null && this.right !== null))
      ) {
        oneChild(this, parent, direction);
      } else if (this.right && this.left) {
        const leftMost = getLeftmostchild(this.right, this, 0);
        this.data = leftMost.data;
      }
    } else if (x > this.data && this.right !== null) {
      this.right.delete(x, this, "right");
    } else if (this.left !== null) {
      this.left.delete(x, this, "left");
    }

    function noChildren(
      parent: BinarySearchTree<T>,
      direction: "right" | "left"
    ) {
      // Case 1: no children
      switch (direction) {
        case "left":
          if (parent.left) {
            parent.left = null;
          }
          break;
        case "right":
          if (parent.right) {
            parent.right = null;
          }
      }
    }

    function oneChild(
      root: BinarySearchTree<T>,
      parent: BinarySearchTree<T>,
      direction: "right" | "left"
    ) {
      switch (direction) {
        case "right":
          if (parent.right) {
            parent.right = root.left === null ? root.right : root.left;
          }
        case "left":
          if (parent.left) {
            parent.left = root.left === null ? root.right : root.left;
          }
      }
    }

    function getLeftmostchild(
      branch: BinarySearchTree<T>,
      parent: BinarySearchTree<T>,
      depth: number
    ): BinarySearchTree<T> {
      if (branch.left === null) {
        // when we cannot go further down the left side
        if (depth > 0) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        return branch;
      }

      // keep going down the left side
      return getLeftmostchild(branch.left, branch, depth + 1);
    }
  }

  print(): void {
    console.log(JSON.stringify(this, null, 2));
  }

  flatten(): any[] | null {
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
