import Node from "./Node";
import { reverse } from "./reverse";

/**
 * Pretty straightforward solution. You reverse the list and traverse it to find out if the data values match.
 * @param head
 */
export function palindromeReverse(head: Node<number>): boolean {
  const reversedList = reverse(head);
  let normal_p: Node<number> | null = head;
  let reverse_p: Node<number> | null = reversedList;
  while (normal_p && reverse_p) {
    if (normal_p.data !== reverse_p.data) return false;
    normal_p = normal_p.next;
    reverse_p = reverse_p.next;
  }
  return true;
}

/**
 * This solution uses a stack list to push the values and then pop them to find out if the list is a palindrome or not.
 * Futhermore, the use of slow/fast pointer technique helps traversing to the first half for pushing to the stack.
 *
 * There is a special case when the list is odd we need to move the slow pointer one more time since the true middle does not
 * have a pair to compare we need to skip it.
 * @param head
 */
export function palindromeIterative(head: Node<number>): boolean {
  let fast: null | Node<number> = head;
  let slow: null | Node<number> = head;
  const stack = [];
  while (fast && fast.next && slow) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast && slow) {
    slow = slow.next;
  }

  while (slow) {
    if (stack.pop() !== slow.data) return false;
    slow = slow.next;
  }

  return true;
}
