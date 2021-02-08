/**
 * Reverse a singly linked list.
 */

function ListNode(val: any, next: any) {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}

/**
 * My simple brute force solution
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head: ListNode) {
  const list = [];
  let n = head;
  while (n) {
    list.unshift(n.val);
    n = n.next;
  }

  n = head;
  for (const item of list) {
    n.val = item;
    n = n.next;
  }

  return head;
}

interface ListNode {
  val: any;
  next: any;
}
