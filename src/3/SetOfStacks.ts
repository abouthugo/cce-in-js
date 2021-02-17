import Node from "../2/Node";

export default class SetOfStacks<T> {
  top: Node<T> | null;
  private _nextStacks: Node<T>[];
  capacity: number;
  counter: number;

  constructor(capacity: number) {
    this.top = null;
    this.capacity = capacity;
    this._nextStacks = [];
    this.counter = 0;
  }

  push(d: T): void {
    const newTop = new Node(d);
    if (this.counter >= this.capacity && this.top) {
      this._nextStacks.push(this.top);
      this.top = newTop;
      this.counter = 1;
    } else {
      newTop.appendToTail(this.top);
      this.counter++;
      this.top = newTop;
    }
  }

  pop(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    const temp = this.top.data;
    this.top = this.top.next;
    this.counter--;

    if (!this.top && this._nextStacks.length > 0) {
      // we exhausted the current stack but have the ability to change to the next
      const newTop = this._nextStacks.pop();
      if (newTop) {
        // It is trivial to check but typescript keeps throwing me errors
        this.top = newTop;
        this.counter = this.capacity;
      }
    }
    return temp;
  }

  peek(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    return this.top.data;
  }

  isEmpty(): boolean {
    return this.top ? false : true;
  }

  flatten(): T[] {
    if (!this.top) return [];
    let res: T[] = [];
    let next = this._nextStacks.pop();
    res = [...res, ...this.top.flatten()];
    while (next) {
      res = [...res, ...next.flatten()];
      next = this._nextStacks.pop();
    }

    return res;
  }
}
