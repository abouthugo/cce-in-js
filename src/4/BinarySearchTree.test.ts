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

  console.log(tree.traverse());
});

test("Flatten", () => {
  const tree = new BinarySearchTree(0);
  tree.insert(1);
  tree.insert(2);

  const res = tree.flatten();
  console.log(JSON.stringify(res, null, 1));
});
