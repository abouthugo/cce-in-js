import { deleteMiddleNode } from "./deleteMiddleNode";
import LinkedList from "./LinkedList";

test("Removing from an odd list [1,3,5]", () => {
  const list = new LinkedList<number>();
  list.insert(1);
  list.insert(3);
  list.insert(5);
  if (list.head) {
    const res = deleteMiddleNode(list.head);
    console.log(res.flatten());
    expect(res.flatten()).toStrictEqual([1, 5]);
  }
});

test("Removing from an even list [1,3,5,6,7,8]", () => {
  const l2 = new LinkedList<number>();
  l2.insert(1);
  l2.insert(3);
  l2.insert(5);
  l2.insert(6);
  l2.insert(7);
  l2.insert(8);
  if (l2.head) {
    const res = deleteMiddleNode(l2.head);
    console.log(res.flatten());
    expect(res.flatten()).toStrictEqual([1, 3, 6, 7, 8]);
  }
});
