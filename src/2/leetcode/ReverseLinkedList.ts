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

/**
 * The iterative solution in leet code
 * @param head
 */
function reverseList2(head: ListNode) {
  let prev = null;
  let current = head;
  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

/**
 * The recursive solution from leet code
 * @param head
 */
function reverseListRecursive(head: ListNode): ListNode {
  if (head === null || head.next === null) return head;
  const endOfList = reverseListRecursive(head.next);
  // [1] -> [2]
  head.next.next = head;
  // [2] -> [1] -> [2] (-> [1]..... recursive forever)
  head.next = null;
  // [2] -> 1 -> null
  return endOfList;
}

interface ListNode {
  val: any;
  next: any;
}
