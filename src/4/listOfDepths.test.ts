import BinarySearchTree from "./BinarySearchTree";
import { listOfDepths } from "./listOfDepths";

test("Printing the list in order", () => {
  const tree = new BinarySearchTree<number>(10);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);

  const list = listOfDepths(tree);
  for (const index in list) {
    console.log(`[${index}]: ${list[index].toString()}`);
  }
});
