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
}
