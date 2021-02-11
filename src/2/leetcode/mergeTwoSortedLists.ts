import { ListNode } from "./ReverseLinkedList";

export function solution(l1: ListNode, l2: ListNode): ListNode {
  // gotta check for null lists
  if (!l1 && !l2) {
    return l1;
  } else if (!l1 && l2) {
    return l2;
  } else if (l1 && !l2) {
    return l1;
  }

  let l;
  let r;
  // check who is the "lower" list first
  if (l1.val >= l2.val) {
    l = l2;
    r = l1;
  } else {
    l = l1;
    r = l2;
  }
  // this will hold our answer
  const temp = ListNode(0, null);
  // this will run along the list
  let tempRunner = temp;
  // at some point L will become null and thus we need to exhaust R nonetheless and vice versa
  while (l && r) {
    while (l && l.val <= r.val) {
      tempRunner.next = ListNode(l.val, null);
      tempRunner = tempRunner.next;
      l = l.next; // move along the "lower" list
    }
    tempRunner.next = ListNode(r.val, null);
    tempRunner = tempRunner.next;
    r = r.next;
  }

  // We need too clean up in case one list was exhausted faster than the other
  if (l) {
    tempRunner.next = l;
  } else if (r) {
    tempRunner.next = r;
  }

  // Return the next item because the first one was just a place holder
  return temp.next;
}
