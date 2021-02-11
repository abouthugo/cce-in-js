/**
 * Basic Node class
 */
export default class Node<T> {
  next: Node<T> | null;
  data: T;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  appendToTail(next: Node<T>): void {
    this.next = next;
  }

  flatten(): T[] {
    const arr = [];
    arr.push(this.data);
    let next = this.next;
    while (next) {
      arr.push(next.data);
      next = next.next;
    }

    return arr;
  }
}
