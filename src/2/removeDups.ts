/**
 * 2.1 - Remove Dups
 * ======================================================
 * Remove duplicates from an unsorted linked list
 */

import Node from "./Node";

/**
 * My implementation using a hash map as buffer to check for values seen
 * @param head
 */
export function removeDups(head: Node<number>): Node<number> {
  const hMap = new Map();
  let prev = null;
  let curr = head;
  while (curr.next !== null) {
    if (hMap.has(curr.data) && prev !== null) {
      prev.next = curr.next;
    } else {
      hMap.set(curr.data, curr.data);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}

/**
 * A no buffer implementation found in the book and adapted to JS
 * @param head
 */
export function removeDupsNoBuffer(head: Node<number>): Node<number> {
  let current: Node<number> | null = head;
  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  return head;
}
