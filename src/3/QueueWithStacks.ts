import MyStack from "./Stack";

export default class QueueWithStacks<T> {
  private newestStack: MyStack<T>;
  private oldestStack: MyStack<T>;

  constructor() {
    this.newestStack = new MyStack<T>();
    this.oldestStack = new MyStack<T>();
  }

  add(item: T): void {
    this.newestStack.push(item);
  }

  /**
   * This essentially dumps all the items from newest into the oldest.
   * By pushing all the elements of the newest stack into the oldest stack we essentially reverse the
   * order of the stack and create a queue ordered stack with the oldest
   *
   */
  private shiftStacks(): void {
    if (this.oldestStack.isEmpty()) {
      while (!this.newestStack.isEmpty()) {
        this.oldestStack.push(this.newestStack.pop());
      }
    }
  }

  remove(): T {
    this.shiftStacks();
    return this.oldestStack.pop();
  }

  peek(): T {
    this.shiftStacks();
    return this.oldestStack.peek();
  }

  isEmpty(): boolean {
    return this.newestStack.isEmpty() && this.oldestStack.isEmpty();
  }
}
