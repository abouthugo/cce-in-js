import flatList from "./flatList";
import { mySolution, leetcodeSolution } from "./removeSortedDups";
import { ListNode } from "./ReverseLinkedList";

test("My solution against base case", () => {
  const l = ListNode(1, ListNode(1, ListNode(2, ListNode(3, null))));
  const r = mySolution(l);
  const result = flatList(r);
  expect(result).toStrictEqual([1, 2, 3]);
});

test("Leetcode's solution against base case", () => {
  const l = ListNode(1, ListNode(2, ListNode(2, ListNode(3, null))));
  const r = leetcodeSolution(l);
  const result = flatList(r);
  expect(result).toStrictEqual([1, 2, 3]);
});
