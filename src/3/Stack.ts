import Node from "../2/Node";

export default class MyStack<T> {
  top: Node<T> | null;
  private _min: T | undefined;
  constructor() {
    this.top = null;
  }

  push(d: T): void {
    if (this._min === undefined) {
      this._min = d;
    } else if (d < this._min) {
      this._min = d;
    }
    const newTop = new Node(d);
    newTop.appendToTail(this.top);
    this.top = newTop;
  }

  pop(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    const temp = this.top.data;

    if (temp === this.min) {
      // search new min
      if (this.top.next) {
        let p: Node<T> | null = this.top.next;
        let min = p.data;
        while (p) {
          if (p.data < min) {
            min = p.data;
          }
          p = p.next;
        }
        this._min = min;
      } else {
        this._min = undefined;
      }
    }

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
    return this.top ? false : true;
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

  get min(): T | undefined {
    return this._min;
  }
}
