export class StackWithQueues<T> {
  private first: T[];
  private last: T[];

  constructor() {
    this.first = [];
    this.last = [];
  }

  push(x: T): void {
    this.first.push(x);
  }

  private dumpQueue(): void {
    while (this.first.length > 0) {
      const val = this.first.shift();
      if (val) this.last.unshift(val);
    }
  }

  top(): T {
    this.dumpQueue();
    return this.last[0];
  }

  pop(): T | undefined {
    this.dumpQueue();
    return this.last.shift();
  }

  isEmpty(): boolean {
    return this.first.length <= 0 && this.last.length <= 0;
  }
}
