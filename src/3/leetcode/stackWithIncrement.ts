export default class IncrementalStack {
  private stack: number[];
  private maxSize: number;
  private _size: number;

  constructor(max: number) {
    this.stack = [];
    this.maxSize = max;
    this._size = 0;
  }

  /**
   * Adds x to the top of the stack if the stack hasn't reached the maxSize.
   * @param x
   */
  push(x: number): void {
    if (this._size < this.maxSize) {
      this.stack.push(x);
      this._size++;
    }
  }

  /**
   * Pops and returns the top of stack or -1 if the stack is empty.
   */
  pop(): number {
    const val = this.stack.pop();
    if (this._size > 0 && val) {
      this._size--;
      return val;
    } else {
      return -1;
    }
  }

  peek(): number {
    return this.stack[this._size - 1];
  }

  /**
   * Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.
   * @param k
   * @param val
   */
  increment(k: number, val: number): void {
    let counter = this._size;
    const tempStack = [];
    while (this.stack.length > 0) {
      let item = this.stack.pop();
      if (counter <= k && item !== undefined) {
        item += val;
      }
      tempStack.push(item);
      counter--;
    }

    while (tempStack.length > 0) {
      const item = tempStack.pop();
      if (item !== undefined) this.stack.push();
    }
  }
}
