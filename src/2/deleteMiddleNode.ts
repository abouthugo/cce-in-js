import Node from "./Node";

/**
 * The idea here is that we have 3 pointers
 * - slow moves one by one in each node
 * - fast moves twice as fast as slow
 * - prev keeps track of the previous node slow has visited
 *
 * Once fast reaches the end of the list we know the slow pointer has reached the middle of the list. Then we can use
 * previous to detach slow from the list.
 * @param n
 */
export function deleteMiddleNode(n: Node<number>): Node<number> {
  let slow: Node<number> | null = n;
  let fast: Node<number> | null = n.next;
  let prev: Node<number> | null = null;
  while (fast && fast.next && slow) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (slow && prev) prev.next = slow.next;
  return n;
}
