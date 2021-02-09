export function mySolution(head: ListNode): number {
  let str = "";

  let curr = head;
  while (curr) {
    str += curr.val;
    curr = curr.next;
  }

  return parseInt(str, 2);
}

export function bitwiseSolution(head: ListNode): number {
  let num = head.val;
  while (head.next !== null) {
    num = (num << 1) | head.next.val;
    head = head.next;
  }
  return num;
}
