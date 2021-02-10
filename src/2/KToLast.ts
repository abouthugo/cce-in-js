import Node from "./Node";

/**
 * Function that returns the kth to last item in the linked list
 * @param head
 */
export function kthToLast(head: Node<number>, k: number): Node<number> {
  let slow = head;
  let fast: Node<number> | null = head;
  while (slow.next) {
    let i;
    for (i = 0; i < k; i++) {
      /**
       * When the fast pointer gets to the end of the list before we are able to find a k-to-last
       * then the
       */
      if (fast === null) throw new Error("K is bigger than the list itself");
      fast = fast.next;
    }
    if (fast === null) break;
    slow = slow.next;
    fast = slow;
  }

  return slow;
}
