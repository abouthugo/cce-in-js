import LinkedList from "./LinkedList";
import { sumList } from "./sumLists";

test("Testing base case", () => {
  const l1 = new LinkedList<number>();
  const l2 = new LinkedList<number>();

  l1.insert(7);
  l1.insert(1);
  l1.insert(6);

  l2.insert(5);
  l2.insert(9);
  l2.insert(2);

  if (l1.head && l2.head) {
    const result = sumList(l1.head, l2.head);
    if (result) {
      expect(result.flatten()).toStrictEqual([2, 1, 9]);
    }
  }
});
