import Node from "../2/Node";

export default class MyQueue<T> {
  top: null | Node<T>;

  constructor() {
    this.top = null;
  }

  add(d: T): void {
    if (this.top === null) {
      this.top = new Node(d);
    } else {
      let n = this.top;
      while (n.next) {
        n = n.next;
      }
      n.next = new Node(d);
    }
  }

  remove(): T {
    if (this.top === null) throw new Error("The Queue is empty");

    const val = this.top.data;
    this.top = this.top.next;

    return val;
  }

  peek(): T {
    if (this.top === null) throw new Error("The Queue is empty");
    return this.top.data;
  }

  isEmpty(): boolean {
    return this.top ? false : true;
  }

  flatten(): T[] {
    if (this.top) {
      return this.top.flatten();
    } else {
      return [];
    }
  }
}
