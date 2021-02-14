/**
 * The idea behind this solution is that at the moment of intersection we want to go back to the head and start checking if the two pointers are the same.
 * This works because by the time the head reaches the suspected cycle origin the second pointer has also gotten there. Thus when they meet again we are
 * sure that that is the start of the cycle.
 * @param head
 */
export function detectCycle(head: ListNode): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      fast = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
  }

  return null;
}
