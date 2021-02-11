export default function flatList(n: ListNode) {
  const arr = [];

  while (n) {
    arr.push(n.val);
    n = n.next;
  }

  return arr;
}
