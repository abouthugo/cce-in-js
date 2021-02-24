import BinarySearchTree from "./BinarySearchTree";

test("Inserts", () => {
  const tree = new BinarySearchTree(10);
  tree.insert(16);
  tree.insert(18);
  tree.insert(10);
  tree.insert(2);
  tree.insert(3);
  tree.insert(6);
  tree.insert(8);
  tree.insert(56);
  tree.insert(11);
});

test("Flatten", () => {
  const tree = new BinarySearchTree(0);
  tree.insert(1);
  tree.insert(2);
});

test("Deleting leaf node", () => {
  const tree = new BinarySearchTree(2);
  tree.insert(1);
  tree.insert(7);
  tree.insert(8);
  tree.insert(4);
  tree.insert(3);
  tree.insert(6);
  tree.insert(5);

  tree.delete(3);
});

test("Deleting node with one child", () => {
  const tree = new BinarySearchTree(2);
  tree.insert(1);
  tree.insert(7);
  tree.insert(8);
  tree.insert(4);
  tree.insert(3);
  tree.insert(6);
  tree.insert(5);

  tree.delete(6);
});

test("Deleting node with two children nodes", () => {
  const tree = new BinarySearchTree(2);
  tree.insert(1);
  tree.insert(7);
  tree.insert(8);
  tree.insert(4);
  tree.insert(3);
  tree.insert(6);
  tree.insert(5);

  tree.delete(4);
});

test("Deleting the root node", () => {
  const tree = new BinarySearchTree(2);
  tree.insert(1);
  tree.insert(7);
  tree.insert(8);
  tree.insert(4);
  tree.insert(3);
  tree.insert(6);
  tree.insert(5);

  tree.delete(2);
});
