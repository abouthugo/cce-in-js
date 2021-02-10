/**
 * This solution uses 2 pointers. One of them is moving twice as fast as the first one
 * and therefore when the 2nd pointer reaches the end of the list then the first one
 * must be in the middle.
 * @param head
 */
export function middleOfLinkedList(head: ListNode): ListNode {
  let curr = head;
  let next = head;
  while (next && next.next) {
    curr = curr.next;
    next = next.next.next;
  }

  return curr;
}
