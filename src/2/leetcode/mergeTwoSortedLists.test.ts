import flatList from "./flatList";
import { solution } from "./mergeTwoSortedLists";
import { ListNode } from "./ReverseLinkedList";

test("Testing the base case", () => {
  const listA = ListNode(1, ListNode(2, ListNode(4, null)));
  const listB = ListNode(1, ListNode(3, ListNode(4, null)));

  const r = solution(listA, listB);
  const result = flatList(r);

  expect(result).toStrictEqual([1, 1, 2, 3, 4, 4]);
});
