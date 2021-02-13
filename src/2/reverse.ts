import Node from "./Node";

export function reverse(head: Node<number>): Node<number> {
  let node: null | Node<number> = head;
  let newFront = null;
  while (node) {
    const n = new Node(node.data);
    n.next = newFront;
    newFront = n;
    node = node.next;
  }

  if (newFront) {
    return newFront;
  }
  return head;
}
