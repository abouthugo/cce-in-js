/**
 * The technique used to solve this algorithm is basically a 2 pointer technique.
 * The idea is that by having 2 pointers go around the linked list, one moving  one at a time and another one moving
 * twice as fast. At some point these two pointers will meet or be the same iff there is a cycle in the linked list.
 * @param head
 */
export function hasCycle(head: ListNode): boolean {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (Object.is(slow, fast)) {
      return true;
    }
  }

  return false;
}
