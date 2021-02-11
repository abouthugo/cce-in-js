/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * Constraints:
 * - The number of nodes in the list is in the range [0, 300].
 * - -100 <= Node.val <= 100
 * - The list is guaranteed to be sorted in ascending order.
 */

// Because this is a problem where the input is ALWAYS sorted its different from the regular remove dups function

export function mySolution(head: ListNode): ListNode {
  const visited = new Map();
  let curr = head;
  let prev = curr; // because this avoids the "prev" possibly null error typescript throws

  while (curr) {
    if (visited.has(curr.val)) {
      prev.next = curr.next;
    } else {
      visited.set(curr.val, curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}

export function leetcodeSolution(head: ListNode): ListNode {
  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === curr.val) {
      // hop to the next
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}
