import Node from "../2/Node";

export default class MyStack<T> {
  top: Node<T> | null;
  constructor() {
    this.top = null;
  }

  push(d: T): void {
    const newTop = new Node(d);
    newTop.appendToTail(this.top);
    this.top = newTop;
  }

  pop(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    const temp = this.top.data;
    this.top = this.top.next;

    return temp;
  }

  peek(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    return this.top.data;
  }

  isEmpty(): boolean {
    return this.top ? true : false;
  }

  flatten(): T[] {
    let ref = this.top;
    const res: T[] = [];
    while (ref) {
      res.push(ref.data);
      ref = ref.next;
    }

    return res;
  }
}
