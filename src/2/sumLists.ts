import Node from "./Node";

/**
 *
 * @param l1 Represents a list with a reverse number, ex: 1->2->4 is equal to 421
 * @param l2 Represents a list with a reverse number, ex: 1->2->4 is equal to 421
 */
export function sumList(
  l1: Node<number>,
  l2: Node<number>
): Node<number> | null {
  let l1Pointer: null | Node<number> = l1;
  let l1Num = "";
  let l2Pointer: null | Node<number> = l2;
  let l2Num = "";

  while (l1Pointer) {
    l1Num = `${l1Pointer.data}${l1Num}`;
    l1Pointer = l1Pointer.next;
  }

  while (l2Pointer) {
    l2Num = `${l2Pointer.data}${l2Num}`;
    l2Pointer = l2Pointer.next;
  }

  const sum = (parseInt(l2Num) + parseInt(l1Num)).toString();
  const result = new Node(0);
  let resultPointer: Node<number> | null = new Node(0);
  for (let i = sum.length - 1; i >= 0; i--) {
    const newNode = new Node(parseInt(sum[i]));
    if (resultPointer) {
      resultPointer.appendToTail(newNode);
      resultPointer = resultPointer.next;
    }
  }
  return result.next;
}
