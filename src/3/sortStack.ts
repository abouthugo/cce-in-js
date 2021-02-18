import MyStack from "./Stack";

export function sortStack(stack: MyStack<number>): MyStack<number> {
  const t = new MyStack<number>();
  t.push(stack.pop());
  while (!stack.isEmpty()) {
    const val = stack.pop();
    let counter = 0;
    while (!t.isEmpty() && val > t.peek()) {
      // pop from stack
      stack.push(t.pop());
      counter++;
    }
    // place it in order
    t.push(val);

    // bring back the sorted piece
    while (counter > 0) {
      t.push(stack.pop());
      counter--;
    }
  }

  return t;
}
